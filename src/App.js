import BoxTextUpper from "./components/BoxTextUpperCase";
import './Global.css'

function App() {
  return (
    <BoxTextUpper 
      content='texto de exemplo'
      textColor="#15803d"
      isTextTransform="uppercase"
    />
  );
}

export default App;
