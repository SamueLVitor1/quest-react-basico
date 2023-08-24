import './BoxTextUpper.css'
import Button from './Button'

function BoxTextUpper({ content, textColor, isTextTransform }) {
  return (
    <section className='wrapper'>
      <div className='boxTextUpperCase'>
        <p style={{
          color: textColor,
          textTransform: isTextTransform
        }}>
          {content}
        </p>

        <Button
          label='clique aqui' 
        />
      </div>
    </section>
  )
}

export default BoxTextUpper

