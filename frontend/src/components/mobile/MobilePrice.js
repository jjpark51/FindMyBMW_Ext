import React from 'react'
import '../../static/price.scss'
import QNavigation from '../QNavigation'
import PriceChart from '../PriceChart'
import { Slider } from '@mui/material';
import Box from '@mui/material/Box';
import {Link} from 'react-router-dom';
import Chart from "react-apexcharts";
import '../../static/chart.scss'

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
      },
    {
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
function MobilePrice() {
    const [value1, setValue1] = React.useState([0, 250]);

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
    const handlePrice = () => {
        const updatedPrice = [(value1[0] * 1000), (value1[1] * 1000)];
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json',
            'Accept': "application/json"
        },
            body: JSON.stringify(updatedPrice)
          };
        // window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        fetch('/api/price', requestOptions)
        // fetch('http://localhost:5000/api/price', requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log(data);
    
        })
        .catch(err => console.log(err))
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    
    
    }
    const series =  [{
      data: [
          {
        x: '1 Series',
        y: [49.5, 61.9],
        fillColor: '#81C4FF', // Custom color for this data point

        
      },
      {
          x: '2 Series',
          y: [49.3, 74.7],
          fillColor: '#81C4FF', // Custom color for this data point

        },
      {
        x: '3 Series',
        y: [58.5, 87.8],
        fillColor: '#81C4FF', // Custom color for this data point

      },
      {
        x: '4 Series',
        y: [67.0, 95.7],
        fillColor: '#81C4FF', // Custom color for this data point

      },
      {
        x: '5 Series',
        y: [70.1, 124.4],
        fillColor: '#81C4FF', // Custom color for this data point

      },{
        x: '6 Series',
        y: [87.3, 114.5],
        fillColor: '#81C4FF', // Custom color for this data point

      },{
        x: '7 Series',
        y: [142.5, 193.8],
        fillColor: '#81C4FF', // Custom color for this data point

      },{
        x: '8 Series',
        y: [142.5, 148.5],
        fillColor: '#81C4FF', // Custom color for this data point

      },{
        x: 'X1',
        y: [52.1, 69.5],
        fillColor:'#16588E'
      },{
        x: 'X2',
        y: [58.7, 70.3],
        fillColor:'#16588E'

      },{
        x: 'X3',
        y: [69.5, 123.2],
        fillColor:'#16588E'

      },{
        x: 'X4',
        y: [71.8, 127.5],
        fillColor:'#16588E'

      },{
        x: 'X5',
        y: [122.1, 183.6],
        fillColor:'#16588E'

      },{
        x: 'X6',
        y: [125.8, 186.7],
        fillColor:'#16588E'

      },{
        x: 'X7',
        y: [149.7, 180.8],
        fillColor:'#16588E'

      },{
        x: 'Z4 Roadster',
        y: [73.3, 97.0],
        fillColor: '#E7222E'

      },{
        x: 'M2',
        y: [89.9, 99.9],
        fillColor: '#E7222E'
      },{
        x: 'M3',
        y: [135.3, 146.4],
        fillColor: '#E7222E'

      },{
        x: 'M4',
        y: [136.4, 150.7],
        fillColor: '#E7222E'

      },{
        x: 'M5',
        y: [171.0, 192.0],
        fillColor: '#E7222E'

      },{
        x: 'M8',
        y: [239.7, 245.6],
        fillColor: '#E7222E'

      },{
        x: 'XM',
        y: [223.3, 236.8],
        fillColor: '#E7222E'

      },{
        x: 'i4',
        y: [81.1, 91.0]
      },{
        x: 'i5',
        y: [68.8, 138.9]
      },{
        x: 'i7',
        y: [158.9, 214]
      },{
        x: 'iX',
        y: [149.9, 159.2]
      },]
  }
]



  const options = {

      plotOptions: {
        bar: {
          horizontal: true,
          borderRadius: 2,
          columnWidth: '30%',
          barHeight: '70%',
          colors: {
              ranges: [{
                  from: 0,
                  to: 270,
                  color: 'rgba(47, 116, 212, 0.29)'
              }],
          },
        },

      },
      dataLabels: {
          enabled: false,

      },
      grid: {
          xaxis: {
            
            labels: {
              show:true,
              style: {
                fontSize: '12px',
                fontFamily: 'BMWTypeNext Pro Regular, Helvetica, Arial, sans-serif',
                fontWeight: 400,
                cssClass: 'apexcharts-xaxis-label',
              },
            },
              lines: {
                  show: false
              },

          },
          yaxis: {
              lines: {
                  show: false
              },
              
          }, 

 
      }
      ,
      xaxis: {
        labels: {
          show:true,
          style: {
            fontSize: '10px',
            fontFamily: 'BMWTypeNext Pro Regular ,Helvetica, Arial, sans-serif',
            fontWeight: 400,
            cssClass: 'apexcharts-xaxis-label',
          }
        },
      },
      subtitle: {
        text: 'unit (￦1,000,000)',
        align: 'right',
        margin: 10,
        offsetX: 0,
        offsetY: 40,
        floating: false,
        style: {
          fontSize:  '12px',
          fontWeight:  'normal',
          fontFamily:  undefined,
          color:  '#9699a2'
        },
    }
    ,
    yaxis: {
      labels: {


      style: {
          fontSize: '8px',
          fontFamily: 'BMWTypeNext Pro Regular ,Helvetica, Arial, sans-serif',
          fontWeight: 400,
          cssClass: 'apexcharts-yaxis-label',
        }
    }
  }
  }


  return (
    <>
    <QNavigation />
    <div className='price-body'>
    <div className='progress-bar'></div>
        <div className='wrapper'>
            <div className='price-title'><a>Choose the price range of your car</a></div>
            <Link to={'/mobileScroll'} style={{color: '#666', textDecoration: 'none', position: 'relative', bottom: '6%'}}><button className='next-page' onClick={handlePrice}>Next</button></Link>
            <div className='price-description'>Move the slider to adjust the range</div>
            <Box sx={{ width: '90%' , position: 'relative' , bottom: '5%', left: '8%'}}> 
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
                            fontSize: 10,
                            background: 'unset',
                            padding: 0,
                            width: 32,
                            height: 32,
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
                <div className="price-app">
      <div className="row">
        <div className="mixed-chart">
        <Chart
        type="rangeBar"
        height={440}
        width={420}
        options={options}
        series={series}
      />        </div>
      </div>
    </div>
        
        
        </div>
    </div>
    </>
  )
}

export default MobilePrice