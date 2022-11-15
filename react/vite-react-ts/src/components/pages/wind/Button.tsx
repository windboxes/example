import React from 'react';
import styled from '@windboxes/core';




const StyledButton = styled('button', [
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



export default function Button({ ...props }) {
  return <StyledButton {...props} />;
};
