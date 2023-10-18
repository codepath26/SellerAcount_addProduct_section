import './TotalPrice.css';

const TotalPrice = ({totalValue})=>{
  console.log("total value" , totalValue)
   return (
    <p>Total Price of Product is: {totalValue}</p>
   )
}
export default TotalPrice;