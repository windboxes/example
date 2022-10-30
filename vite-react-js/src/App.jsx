import React from 'react'
import logo from '@/assets/react.svg'

import styled from '@windboxes/core';



// const Box = styled('div');
const Box = styled.div();
const Button = styled('button', [
  'p-3',
  'flex',
  'flex-row',
  'justify-center',
  'items-center',
  'bg-indigo-400',
  'text-white',
  'rounded-xl',
  'shadow-lg',
  'focus:outline-none',
  'active:bg-indigo-800',
  'disabled:opacity-80',
  // 'bg-[#50d71e]'
]);

const Typography = styled('div');
const Image = styled('img');

const Card = styled('div', 'p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4');



export default function HomePage() {
  const [count, setCount] = React.useState(0);

  return (
    <Box sx={['container', 'mx-auto']}>
      <Typography
        sx={`
          mt-10
          text-[2.375rem]
          text-center
          font-bold
          text-slate-900
          dark:text-slate-200
        `}
      >
        WindBoxes Example Page
      </Typography>

      <Box sx="mx-auto text-center">
        <Image sx="w-[128px] mx-auto mt-10" src={logo} alt="logo" />
        <Typography sx="mt-5">The @windboxes/core Test!</Typography>
      </Box>

      <Card sx='mt-10 bg-[#34eb9b] pd-5'>
        Test Background Color Card
      </Card>

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

      <Box sx="mt-10 text-center">
        <Box as="p">
          Edit <code>./src/App.jsx</code> and save to test HMR updates.
        </Box>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {' | '}
        <a
          className="App-link"
          href="https://vitejs.dev/guide/features.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vite Docs
        </a>
      </Box>

      <Box sx="mt-10 py-8 px-8 max-w-sm mx-auto bg-white shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <Image sx="block h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://tailwindcss.com/img/erin-lindford.jpg" alt="Woman's Face" />
        <Box sx="text-center space-y-2 sm:text-left">
          <Box sx="space-y-0.5">
            <Box sx="text-lg text-black font-semibold">
              Erin Lindford
            </Box>
            <Box sx="text-slate-500 font-medium">
              Product Engineer
            </Box>
          </Box>
          <Box sx="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</Box>
        </Box>
      </Box>

    </Box>
  )
}