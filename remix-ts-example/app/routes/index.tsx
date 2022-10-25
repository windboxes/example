import { TailwindStyledProvider } from '@windboxes/core';
import tailwindStyles from '../styles/app.json';



export default function Index() {
  return (
    <TailwindStyledProvider tailwind={tailwindStyles}>
      <div className={tailwindStyles['container']} style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>

        <h1 className="text-xl">Welcome to Remix</h1>
        <ul>
          <li>
            <a
              target="_blank"
              href="https://remix.run/tutorials/blog"
              rel="noreferrer"
            >
              15m Quickstart Blog Tutorial
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://remix.run/tutorials/jokes"
              rel="noreferrer"
            >
              Deep Dive Jokes App Tutorial
            </a>
          </li>
          <li>
            <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
              Remix Docs
            </a>
          </li>
        </ul>
      </div>
    </TailwindStyledProvider>
  );
}
