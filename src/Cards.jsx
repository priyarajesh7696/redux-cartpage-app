import React,{useState} from "react";
import { Button,CardImg } from "react-bootstrap";

function Cards({e}) {  
  
  let [count,setCount]=useState(1)
  
  let [total,setTotal]=useState(e.price)
 
const countDecrease=()=>
{

       setCount(count-1)
       setTotal(e.price*count)
      
     
}
  const countIncrease=()=>{
    
    setCount(count+1);
    setTotal(e.price*count)
 
 
   
 
  }
  if(e.id==1)
  {
  return <> 
    <div className="d-flex flex-wrap p-2 mx-2 justify-content-around align-items-center  w-100">
    <div className="flex-shrink-0">
    <CardImg
        src={e.images[0]}
        style={{ width: "450px" }}
        alt="Generic placeholder image"
      />
    </div>
  
    <div className="flex-grow-3 ms-3">
      <h3 className="text-primary">{e.title}</h3>
      <h5 >Brand: {e.brand}</h5>
      <h5 >Description {e.description}</h5>
      <h5 >Stock {e.stock}</h5>
      <h5 >Stock {e.category}</h5>
    </div>
    <div className="d-flex justify-content-between align-content-end p-2 mb-3">
    <div className="def-number-input number-input safari_only mx-4">
          <p className="mx-3 fw-bold">Qty</p>
          <Button className="minus" onClick={()=>{
          count>1? countDecrease():"";     
          }}></Button>
          <input
            className="quantity fw-bold text-black border-2"
            min={1}
          value={count}
            type="number"
          />
          <Button className="plus"onClick={()=>
          {
          
          count<=e.stock? countIncrease():"";
          }}></Button>
       </div>
      
    </div>
  </div>
  <div className=" total d-flex justify-content-between align-content-end g-5 p-2 mb-5 mt-2">
       
  
       <div>
       <h5 className="fw-bold mb-2">Subtotal</h5>
       <h5 className="fw-bold mb-2">Shipping Charges</h5>
       <h5 className="fw-bold mb-2">Total</h5>
        </div>
       <div>
       <h5 className="fw-bold mb-2">${total}</h5>
       <h5 className="fw-bold mb-2">free</h5>
       <h5 className="fw-bold mb-2">${total}</h5>
       </div>
  
       
  </div>
</>
  }
}


export default Cards