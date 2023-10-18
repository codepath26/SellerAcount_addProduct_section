
import { useState } from 'react';
import './App.css';
import DisplayBox from './Component/DisplayBox';
import InputBox from './Component/InputBox';
import TotalPrice from './Component/TotalPrice';


function App() {
const [productArray  , setProductArray] = useState([]);
const [totalValue  , setTotalValue] = useState(0);
  const addProduct = (productObj)=>{
    // console.log("productobj" , productObj)
    setProductArray((prevproductArray)=>{
      return [...prevproductArray,productObj]
    });
  }
  const onDeleteHandler = (productIndex)=>{
  //  const newArray = productArray.splice(productIndex,1);  
    //  const newArray = productArray.slice(0,productIndex) + productArray.slice(productIndex + 1);
    //  setProductArray(newArray);
    const newArray = [...productArray]
    newArray.splice(productIndex ,1);
    setProductArray(newArray);

  }
  const calculateTotalValue = (total)=>{
    
    setTotalValue(total);
  }
  return(
    <>
    <InputBox addProduct = {addProduct} totalHandler = {calculateTotalValue} total = {totalValue} />;
    <DisplayBox displaydata={productArray} onDeleteHandler = {onDeleteHandler} total = {totalValue} totalHandler={calculateTotalValue}/>
    <TotalPrice totalValue = {totalValue}/>

    </>
    )
}

export default App;
