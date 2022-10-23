import React from 'react';
import Box from '@/components/system/Box';
import Spinner from '@/components/system/Spinner';



const LoadingScreen = () => {
  return (
    <Box sx="min-h-[80vh] flex items-center justify-center">
      <Spinner />
    </Box>
  );
}



export default LoadingScreen;