import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import QNavigation from './QNavigation';
import '../static/price.scss'
import PriceChart from './PriceChart';
import { Slider } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Fade } from "react-awesome-reveal";

const units = ['₩'];

const marks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 50,
      label: '50',
    },
    {
      value: 100,
      label: '100'
    },
    {
      value: 150,
      label: '150'
    },{
      value: 200,
      label: '200'
    },
    {
      value: 250,
      label: '250',
    },
  ];
function valuetext(value) {
    return `${value}₩`;
  }
  
  const minDistance = 40;

function Price() {
    const [value1, setValue1] = useState([0, 250]);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };
  // console.log(value1)
  const handlePrice = () => {
    const updatedPriceValue = [(value1[0] * 1000), (value1[1] * 1000)];
    
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(updatedPriceValue)
    };
    fetch('http://localhost:5000/api/price', requestOptions)
    // fetch('/api/price', requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(err => console.log(err));
    
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  };


const blackBoxStyleLeft = {
  width: `${((value1[0] - 0) / (250 - 0)) * 1190}px`,
};
const blackBoxStyleRight = {
  width: `${((250 - value1[1]) / (250 - 0)) * 1190}px`,
};

 
    return (
        <>
        <QNavigation />
        <div className='price-body'>
            <div className='line-divide'></div>
            <div className='progress-bar'></div>
            <div className='bmw-logo'></div>

            <div className='wrapper'>
            <Fade duration={3000}>


                <div className='price-title'><a>Choose the price range of your car</a></div>
                <Link to={'/question1'} style={{color: '#666', textDecoration: 'none'}}><button className='next-page' onClick={handlePrice}>Next</button></Link>
                <div className='price-description'>Move the slider to adjust the range</div>
                {/* <div className='min-value'>{value1[0]}</div> */}
                <Box sx={{ width: 1180 , position: 'relative' , bottom: '70px', left: '135px'}}> 
                    <Slider
                        getAriaLabel={() => 'Minimum distance'}
                        value={value1}
                        onChange={handleChange1}
                        valueLabelDisplay="on"
                        getAriaValueText={valuetext}
                        disableSwap
                        marks={marks}
                        min={0}
                        max={250}
                        step={5}
                        sx={{
                          '& .MuiSlider-valueLabel': {
                            lineHeight: 1.2,
                            fontSize: 12,
                            background: 'unset',
                            padding: 0,
                            width: 52,
                            height: 52,
                            borderRadius: '50% 50% 50% 0',
                            backgroundColor: '#3880ff',
                            transformOrigin: 'bottom left',
                            transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
                            '&:before': { display: 'none' },
                            '&.MuiSlider-valueLabelOpen': {
                              transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
                            },
                            '& > *': {
                              transform: 'rotate(45deg)',
                            },
                          }
                        }}
                    />
                </Box>
                              </Fade>

                {/* <Link to={'/question1'} style={{color: '#666', textDecoration: 'none'}}><button className='next-page'>Next</button></Link> */}
               <PriceChart height={550} width={1300}/>
               {/* <div className='bmw-logo'></div> */}
               <div className='q-button'></div>
               <div className='black-box-left' style={blackBoxStyleLeft}></div>
               <div className='black-box-right' style={blackBoxStyleRight}></div>

            </div>
        </div>
    </>

       
    )
}

export default Price