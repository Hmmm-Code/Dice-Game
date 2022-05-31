import React from 'react'


 const Player = () => {
  return (
    <div > <main>
    <section className="player player--0 player--active">
      <h2 className="name" id="name--0">Player 1</h2>
      <p className="score" id="score--0">43</p>
      <div className="current">
        <p className="current-label">Current</p>
        <p className="current-score" id="current--0">0</p>
      </div>
    </section>
    <section className="player player--1">
      <h2 className="name" id="name--1">Player 2</h2>
      <p className="score" id="score--1">24</p>
      <div className="current">
        <p className="current-label">Current</p>
        <p className="current-score" id="current--1">0</p>
      </div>
    </section>

  </main></div>
  )
}
export default Player