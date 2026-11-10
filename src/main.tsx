import React,{Component} from 'react';
import {createRoot} from 'react-dom/client';
import App from './app/App';
import './styles/main.css';
class ErrorBoundary extends Component<{children:React.ReactNode},{failed:boolean}>{state={failed:false};static getDerivedStateFromError(){return {failed:true};}render(){return this.state.failed?<main className="locked-page"><h1>Uma página se soltou.</h1><p>Não alteramos sua jornada salva. Reabra a biblioteca para tentar novamente.</p><button className="primary" onClick={()=>location.reload()}>Reabrir a biblioteca</button></main>:this.props.children;}}
createRoot(document.getElementById('root')!).render(<ErrorBoundary><App/></ErrorBoundary>);
