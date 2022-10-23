import React from 'react'

import Card from './Card';
import Button from './Button';



export default function ToggleCard() {
  const [showContent, setShowContent] = React.useState<boolean>(false);

  const handleToggle = () => {
    setShowContent(showContent => !showContent);
  }

  // const viewSxProps = [
  //   'max-w-[720px]',
  //   'mx-auto',
  //   'bg-blue-500',
  //   'text-white',
  //   'rounded',
  //   'p-4',
  //   'shadow',
  // ];

  // const hideSxProps = [
  //   'hidden'
  // ];

  return (
    <React.Fragment>
      <Button
        sx={[
          'mx-auto',
          'mt-10',
          'p-3',
          'mb-5',
        ]}
        type="button"
        onClick={() => handleToggle()}
      >
        Toggle
      </Button>

      { showContent && <Card>Hiii I'm card</Card> }
    </React.Fragment>
  )
}