import React, {useState} from 'react'
import '../static/carquestion.scss'
import Answer from './Answer'



function CarQuestion({name, answer}) {


// Depending on the number of responses, the number of boxes differs
  const AnswerList = [];
  for(let i = 0; i < answer.length; i++){
    AnswerList.push(answer[i]);
  }


  return (
    <div className='question-frag'>
        <div className='question-title'>{name}</div>
        <div className='answer-flex'>
          {AnswerList.map((e, key) => {
            return ( <Answer 
              key={key}
              answer={e}/>)
          })
        }
        </div>
    </div>

  )
}

export default CarQuestion