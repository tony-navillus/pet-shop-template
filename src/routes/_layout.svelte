<script context="module">
  import { waitLocale } from 'svelte-i18n'

  export async function preload() {
    return await waitLocale()
  }
</script>

<script>
  import Footer from '../components/Footer.svelte'
  import Header from '../components/Header.svelte'
  import Tailwind from '../components/Tailwind.svelte'
</script>

<Tailwind />

<Header />

<main>
  <slot />
</main>

<Footer />
