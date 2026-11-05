import { Component, type ErrorInfo, type ReactNode } from 'react';
export class ErrorBoundary extends Component<{children:ReactNode},{error?:Error}> {
  state: {error?:Error} = {};
  static getDerivedStateFromError(error:Error) { return {error}; }
  componentDidCatch(error:Error,info:ErrorInfo) { console.error('[GaleX]',error,info.componentStack); }
  render() {
    if(!this.state.error)return this.props.children;
    return <div className="galex gx-crash" role="alert"><h2>Не удалось отобразить раздел</h2><p>Файлы модов не изменялись. Попробуйте открыть раздел ещё раз.</p><pre>{this.state.error.message}</pre><button className="gx-button" onClick={()=>this.setState({error:undefined})}>Повторить</button></div>;
  }
}