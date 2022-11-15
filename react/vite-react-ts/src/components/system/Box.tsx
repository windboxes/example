import React from 'react';
import styled from '@windboxes/react';



const StyledBox = styled('div');



export default function Box({ ...props }) {
  return (
    <StyledBox {...props} />
  );
}

export const RefBox = React.forwardRef((props, ref) => {
  return (
    <StyledBox ref={ref} {...props} />
  );
});