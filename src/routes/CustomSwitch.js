import React, { useEffect, useState } from 'react';
import { Switch, useLocation } from 'react-router-dom';
import TopBarProgress from 'react-topbar-progress-indicator';

const CustomSwitch = ({ children }) => {
   const [progress, setProgress] = useState(false);
   const [prevLoc, setPrevLoc] = useState('');
   const location = useLocation();

   useEffect(() => {
      setPrevLoc(location.pathname)
      setProgress(true)
   }, [location]);

   useEffect(() => {
      setProgress(false)
   }, [prevLoc]);

   TopBarProgress.config({
    barColors: {
        '0': '#ff1100',
        '0.5': '#cc0000',
        '1.0': '#7a0000',
    },
    shadowBlur: 5
  });

   return (
      <>
         {progress && <TopBarProgress />}
         <Switch>{children}</Switch>
      </>
   );
}

export default CustomSwitch;
