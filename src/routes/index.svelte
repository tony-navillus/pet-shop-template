<script>
  import { _ } from 'svelte-i18n'
</script>

<style>
  h1 {
    font-size: 2.8em;
  }

  img {
    max-width: 400px;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>{$_('site.title')}</title>
</svelte:head>

<h1 class="text-center uppercase font-bold m-0 mb-2">
  {$_('pages.home.great_success')}
</h1>

<figure class="text-center m-0 mb-4">
  <img
    alt={$_('images.great-success.png')}
    src="great-success.png"
    class="mx-auto block w-full" />
  <figcaption>{$_('pages.home.high_five')}</figcaption>
</figure>

<p class="text-center my-4 mx-auto">
  <strong>{$_('pages.home.try_editing')}</strong>
</p>
