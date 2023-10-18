import './Input.css'

const Input = ({id,labelName,type,value,inputHandler})=>{
  return (
    <div className="input_container">
     <label htmlFor={id}>{labelName}</label>
     <input type={type} id={id} value = {value} onChange={(e)=>inputHandler(e.target.value)}/>
    </div>
  )
}

export default Input ;