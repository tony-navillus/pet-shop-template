<script>
  import PageSection from './PageSection.svelte'

  export let id
  export let title
  export let subtitle
</script>

<style global>
  article:last-of-type {
    @apply mb-20;
  }

  @media (min-width: theme('screens.md')) {
    article:last-of-type {
      @apply mb-32;
    }
  }
</style>

<PageSection {id}>
  <article class="mt-20 md:mt-32">
    {#if title}
      <h3
        class="text-2xl md:text-4xl text-center font-semibold {subtitle ? '' : 'mb-8'}">
        {title}
      </h3>
    {/if}

    {#if subtitle}
      <h4
        class="text-lg md:text-2xl text-center font-light text-foreground-light
        mb-8">
        {subtitle}
      </h4>
    {/if}

    <slot />
  </article>
</PageSection>
