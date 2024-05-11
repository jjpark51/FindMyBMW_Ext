import React from "react";
import Chart from "react-apexcharts";
import '../static/chart.scss'


const PriceChart = ({height, width}) => {

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
                    to: 270000,
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
              fontSize: '18px',
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
            fontSize:  '16px',
            fontWeight:  'bold',
            fontFamily:  undefined,
            color:  '#9699a2'
          },
      }
      ,
      yaxis: {
        labels: {

  
        style: {
            fontSize: '16px',
            fontFamily: 'BMWTypeNext Pro Regular ,Helvetica, Arial, sans-serif',
            fontWeight: 400,
            cssClass: 'apexcharts-yaxis-label',
          }
      }
    }
    }

    
  return (

    
    <div className="price-app">
      <div className="row">
        <div className="mixed-chart">
        <Chart
        type="rangeBar"
        height={height}
        width={width}
        options={options}
        series={series}
      />        </div>
      </div>
    </div>
  );
};

export default PriceChart;
