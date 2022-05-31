import React from 'react'
import ReactDOM from 'react-dom'
import Player from './Playes'
import image1 from './img/dice-1.png'

const dice = Math.trunc(Math.random() * 6) + 1




class App extends React.Component{
  state = { img: null}
  componentDidMount(){
   
  }
  render(){
    return(
      <div>
       <main>
      <Player  />
 

    <img src={image1} alt="Playing dice" className="dice" />
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
