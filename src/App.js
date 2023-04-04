import { useEffect, useState } from 'react';
import './App.css';
import Item from './components/Item/item';
import MyFetch from './components/api/index';
import Counter from './components/CounterWithCustomHook/index.js';

function App() {
const [ selected, setSelected] = useState (true);
const [ pasaronTresSegundos, setPasaronTresSegundos] = useState (false);

useEffect (()=>{
  console.log('despues de 3 segundos');

}, [pasaronTresSegundos] )



useEffect (()=>{
  if (selected) {
  console.log("esta seleccionado");
  
  setTimeout(() => {
    
    setPasaronTresSegundos (true);
  }, 3000);

} else {
    console.log("no esta seleccionado");
    setPasaronTresSegundos (false);
} 
},[selected]);


/// EXCEPCIONES DE DEPENDENCIAS EN useEffect
/*
useEffect (
  () =>{
 console.log("START");
},[]);


useEffect (()=>{
 console.log("selected", selected);
} , [selected]);
*/
  return (
    <div className="App">
      <Item
      isSelected= {selected} 
      onSelectedChange = {setSelected}>
        <>
     
      <p className='parrafo'>'T-shirt'</p>

      <p>description</p>
      
      <div>
        <button>add</button>
        </div>
        </>
      </Item>
<>
     <MyFetch/>
</>
   <Counter/>
    </div>
  )
} 


export default App;
