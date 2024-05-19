import './App.css'
import Card from "./components/card/card.tsx";

const App= () =>{
  return (
      <>
        <div className="playingCards faceImages">
          <Card rank={"K"} suit={"diams"}/>
          <Card rank={"K"} suit={"hearts"}/>
          <Card rank={"K"} suit={"clubs"}/>
          <Card rank={"K"} suit={"spades"}/>
        </div>
      </>
  )
}

export default App
