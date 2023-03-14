import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import ReactDOM from 'react-dom';
import React from 'react';

import {CommonlibrxjsService} from 'commonlibrxjs';

import { DependencyProvider } from './contexts/DependencyProvider';







setupIonicReact();


//TODO: CLEAN THIS UP
const myService = {
  callMe: () => {
    console.log('Hola desde el servicio call desde APP.js');
  }
}

//const MyOtroServicio = new CommonsLibService();

const App: React.FC = () => ( 
  <DependencyProvider myService={myService}>    
        <Home />  
        </DependencyProvider> 
  

);


class ReactMfe extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(

      <React.StrictMode>        
        <App />        
      </React.StrictMode>,
      this
    );
  }
}

customElements.define('react-element', ReactMfe);

export default App;