<script lang="ts">
  import styled from "@/windboxes";
  import svelteLogo from "./assets/svelte.svg";
  import Counter from "./lib/Counter.svelte";

  const LogoLayoutClasses = styled("mb-10 flex items-center justify-center");

  const LogoClasses = styled(
    "w-28 m-5 hover:drop-shadow-[0_12px_2em_#646cffaa]"
  );
  const LogoSvelteClasses = styled(
    "w-28 m-5 hover:drop-shadow-[0_12px_2em_#ff3e00aa]"
  );
</script>

<main>
  <div class={LogoLayoutClasses}>
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
      <img src="/vite.svg" class={LogoClasses} alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class={LogoSvelteClasses} alt="Svelte Logo" />
    </a>
    <div class="text-center" />
  </div>

  <h1>Vite + Svelte</h1>

  <div class="card">
    <Counter />
  </div>

  <p>
    Check out <a
      href="https://github.com/sveltejs/kit#readme"
      target="_blank"
      rel="noreferrer">SvelteKit</a
    >, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">Click on the Vite and Svelte logos to learn more</p>
</main>
