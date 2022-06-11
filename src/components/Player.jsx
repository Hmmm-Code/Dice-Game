import React from 'react'


 const Player = ({name,curScore,active,score}) => {
  return (
    
    <section className={`player player--0 ${active}`} >
      <h2 className="name" id="name--0">{name}</h2>
      <p className="score" id="score--0">{score}</p>
      <div className="current">
        <p className="current-label">Current</p>
        <p className="current-score" id='current--0'>{curScore}</p>
      </div>
    </section>
 
  )
 }

export default Player

