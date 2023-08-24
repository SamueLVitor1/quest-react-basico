import './Button.css'



function Button ({label}){
  const eventClickButton = () =>{
    alert(`a label desse botão é ${label}`)
  }

  return(
    <button onClick={eventClickButton} className='button'>{label}</button>
  )
}

export default Button
