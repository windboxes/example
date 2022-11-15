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
const Wrapper = styled('main', 'min-h-screen flex flex-col justify-center items-center');
const Container = styled.div('mx-auto text-center');

const Title = styled.h1('tracking-wide font-[Inter] font-black');
const Description = styled.p('text-xl');
const Code = styled.code('bg-[#fafafa] rounded-md px-3 py-1 text-xl font-[Menlo]');
const BaseLink = styled.a('m-3 hover:underline');
const Card = styled('div', 'p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4');




export default function Index() {
  const [count, setCount] = React.useState<number>(0);

  return (
    <Wrapper>
      <Container>
        <Title sx="text-6xl">
          Welcome to
          <BaseLink sx="text-white drop-shadow-[0_10px_18px_rgba(39,68,102,1)]" href="https://remix.run/docs/en/v1" target="_blank" rel="noreferrer noopener">Remix!</BaseLink>
        </Title>

        <Description sx="mt-10 mb-5">
          This is WindBoxes for Remix Example, contain
          <BaseLink sx="text-[#0070f3]" href="https://github.com/windboxes/core" target="_blank" rel="noreferrer noopener">WindBoxes</BaseLink>
          and
          <BaseLink sx="text-[#0070f3]" href="https://tailwindcss.com/" target="_blank" rel="noreferrer noopener">Tailwind</BaseLink>
        </Description>

        <Description sx="mt-5 mb-10">
          Get started by editing{' '}
          <Code>app/routes/index.tsx</Code>
        </Description>

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

          <Card sx="mt-10 bg-[#34eb9b] pd-5">Custom Background Color Card</Card>
        </Box>
      </Container>
    </Wrapper>
  );
}
