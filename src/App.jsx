import React from 'react'
import ReactDOM from 'react-dom'
import Player from './Playes'
import image from './img/dice-1.png'
import image2 from './img/dice-2.png'
import image3 from './img/dice-3.png'
import image4 from './img/dice-4.png'
import image5 from './img/dice-5.png'
import image6 from './img/dice-6.png'

const dice = Math.trunc(Math.random() * 6) + 1
const diceRoll = document.querySelector('#dice')
diceRoll.src = `./img/dice-${dice}.png`




class App extends React.Component{

  render(){
    return(
      <div>
       <main>
      <Player  />
 

    <img src={image2} alt="Playing dice" className="dice" id='dice'/>
    <button className="btn btn--new">🔄 New game</button>
    <button className="btn btn--roll">🎲 Roll dice</button>
    <button className="btn btn--hold">📥 Hold</button>
        </main>
      </div>
    )
  }

}


ReactDOM.render(
    <App/>,
    
    document.querySelector('#root')
)
