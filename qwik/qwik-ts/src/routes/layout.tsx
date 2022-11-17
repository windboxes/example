import { component$, Slot, Fragment } from '@builder.io/qwik';
import styled from '~/windboxes';



export default component$(() => {
  const mainClasses = styled('w-full h-full');

  return (
    <Fragment>
      <main class={mainClasses}>
        <Slot />
      </main>
    </Fragment>
  );
});
