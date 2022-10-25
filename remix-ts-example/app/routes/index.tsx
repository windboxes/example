import React from 'react';
import styled from '@windboxes/core';



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

const Card = styled('div', 'p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4');

const Link = styled.a('text-xl hover:text-purple-600');




export default function Index() {
  const [count, setCount] = React.useState<number>(0);

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
        Welcome to Remix
      </Typography>

      <Box sx="mx-auto text-center">
        <Typography sx="mt-10 text-3xl">The @windboxes/core Test!</Typography>
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
        <Link
          className="App-link"
          href="https://remix.run/tutorials/blog"
          target="_blank"
          rel="noopener noreferrer"
        >
          15m Quickstart Blog Tutorial
        </Link>
        {' | '}
        <Link
          className="App-link"
          href="https://remix.run/tutorials/jokes"
          target="_blank"
          rel="noopener noreferrer"
        >
          Deep Dive Jokes App Tutorial
        </Link>
        {' | '}
        <Link target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
        </Link>
      </Box>

    </Box>
  );
}
