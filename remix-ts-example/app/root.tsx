import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { TailwindStyledProvider } from '@windboxes/core';

import styles from "./styles/tailwind.css";
import tailwindStyles from "./styles/tailwind.json";



export function links() {
  return [{ rel: "stylesheet", href: styles }]
}



export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});



export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <TailwindStyledProvider tailwind={tailwindStyles}>
          <Outlet />
        </TailwindStyledProvider>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
