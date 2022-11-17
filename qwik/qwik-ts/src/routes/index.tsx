import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';
import styled from '~/windboxes';



export default component$(() => {
  const ContainerClasses = styled('w-full min-h-screen flex align-center justify-center');
  const LinkClasses = styled('block h-min bg-gray-200 p-3 mt-10 rounded-md');

  return (
    <div class={ContainerClasses}>
      <div>
        <Link class={LinkClasses} href="/flower">
          Blow my mind 🤯
        </Link>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
