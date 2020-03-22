<script>
  import PageSection from './PageSection.svelte'

  export let alt = ''
  export let src = ''
  export let subtitle = ''
  export let title = ''
</script>

<style>
  section {
    height: 20rem;
  }

  @media (min-width: theme('screens.xs')) {
    section {
      max-height: 80vh;
      height: 34rem;
    }
  }

  @media (min-width: theme('screens.lg')) {
    section {
      height: 75vh;
    }
  }
</style>

<section class="w-full relative bg-background-dark">
  <img {src} {alt} class="absolute h-full w-full object-cover" />

  <PageSection>
    <div
      class="h-full w-2/5 relative z-10 flex flex-col justify-center pt-12
      leading-snug">
      <h1
        class="text-lg sm:text-xl md:text-4xl lg:text-5xl 2xl:text-6xl
        font-semibold">
        {title}
      </h1>
      <h2 class="text-base sm:text-lg md:text-2xl lg:text-3xl font-light mt-2">
        {subtitle}
      </h2>
    </div>
  </PageSection>
</section>
