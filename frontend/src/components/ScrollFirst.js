import React, {useState, useEffect} from 'react'
import QNavigation from './QNavigation'
import '../static/scroll.scss'
import ScrollCard from './ScrollCard'
import { QList } from '../assets/question'
import { Link } from 'react-router-dom'
import DragCard from './DragCard'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Fade } from 'react-awesome-reveal'

function ScrollFirst() {
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }
    const scrollDown = () => {
        window.scrollTo({top: 750, left: 0, behavior: 'smooth'});
    }
    const initIndicator = QList[0].indicator;
    const initNum = QList[0].num;
    const initName = QList[0].name;
    const initOption = QList[0].option;
    const initAnswer = QList[0].answer;

    // const lastIndicator = QList[6].indicator;
    // const lastNum = QList[6].num;
    // const lastName = QList[6].name;
    // const lastOption = QList[6].option;
    // const lastAnswer = QList[6].answer;

    const ResponseList = [[0,0,0,0,0],[0,0,0,0,0], [0,0,0,0],[0,0,0,0,0],[0,0,0,0],[0,0,0,0,0,0,0]]
    const [recommendData, setRecommendData] = useState([])
    const updateResponseList = (qNum, data, index) => {
        // console.log(data)
        if(index != null){
            // console.log(index)
            
            if(index == 0){
                if(ResponseList[qNum - 1][data - 1] == 0){
                    ResponseList[qNum - 1][data - 1] = 5;
                }
                else{
                    ResponseList[qNum - 1][data - 1] = 0
                }
            }

            if(index == 1){
                if(ResponseList[qNum - 1][data - 1] == 0){
                    ResponseList[qNum - 1][data - 1] = 4;
                }
                else {
                    ResponseList[qNum - 1][data - 1] = 0
                }
            }
            if(index == 2){
                if(ResponseList[qNum - 1][data - 1] == 0){
                    ResponseList[qNum - 1][data -1] = 3
                }
                else {
                    ResponseList[qNum - 1][data - 1] = 0;
                }
            }
        }        

        else {
            // console.log("No index here")
            if(ResponseList[qNum -1][data - 1] == 1){
                ResponseList[qNum - 1][data - 1] = 0;
            }
            else{
                ResponseList[qNum - 1][data - 1] = 1;
            }
        }

        // console.log(ResponseList)
    }


      
    const handleResult = () => {

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json',
            'Accept': "application/json"
        },
            body: JSON.stringify(ResponseList)
          };
        // console.log(ResponseList)
        // window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        fetch('http://localhost:5000/api/test', requestOptions)
        // fetch('/api/test', requestOptions)
        .then(response => response.json())
        .then(data => {
            // console.log(ResponseList)
            setRecommendData(data)
            // console.log(data);
            // window.location.reload();

        })
        .catch(err => console.log(err))
        setLoading(true);
        setTimeout(() => {
            // Set loading back to false when loading is complete
            setLoading(false);
          }, 2000); // Adjust the duration as needed
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});


    }

    window.onscroll = function() {
        var scrollIndicator = document.querySelector('.scroll-indicator');
        if (scrollIndicator) {
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollIndicator.style.opacity = '0';
          } else {
            scrollIndicator.style.opacity = '1';
          }
        }
      };

    const res = QList.slice(1,7).map(e => e);
  return (
    <>
        <QNavigation />
        <div className='scroll-body'>
        <Fade duration={2000}>

             <div className='question-progress'>
                <div className='progress-bar-1'></div>
            </div> 
            <DndProvider backend={HTML5Backend}>
                             <DragCard 
                        indicator={initIndicator}
                        num={initNum}
                        name={initName}
                        answer={initAnswer}
                        option={initOption}
                        updateResponseList={updateResponseList}
                        Qnum={1}
                        />
            </DndProvider>
            </Fade>

            {/* <ScrollCard 
                        indicator={initIndicator}
                        num={initNum}
                        name={initName}
                        answer={initAnswer}
                        option={initOption}
                        updateResponseList={updateResponseList}
                        Qnum={1}
                        /> */}
        <Fade duration={2000}>

            <div className='scroll-indicator' onClick={scrollDown}>
                <div className='elementor-button-text'></div>
                <a>Scroll</a>
            </div>
        </Fade>

            {
                res.map((e, key) => {
                    return (
                        <>
                        <ScrollCard 
                        key={key}
                        indicator={e.indicator}
                        num={e.num}
                        name={e.name}
                        answer={e.answer}
                        option={e.option}
                        updateResponseList={updateResponseList}
                        Qnum={e.Qnum}
                        />
                    </>
                    )
                })
            }

            <div className='page-buttons-wrapper'>
                <Link to={'/price'}><button onClick={handleClick} className='prev-button'>Previous</button></Link>
                <Link to={'/loading'}><button onClick={handleResult} className='next-button'>Finish</button></Link>

            </div>

        </div>
        {/* Display loading page conditionally */}

    </>
  )
}

export default ScrollFirst