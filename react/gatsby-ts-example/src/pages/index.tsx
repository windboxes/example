import * as React from "react";
import type { HeadFC } from "gatsby";
import styled, { useTailwind } from "@windboxes/react";



export const Head: HeadFC = () => (
  <React.Fragment>
    <title>Home Page</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;700;900&family=Noto+Sans+TC:wght@400;500;700&family=Rubik:wght@400;500;600;700&display=swap" rel="stylesheet" />
  </React.Fragment>
);



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
const Main = styled('main', 'min-h-screen flex flex-col justify-center items-center');
const Container = styled.div('mx-auto text-center');

const Title = styled.h1('tracking-wide font-[Inter] font-black');
const Description = styled.p('text-xl');
const Code = styled.code('bg-[#fafafa] rounded-md px-3 py-1 text-xl font-[Menlo]');
const BaseLink = styled.a('m-3 hover:underline');



const IndexPage = () => {
  const [count, setCount] = React.useState<number>(0);

  return (
    <Main>
      <Container>
        <Title sx="text-6xl">
          Welcome to
          <BaseLink sx="text-[#8a4baf]" href="https://www.gatsbyjs.com/docs/" target="_blank" rel="noreferrer noopener">Gatsby.js!</BaseLink>
        </Title>

        <Description sx="mt-10 mb-5">
          This is WindBoxes for Gatsby.js Example, contain
          <BaseLink sx="text-[#8a4baf]" href="https://github.com/windboxes/core" target="_blank" rel="noreferrer noopener">WindBoxes</BaseLink>
          and
          <BaseLink sx="text-[#8a4baf]" href="https://tailwindcss.com/" target="_blank" rel="noreferrer noopener">Tailwind</BaseLink>
        </Description>

        <Description sx="mt-5 mb-10">
          Get started by editing{' '}
          <Code>src/pages/index.tsx</Code>
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
        </Box>
      </Container>
    </Main>
  )
};



export default IndexPage;