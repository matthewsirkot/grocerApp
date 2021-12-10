import RealmApp from "./Providers/realm"
import MongoDB from "./Providers/mongodb"

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';


ReactDOM.render(
    <React.StrictMode>
        <RealmApp>
            <MongoDB>
                <App />
            </MongoDB>
        </RealmApp>
    </React.StrictMode>,
    document.getElementById("root"));



