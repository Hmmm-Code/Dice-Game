import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Player from './components/Player'
import image1 from './img/dice-1.png'
import image2 from './img/dice-2.png'
import image3 from './img/dice-3.png'
import image4 from './img/dice-4.png'
import image5 from './img/dice-5.png'
import image6 from './img/dice-6.png'
const img = [null,image1,image2,image3,image4,image5,image6]
let pName, score = 0
   function App() {
     const [playing,setPlaying] = useState(true)
     const [roll,setRoll] = useState('')
     const [active1,setActive1] = useState(true)
     const [active2,setActive2] = useState(false)
     const [diceimg,setDice] = useState(false)
     let [score1,setScore1] = useState(0)
     let [score2,setScore2] = useState(0)
     let [Fscore1,setFScore1] = useState(0)
     let [Fscore2,setFScore2] = useState(0)

    const handleNew = () => {
      setPlaying(true)
      setDice(false)
      setFScore1(0)
      setFScore2(0)
      setActive1(true)
      setScore1(0)
      setScore2(0)
    }

     
     const switchPlayer = () => {
      if(active1){
        score = 0
        setScore1(0)
        setScore2(0)
        setActive1(false)
        setActive2(true)
      }else if(active2){
        score = 0
        setScore1(0)
        setScore2(0)
        setActive2(false)
        setActive1(true)
      }
      if(Fscore1 >= 100 || Fscore2 >= 100){
        setDice(false)
        setPlaying(false)
       }
     }

    const handleRoll = () => {
      if(Fscore1 >= 100 || Fscore2 >= 100){
        setDice(false)
        setPlaying(false)
       }
      if(playing){
      setDice(true)
      const dice = Math.trunc(Math.random() * 6) + 1;
      const randomRoll = img[dice]
      setRoll(randomRoll)
      if (dice !== 1 ){
        if(active1){
          score += dice
          setScore1(score) 
        }
      }else {switchPlayer()}

      if (dice !== 1 ){
        if(active2){
          score += dice
          setScore2(score) 
        }
      }else {switchPlayer()}
    }}
    const handleHold = () => {
     if(active1){
      setFScore1(score + Fscore1)
     }else if(active2){
      setFScore2(score + Fscore2)
     }
     switchPlayer()
     if(Fscore1 >= 100 || Fscore2 >= 100){
      setDice(false)
      setPlaying(false)
     }

    }
   return (  
    <div>
    <main>
    <Player active={active1 ? 'player--active': ''} score={Fscore1} curScore={score1} name={pName='Player 1'}/>
    <Player active={active2 ? 'player--active': ''} score={Fscore2} curScore={score2} name={pName='Player 2'}/>
 <img src={roll} alt="Playing dice" className={diceimg? 'dice':'hidden'} id='dice'/>
 <button className="btn btn--new" onClick={handleNew} >🔄 New game</button>
 <button className="btn btn--roll" onClick={handleRoll}>🎲 Roll dice</button>
 <button className="btn btn--hold" onClick={handleHold}>📥 Hold</button>
     </main>
   </div>
   );
  }

export default App;

ReactDOM.render(
  <App/>,
  
  document.querySelector('#root'),
)
