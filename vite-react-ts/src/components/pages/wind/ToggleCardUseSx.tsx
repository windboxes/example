import React from 'react'

import Box from '@/components/system/Box';
import Button from './Button';



const CardViewSx = [
  'max-w-[720px]',
  'mx-auto',
  'bg-blue-500',
  'text-white',
  'rounded',
  'p-4',
  'shadow',
];

const CardHiddenSx = [
  'hidden'
];



export default function ToggleCardUseSx() {
  const [showContent, setShowContent] = React.useState(false);

  const handleToggleCared = () => {
    setShowContent(!showContent);
  }

  return (
    <Box sx="w-full mx-auto">
      <Button
        sx={[
          'mx-auto',
          'mt-10',
          'p-3',
          'mb-5',
        ]}
        type="button"
        onClick={() => handleToggleCared()}
      >
        Toggle
      </Button>
      <Box sx={showContent ? CardViewSx : CardHiddenSx}>Hiii I'm card</Box>
    </Box >
  )
}
