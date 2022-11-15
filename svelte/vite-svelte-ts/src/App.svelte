<script lang="ts">
  import tailwind from './tailwind.module.css';
  import { parseStyle } from '@windboxes/core';
  import svelteLogo from './assets/svelte.svg'
  import Counter from './lib/Counter.svelte'



  const ContainerStyles = parseStyle('mb-10 flex items-center justify-center', tailwind);

  const LogoStyles = parseStyle('w-40 hover:drop-shadow-[0_12px_2em_#646cffaa]', tailwind);
  const LogoSvelteStyles = parseStyle('w-40 hover:drop-shadow-[0_12px_2em_#ff3e00aa]', tailwind);
</script>

<main>
  <div class={ContainerStyles}>
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer"> 
      <img src="/vite.svg" class={LogoStyles} alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer"> 
      <img src={svelteLogo} class={LogoSvelteStyles} alt="Svelte Logo" />
    </a>
    <div class="text-center"></div>
  </div>

  <h1>Vite + Svelte</h1>

  <div class="card">
    <Counter />
  </div>

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">
    Click on the Vite and Svelte logos to learn more
  </p>
</main>
