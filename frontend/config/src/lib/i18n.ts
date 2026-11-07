import { toSentenceCase as toSentenceCaseLatin } from 'js-convert-case';
export function isLatinAlphabet(str: string): boolean { return /^[a-zA-Z0-9\s]*$/.test(str); }
export function toSentenceCase(str: string): string { return isLatinAlphabet(str) ? toSentenceCaseLatin(str) : str; }
