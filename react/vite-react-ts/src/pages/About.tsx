import React from "react";
import styled from '@windboxes/react';


const Typography = styled('div');
// const Typography = styled.div()


export default function AboutPage() {
  return (
    <React.Fragment>
      <Typography
        sx={`
          mt-10
          text-[2rem]
          text-center
          font-bold
          text-slate-900
          dark:text-slate-200
        `}
      >
        About Page
      </Typography>

      <Typography
        sx={`
          mt-10
          text-xl
          text-center
          font-bold
          text-slate-900
          dark:text-slate-200
        `}
      >
        Author
      </Typography>

      <Typography sx="mt-5 text-center">Kevin Zheng (SnowFireWolf)</Typography>
    </React.Fragment>
  );
}
