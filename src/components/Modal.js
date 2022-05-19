import React from 'react'

const Modal = ({ isCorrect, turn, solution }) => {
  return (
    <div className="modal">
        {isCorrect && (
            <div>
                <h1>You win!</h1>
                <p className="solution">{solution}</p>
                <p>You solved it in {turn} turns.</p>
            </div>
        )}
        {!isCorrect && (
            <div>
                <h1>You lose!</h1>
                <p className="solution">{solution}</p>
                <p>Try again?</p>
            </div>
        )}
    </div>
  )
}

export default Modal