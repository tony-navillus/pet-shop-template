<script>
  export let id
</script>

<section
  class="max-w-screen-xl h-full w-full mx-auto px-4 sm:px-8 lg:px-12 2xl:px-0">
  {#if id}
    <a name={id} class="invisible" />
  {/if}
  <slot />
</section>
