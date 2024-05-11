import React, {useEffect, useState} from 'react'
import QNavigation from '../QNavigation'
import '../../static/scroll.scss'
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { Fade } from 'react-awesome-reveal';
import { useNavigate } from 'react-router-dom';


function LinearProgressWithLabel(props) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
      </Box>
    );
  }
LinearProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
  };


function MobileLoading() {
    const [progress, setProgress] = useState(10);
    const navigate = useNavigate();

    useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
      }, 300);

      if(progress === 100){
        clearInterval(timer);
        // Navigate to the Result component
        navigate('/mobileResult');
    }
      return () => {
        clearInterval(timer);
      };
    }, [progress, navigate]);

    console.log(progress)


  return (
    <div>
        <QNavigation />
        <Fade duration={2000}>
        <div className='scroll-body' style={{zIndex: '0' ,height: '100vh' , opacity: '0.4', backgroundAttachment: 'fixed'}}>
            <h1 style={{zIndex: '3', color: 'black' , position: 'relative', left: '20%', top: '10%', width: 'fit-content', cursor: 'default', fontSize: '18pt'}}> Finding your BMW...</h1>
                <Box sx={{ width: '30%' , margin: 'auto', position: 'relative', top: '15%'}}>
            <LinearProgressWithLabel value={progress} />
            </Box>

        </div>
        </Fade>
    </div>
  )
}

export default MobileLoading