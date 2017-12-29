require('./style.scss');
import HttpClient from './common/httpClient/HttpClient.js';
import ReactDOM from 'react-dom';
import ApplicationPage from './page/ApplicationPage.jsx';

window.HttpClient = new HttpClient(this);

ReactDOM.render(<ApplicationPage />, document.getElementById('applicationPage'));

// PubSub.subscribe('uiEvent', (msg, obj) => { console.log(msg); console.log(obj); });