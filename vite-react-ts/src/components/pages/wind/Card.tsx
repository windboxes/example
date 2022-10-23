import React from 'react';
import styled from '@windboxes/core';



const StyledCard = styled('div', [
  'max-w-[720px]',
  'mx-auto',
  'bg-blue-500',
  'text-white',
  'rounded',
  'p-4',
  'shadow',
]);



export default function Card({ ...props }) {
  return (
    <StyledCard {...props} />
  )
}