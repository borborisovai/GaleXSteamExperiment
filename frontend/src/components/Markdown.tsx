import type { ReactNode } from 'react';

/**
 * Deliberately small, dependency-free Markdown renderer for Thunderstore
 * readmes. Everything is emitted as React nodes — no `dangerouslySetInnerHTML`
 * and no HTML pass-through — which keeps Steam's CSP happy and makes provider
 * content harmless.
 */

type Inline = ReactNode;

function renderInline(text: string, keyPrefix: string): Inline[] {
	const nodes: Inline[] = [];
	let rest = text;
	let index = 0;

	const pushText = (value: string) => {
		if (value) nodes.push(value);
	};

	while (rest.length > 0) {
		const linkMatch = /^\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/.exec(rest);
		if (linkMatch) {
			nodes.push(
				<a key={`${keyPrefix}-l${index}`} href={linkMatch[2]} target="_blank" rel="noreferrer noopener">
					{linkMatch[1]}
				</a>,
			);
			rest = rest.slice(linkMatch[0].length);
			index += 1;
			continue;
		}
		const codeMatch = /^`([^`]+)`/.exec(rest);
		if (codeMatch) {
			nodes.push(<code key={`${keyPrefix}-c${index}`}>{codeMatch[1]}</code>);
			rest = rest.slice(codeMatch[0].length);
			index += 1;
			continue;
		}
		const boldMatch = /^(\*\*|__)(.+?)\1/.exec(rest);
		if (boldMatch) {
			nodes.push(<strong key={`${keyPrefix}-b${index}`}>{renderInline(boldMatch[2] ?? '', `${keyPrefix}b${index}`)}</strong>);
			rest = rest.slice(boldMatch[0].length);
			index += 1;
			continue;
		}
		const italicMatch = /^(\*|_)([^*_]+?)\1/.exec(rest);
		if (italicMatch) {
			nodes.push(<em key={`${keyPrefix}-i${index}`}>{renderInline(italicMatch[2] ?? '', `${keyPrefix}i${index}`)}</em>);
			rest = rest.slice(italicMatch[0].length);
			index += 1;
			continue;
		}
		// Consume one character at a time until the next special character.
		const nextSpecial = rest.slice(1).search(/[[\]`*_]/);
		const chunk = nextSpecial === -1 ? rest : rest.slice(0, nextSpecial + 1);
		pushText(chunk);
		rest = rest.slice(chunk.length);
		index += 1;
	}

	return nodes;
}

export function Markdown({ source, className }: { source: string; className?: string }) {
	const lines = source.replace(/\r\n/g, '\n').split('\n');
	const blocks: ReactNode[] = [];
	let listItems: string[] = [];
	let codeLines: string[] = [];
	let inCode = false;
	let paragraph: string[] = [];

	const flushParagraph = () => {
		if (paragraph.length === 0) return;
		blocks.push(<p key={`p${blocks.length}`}>{renderInline(paragraph.join(' '), `p${blocks.length}`)}</p>);
		paragraph = [];
	};
	const flushList = () => {
		if (listItems.length === 0) return;
		blocks.push(
			<ul key={`ul${blocks.length}`}>
				{listItems.map((item, i) => (
					<li key={i}>{renderInline(item, `li${blocks.length}-${i}`)}</li>
				))}
			</ul>,
		);
		listItems = [];
	};

	for (const rawLine of lines) {
		const line = rawLine.trimEnd();

		if (line.trimStart().startsWith('```')) {
			if (inCode) {
				blocks.push(
					<pre key={`pre${blocks.length}`}>
						<code>{codeLines.join('\n')}</code>
					</pre>,
				);
				codeLines = [];
				inCode = false;
			} else {
				flushParagraph();
				flushList();
				inCode = true;
			}
			continue;
		}
		if (inCode) {
			codeLines.push(rawLine);
			continue;
		}

		if (!line.trim()) {
			flushParagraph();
			flushList();
			continue;
		}

		const heading = /^(#{1,6})\s+(.*)$/.exec(line);
		if (heading) {
			flushParagraph();
			flushList();
			const level = Math.min(4, heading[1]?.length ?? 1);
			const content = renderInline(heading[2] ?? '', `h${blocks.length}`);
			blocks.push(
				level <= 1 ? (
					<h3 key={`h${blocks.length}`}>{content}</h3>
				) : level === 2 ? (
					<h4 key={`h${blocks.length}`}>{content}</h4>
				) : (
					<h5 key={`h${blocks.length}`}>{content}</h5>
				),
			);
			continue;
		}

		const list = /^[-*+]\s+(.*)$/.exec(line.trim());
		if (list) {
			flushParagraph();
			listItems.push(list[1] ?? '');
			continue;
		}

		const quote = /^>\s?(.*)$/.exec(line.trim());
		if (quote) {
			flushParagraph();
			flushList();
			blocks.push(
				<blockquote key={`q${blocks.length}`}>{renderInline(quote[1] ?? '', `q${blocks.length}`)}</blockquote>,
			);
			continue;
		}

		if (/^(-{3,}|\*{3,}|_{3,})$/.test(line.trim())) {
			flushParagraph();
			flushList();
			blocks.push(<hr key={`hr${blocks.length}`} />);
			continue;
		}

		paragraph.push(line.trim());
	}

	if (inCode && codeLines.length) {
		blocks.push(
			<pre key={`pre${blocks.length}`}>
				<code>{codeLines.join('\n')}</code>
			</pre>,
		);
	}
	flushParagraph();
	flushList();

	return <div className={className ? `gx-md ${className}` : 'gx-md'}>{blocks}</div>;
}
