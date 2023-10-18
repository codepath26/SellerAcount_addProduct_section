import './DisplayBox.css';

const DisplayBox = ({displaydata,onDeleteHandler,total,totalHandler})=>{
  console.log("typepf  diplaydata",typeof displaydata)
  let totalPrice = total;
  const deleteProductHandler = (index)=>{
   onDeleteHandler(index);
   totalPrice -= Number(displaydata[index].productPrice);
   totalHandler(totalPrice)
  }

return(
  <div className="displaybox">
    <ul className="product_details">
      {
        displaydata.map((product,index)=>{
          return(
            <li key={product.productId}>
              ProductID : {product.productId} ProductName: {product.productName} ProductPrice : {product.productPrice}
            <button onClick={()=>{deleteProductHandler(index)}}>Delete Item</button>
            </li>
          )
        })
      }
    
    </ul>
  </div>
)

}
export default DisplayBox;