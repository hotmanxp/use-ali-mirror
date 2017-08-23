import React from 'react';
import { render } from 'mirrorx' 
import './index.css';
import App from './components/app';
import registerServiceWorker from './registerServiceWorker';

render(<App />, document.getElementById('root'));
registerServiceWorker();
