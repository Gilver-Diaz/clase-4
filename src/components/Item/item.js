import './item.css';

const Item =({ isSelected,  children ,onSelectedChange}) =>{
    const clsIsselected = isSelected ? 'item_selected' : '';
    return <div className= {`item ${clsIsselected}`}
   
    onClick = {() => onSelectedChange(! isSelected)}
    >
        {children}
        </div>
        
           
          
    
}



export default Item;