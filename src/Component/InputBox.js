import './InputBox.css'
import { useState } from "react"
import Input from './UI/InputBox/Input';

const InputBox = ({addProduct,totalHandler ,total})=>{
  const [productId , setproductId] = useState('');
  const [productPrice , setproductPrice] = useState("");
  const [ productName , setProductName] = useState('');
  console.log("#",typeof total)
  let totalPrice = total;
    const formSubmitHandler = (e)=>{
      e.preventDefault();
      totalPrice += Number(productPrice);
       totalHandler(totalPrice)
      const obj = {
      productId : productId,
      productPrice : productPrice,
      productName : productName,
    }
    addProduct(obj);
    }
   return (
    <form onSubmit={formSubmitHandler}>
      <Input id={"productId"} labelName={"ProductId"} type={"text"} value={productId} inputHandler={setproductId} />
      <Input id={"productPrice"} labelName={"ProductPrice"} type={"number"} value={productPrice} inputHandler={setproductPrice} />
      <Input id={"productName"} labelName={"ProductName"} type={"text"} value={productName} inputHandler={setProductName} />
     <button type='submit'>Add Data</button>
    </form>
    
   );
  
}

export default InputBox;