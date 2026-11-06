import { Component, type ErrorInfo, type ReactNode } from 'react';
import { message } from '../lib/bridge';
import { t, useLocale } from '../lib/i18n';
function Crash({error,onRetry}:{error:Error;onRetry:()=>void}){useLocale();return <div className="galex gx-crash" role="alert"><h2>{t('crashTitle')}</h2><p>{t('crashBody')}</p><pre>{message(error)}</pre><button className="gx-button" onClick={onRetry}>{t('retry')}</button></div>;}
export class ErrorBoundary extends Component<{children:ReactNode},{error?:Error}> {
  state: {error?:Error} = {};
  static getDerivedStateFromError(error:Error) { return {error}; }
  componentDidCatch(error:Error,info:ErrorInfo) { console.error('[GaleX]',error,info.componentStack); }
  render() {
    if(!this.state.error)return this.props.children;
    return <Crash error={this.state.error} onRetry={()=>this.setState({error:undefined})}/>;
  }
}