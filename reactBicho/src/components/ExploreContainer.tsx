import React, { useState, useEffect, useContext } from 'react';
import './ExploreContainer.css';

import { useDeps } from '../contexts/DepsContext';
import { useDependency } from '../contexts/DependencyProvider';

import { CommonsLibService } from 'commonlib4';

import { ButtonComponent } from "@syncfusion/ej2-react-buttons";



interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {  

  // const {myService} : {myService : CommonlibrxjsService2} = useDependency();
  // console.log('myService', myService)

  // //const service : CommonlibrxjsService = new myService();
  
  // myService.getMessage().subscribe((data) => {
  //   console.log("getMessage: ", data);
  // });

  const [contador, setContador] = useState(0);


  const _commonLibService = CommonsLibService.getInstance();
  
  
  
  const enviarMensaje = () => {
    _commonLibService.sendMessage(messageType.UserLogin); 
  }
  

  useEffect(() => {

    _commonLibService.getMessage().subscribe((data) => {     
      

      console.log("mensaje recibido en react ", data);

      if (data) {
        setContador((prevContador) => prevContador + 1);
      }
    });


    return () => {
      
    };
  }, [
    //contador
  ]);


  return (
    <div className="container">
      <div>
      <button onClick={enviarMensaje} color="red" >
        <strong> Add +1  </strong>
      </button>
      <div>
      <strong >{contador}</strong>
      </div>
      
      </div>
      
      
      
      <strong>Hola desde React</strong>
      <p>Start with Ionic <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
    </div>
  );
};

export enum messageType {
  UserLogin = 'user:login',  
  UserLogout = 'user:logout',
  UserRegister = 'user:register',
  UserMessage = 'user:message'
}

export default ExploreContainer;


