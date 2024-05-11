import React, {useEffect, useState} from 'react'
import '../static/scroll_drag.scss'
// import DensityLargeIcon from '@mui/icons-material/DensityLarge';

function Answer({answer , ResponseList, updateResponseList, counter, Qnum}) {

    

    
    const [disabled, setDisabled] = useState(false);
    const [dataToSend, setDataToSend] = useState(0);
    // console.log(disabled);


    const [active, setActive] = useState(false);

    const handleClick = () => {
      setActive(!active);
      updateResponseList( Qnum, counter - 1)
      // ResponseList.push(counter)
      // console.log(counter)
      // console.log(ResponseList)
      

    //   if (answer === 'Not Sure') {
    //   // Disable the other button when 'Not Sure' button is clicked
    //   setDisabled(!disabled);
    //   setDataToSend(dataToSend + 1);
    //   updateButton(dataToSend);
    // }

    // Update the buttonKey to trigger a re-render

    }





  {/*
  if( answer == 'Not Sure'){
    return (
      <>
          <button className='question-answer-neutral' onClick={handleClick} style={{ backgroundColor: active ? "gray" : "white" , color: active ? "white": "gray"}}>{answer}</button>
      </>
    )
  }
  else {
    return (
      <>
          <button className='question-answer' onClick={handleClick}
            style={{ backgroundColor: active ? "
            #1C69D4" : "white" , color: active ? "white": "#1C69D4"}}>{answer}</button>
      </>
    )
  }
*/}
  return (
    <>
      
      <button className='question-answer' onClick={handleClick} style={{ backgroundColor: active ? "#ADD8E6" : "rgb(210, 210, 210) " , color: active ? "#00308F": "black", border: active? "3px solid #00308F" :  "3px solid black" }}><a>{answer}</a></button>
    </>
  )
}

export default Answer