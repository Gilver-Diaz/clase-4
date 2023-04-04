
import useCount from "./useCount.js";


const Counter= ()=>{
 
    const{
     counter,
     increment,
     decrement,
     reset
 } = useCount();
 
 return(
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};

export default Counter;