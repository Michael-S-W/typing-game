import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min'
import { useEffect, useState } from 'react';

function App() {
  const [gameStarted ,setGameStarted] = useState(false)
  const [currentSentence , setCurrentSentence] = useState("")
  const [inputText, setInputText] = useState("")
  const [gameOver, setGameOver] = useState(false)
  const [score ,setScore] = useState(0)
  const [time, setTime] = useState(60)

  const typingSentences = [  
    "The border between the two countries is heavily monitored.",  
    "She painted a thin border around the picture frame.",  
    "Students should not cross the border without proper identification.",  
    "The artist added a vibrant border to the canvas.",  
    "Let's discuss the issues related to the border security.",  
    "The flowers bloomed beautifully along the garden border.",  
    "He drew a double border around the document for emphasis.",  
    "The border wall has been a topic of heated debates.",  
    "Please stay within the designated border of the parking lot.",  
    "They marked the border of their property with a fence.",  
    "The border dispute led to tensions between the nations.",  
    "The photo was enhanced with a stylish border.",  
    "We need to review the guidelines for border crossings.",  
    "She knit a border of lace for the tablecloth.",  
    "The river formed a natural border between the two states.",  
    "He added a golden border to the invitation card.",  
    "The document must not exceed the border limits set by the guidelines.",  
    "Borders can represent both division and connection.",  
    "The park's border was lined with tall trees.",  
    "The border checkpoint was busy with travelers.",  
    "A strong border policy is essential for national security.",  
    "The team designed a new logo with a bold border.",  
    "The players gathered near the boundary border.",  
    "He carefully measured the border before cutting the paper.",  
    "An imposing wall marked the border of the ancient city.",  
    "The colorful border adds a nice touch to the presentation.",  
    "Every map clearly shows the borders of the countries.",  
    "The garden’s border was filled with vibrant flowers.",  
    "We crossed the border at dawn and explored a new land.",  
    "She was impressed by the intricate border designs on the fabric.",  
    "The lecture highlighted the importance of border agreements.",  
    "He felt a sense of nostalgia when looking at the border map.",  
    "The editorial discussed the economic impact of border regulations.",  
    "A border patrol vehicle was stationed near the crossing.",  
    "The video game had a feature that allowed players to claim new borders.",  
    "He proposed a new border initiative for environmental protection.",  
    "The children were playing just over the border of their yard.",  
    "Her artwork features an elaborate border of mythical creatures.",  
    "We couldn't see beyond the border fence.",  
    "He stepped back to admire the newly painted border.",  
    "The festival attracted visitors from both sides of the border.",  
    "She placed a delicate lace border around the photograph.",  
    "The coast guard patrols the maritime borders regularly.",  
    "The map's border was decorated with illustrations of landmarks.",  
    "Rules vary for crossing the border based on your nationality.",  
    "The architect designed the building to incorporate natural borders.",  
    "The competition highlighted regional diversity along the borders.",  
    "A strict border policy can sometimes hinder trade.",  
    "He was born just a few miles from the border.",  
    "The museum exhibit featured artifacts found near the ancient border.",  
    "An impressive stone wall served as the border for the estate.",  
    "Traveling along the border offers stunning scenic views.",  
    "The garden's design included both a flower border and a vegetable patch.",  
    "They showcased their art with a vivid border that attracted attention.",  
    "The geopolitical landscape often shifts along border lines.",  
    "Her thesis discussed the historical significance of border conflicts.",  
    "A peaceful resolution was sought for the ongoing border issue.",  
    "He celebrated his birthday at a restaurant near the border.",  
    "The national park protects wildlife near the border.",  
    "The skyline was framed beautifully by the border of trees.",  
    "She strained to see the mountains just beyond the border.",  
    "A friendly rivalry existed along the border towns.",  
    "The border crossing was closed due to inclement weather.",  
    "He sketched a landscape that captured the essence of the border area.",  
    "She used a ruler to ensure the border was perfectly straight.",  
    "The old barn was located just inside the property border.",  
    "There are many regulations regarding border trade.",  
    "They took photos along the scenic coastal border.",  
    "The artist's piece was defined by its unique border.",  
    "New policies were introduced to streamline border control.",  
    "The survivors built a camp just inside the border region.",  
    "We witnessed the sunset near the ocean border.",  
    "The debate over immigration often involves border policies.",  
    "He was relieved to find a welcoming community just across the border.",  
    "The conference brought together leaders from both sides of the border.",  
    "They created a virtual border in the online game.",  
    "The map highlighted important border landmarks.",  
    "She decorated the invitation with a floral border.",  
    "The film explores the lives of those affected by border issues.",  
    "Their historical record focused on events along the border.",  
    "He felt a cultural difference when visiting the border town.",  
    "The pilot navigated carefully along the international border.",  
    "They planted a hedge to create a natural border.",  
    "Her report documented the challenges faced at the border.",  
    "The library is located just on the border of the two districts.",  
    "We hiked the trail that runs parallel to the border.",  
    "The sculpture was designed to symbolize unity beyond borders.",  
    "A seasonal market thrived near the bustling border.",  
    "The border area was known for its diverse wildlife.",  
    "She framed the picture with an ornate border.",  
    "The treaty changed the political landscape along the border.",  
    "Their journey took them to villages near the border.",  
    "He avenged his family's honor that was lost by the border dispute.",  
    "A warm welcome awaited visitors crossing the cultural border.",  
    "She loved the intricate embroidery along the border of the fabric.",  
    "The book examines the impact of globalization on border policies.",  
    "He took a shortcut through the field by the border.",  
    "The national anthem echoed across the border during the celebration."  
  ];


  function handleStartGame(){
    setGameStarted(p=>true)
    setInputText("")
    setGameOver(false)
    setScore(0)
    setTime(60)
    generateSentence()
  }

  function generateSentence(){
    let sentence =  typingSentences[Math.floor(Math.random()*typingSentences.length)];
    setCurrentSentence(sentence)
  }
  
  function handleText(e){
    setInputText(e.target.value)
  }
  
  if(inputText === currentSentence&&time<60){
    generateSentence()
    setScore(p=>p+1)
    console.log("+1")
    setInputText("")
  }
  useEffect(()=>{
    if(gameStarted && time > 0&& !gameOver){
    const timer = setInterval(() => {
      setTime(p=>p-1)
    }, 1000);

    return ()=>clearInterval(timer)
  } else if (gameStarted && time === 0 ){
    setGameOver(true)
  }
  },[gameOver, gameStarted, time])
    
  return (
    <div className="App container text-center">
      <h1 className='fs-1 fw-bolder' >Typing Game</h1>
      {!gameStarted&&
      <button className='btn btn-outline-primary fs-2' onClick={handleStartGame}>Start Game</button>
      }
      {
        gameStarted&&
        <div className='container'>
          <div className='timer fs-2 fw-bold text-danger'>Time Left: {time}</div>
          <div className='rounded sentence fs-2 text-light my-4 bg-dark p-2 m-1 '>{currentSentence}</div>
          {!gameOver&&
          <input  type='text' value={inputText} onChange={handleText} className='text-start border fs-2 border-3 border-primary container-fluid form-control my-3' placeholder='type the text' >
          </input>
          }
          {
            gameOver&&
            <>
            <div className='timer fs-2 fw-bold text-danger'>TIME IS OVER</div>
            <div className='timer fs-2 fw-bold text-danger'>You Score: {score}</div>
            <button className='btn btn-outline-primary fs-2' onClick={handleStartGame}>Re-Start Game</button>
            </>
          }
        </div>
      }
    </div>
  );
}

export default App;
