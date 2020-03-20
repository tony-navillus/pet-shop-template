<script context="module">
  import { waitLocale } from 'svelte-i18n'

  export async function preload() {
    return await waitLocale()
  }
</script>

<script>
  import Nav from '../components/Nav.svelte'
  import Tailwind from '../components/Tailwind.svelte'

  export let segment
</script>

<style>
  main {
    position: relative;
    max-width: 56em;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<Tailwind />

<Nav {segment} />

<main>
  <slot />
</main>
