import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

import { DependencyProvider } from '../contexts/DependencyProvider';




const Home: React.FC = () => {

  const myService = {
    callMe: () => {
      console.log('Hola desde el servicio call desde Home');
    }
  }
  
  // const nuevaInstancia = new CommonlibrxjsService();

  // const nuevaInstancia2 = new CommonlibrxjsService2();
  
  return (
     
        <ExploreContainer />     
   
  );
};

export default Home;
