import React, { useState, useEffect, useContext } from 'react';
import './ExploreContainer.css';
//import  * as sdf   from 'sharedLib';

//import { Observable } from 'rxjs';


//import * as serviceeee from 'sharedLib';
//import { CommonsLibService } from '../../../soda/projects/commons-lib/src/lib/commons-lib.service';


//Hook
//import { DependencyProvider, useDependency } from '../contexts/DependencyProvider';
import { useDeps } from '../contexts/DepsContext';



import { useDependency } from '../contexts/DependencyProvider';




import {CommonsLibService3} from 'commonlib3';



interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {  

  // const {myService} : {myService : CommonlibrxjsService2} = useDependency();
  // console.log('myService', myService)

  // //const service : CommonlibrxjsService = new myService();
  
  // myService.getMessage().subscribe((data) => {
  //   console.log("getMessage: ", data);
  // });

  const [contador, setContador] = useState(0);

  const commonInstance2 = CommonsLibService3.getInstance();
  
  
  const enviarMensaje = () => {
    commonInstance2.sendMessage("Hola desde React"); 
  }
  

  useEffect(() => { 

    // let commonInstance = CommonsLibService3.getInstance();

    // CommonsLibService3.getInstance();
    // CommonsLibService3.getInstance();
    // CommonsLibService3.getInstance();

    

    commonInstance2.getMessage().subscribe((data) => {
      console.log("mensaje recibido en react ", data);
    });
    
      

    


    return () => {
      
    };
  }, [
    //myService
  ]);


  return (
    <div className="container">
      <button onClick={enviarMensaje}>
        <strong>Contador:  </strong>
      </button>
      <strong>Hola desde React</strong>
      <p>Start with Ionic <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
    </div>
  );
};

export default ExploreContainer;
