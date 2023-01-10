import React from 'react';

import styled from '@windboxes/react';

import Button from '@/components/system/Button';
import ToggleCard from '@/components/pages/wind/ToggleCard';
import ToggleCardUseSx from '@/components/pages/wind/ToggleCardUseSx';




const Box = styled('div');

const Typography = styled('div', [
  'mt-10',
  'text-[2.375rem]',
  'text-center',
]);



export default function WingPage() {
  const [count, setCount] = React.useState<number>(0);

  return (
    <Box sx={['container', 'mx-auto']}>
      <Typography>@windboxes/react Test</Typography>

      <Box sx="mt-5">
        <Button
          sx={[
            'p-3',
            'mx-auto'
          ]}
          type="button"
          onClick={() => setCount((count) => count + 1)}
        >
          count is: {count}
        </Button>
      </Box>

      <Typography sx="text-2xl">js change</Typography>
      {
        Array(10).fill(0).map((item, index) => (
          <ToggleCard key={index} />
        ))
      }

      {/* <Typography sx="text-2xl">sx change</Typography>
      {
        Array(10).fill(0).map((item, index) => (
          <ToggleCardUseSx key={index} />
        ))
      } */}
    </Box>
  )
}
