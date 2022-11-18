import { component$, useClientEffect$, useStore, useStylesScoped$ } from '@builder.io/qwik';
import { DocumentHead, useLocation } from '@builder.io/qwik-city';
import styled from '~/windboxes';
import styles from './flower.css?inline';



export default component$(() => {
  const containerClasses = styled('container mx-auto h-screen flex flex-col justify-center items-center');
  const cardClasses = styled('p-5 w-full bg-gray-50 rounded-xl border border-gray-200');

  useStylesScoped$(styles);
  const loc = useLocation();

  const state = useStore({
    count: 0,
    number: 20,
  });

  useClientEffect$(({ cleanup }) => {
    const timeout = setTimeout(() => (state.count = 1), 500);
    cleanup(() => clearTimeout(timeout));

    const internal = setInterval(() => state.count++, 7000);
    cleanup(() => clearInterval(internal));
  });

  return (
    <div class={containerClasses}>
      <div class={cardClasses}>
        <input
          type="range"
          value={state.number}
          max={50}
          onInput$={(ev) => {
            state.number = (ev.target as HTMLInputElement).valueAsNumber;
          }}
        />
        <div
          style={{
            '--state': `${state.count * 0.1}`,
          }}
          class={{
            host: true,
            pride: loc.query['pride'] === 'true',
          }}
        >
          {Array.from({ length: state.number }, (_, i) => (
            <div
              key={i}
              class={{
                square: true,
                odd: i % 2 === 0,
              }}
              style={{ '--index': `${i + 1}` }}
            />
          )).reverse()}
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Qwik Flower',
};
