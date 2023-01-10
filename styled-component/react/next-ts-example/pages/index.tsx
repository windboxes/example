import type { NextPage } from 'next'
import React from 'react';
import Head from 'next/head';
import styled from '@windboxes/react';



const Main = styled('main', 'min-h-screen flex flex-col justify-center items-center');
const Grid = styled.div('flex align-center justify-center flex-wrap max-w-[800px] w-full');
const Container = styled.div('mx-auto text-center');

const Title = styled.h1('tracking-wide font-[Inter] font-black');
const Description = styled.p('text-xl');
const Code = styled.code('bg-[#fafafa] rounded-md px-3 py-1 text-xl font-[Menlo]');
const BaseLink = styled.a('m-3 hover:underline');
const LinkCard = styled.a('m-4 p-6 max-w-[300px] w-full text-left text-inherit no-underline border border-solid border-[#eaeaea] rounded-xl hover:text-[#0070f3] active:text-[#0070f3] hover:border-[#0070f3] active:border-[#0070f3]');
const CardTitle = styled.h1('text-2xl font-bold');
const CardDescription = styled.p('mt-4');



const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Main>
        <Container>
          <Title sx="text-6xl">
            Welcome to
            <BaseLink sx="text-[#0070f3]" href="https://nextjs.org" target="_blank" rel="noreferrer noopener">Next.js!</BaseLink>
          </Title>

          <Description sx="mt-10 mb-5">
            This is WindBoxes for Next.js Example, contain
            <BaseLink sx="text-[#0070f3]" href="https://github.com/windboxes/core" target="_blank" rel="noreferrer noopener">WindBoxes</BaseLink>
            and
            <BaseLink sx="text-[#0070f3]" href="https://tailwindcss.com/" target="_blank" rel="noreferrer noopener">Tailwind</BaseLink>
          </Description>

          <Description sx="mt-5 mb-10">
            Get started by editing{' '}
            <Code>pages/index.tsx</Code>
          </Description>

          <Grid>
            <LinkCard href="https://nextjs.org/docs">
              <CardTitle>Documentation &rarr;</CardTitle>
              <CardDescription>Find in-depth information about Next.js features and API.</CardDescription>
            </LinkCard>

            <LinkCard href="https://nextjs.org/learn">
              <CardTitle>Learn &rarr;</CardTitle>
              <CardDescription>Learn about Next.js in an interactive course with quizzes!</CardDescription>
            </LinkCard>

            <LinkCard
              href="https://github.com/vercel/next.js/tree/canary/examples"
            >
              <CardTitle>Examples &rarr;</CardTitle>
              <CardDescription>Discover and deploy boilerplate example Next.js projects.</CardDescription>
            </LinkCard>

            <LinkCard
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            >
              <CardTitle>Deploy &rarr;</CardTitle>
              <CardDescription>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </CardDescription>
            </LinkCard>
          </Grid>
        </Container>
      </Main>
    </React.Fragment>
  )
}

export default Home
