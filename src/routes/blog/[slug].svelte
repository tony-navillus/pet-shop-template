<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`blog/${params.slug}.json`)
    const data = await res.json()

    if (res.status === 200) {
      return { post: data }
    } else {
      this.error(res.status, data.message)
    }
  }
</script>

<script>
  export let post
</script>

<style>
  /*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
  .content :global(h2) {
    @apply text-2xl font-medium;
  }

  .content :global(pre) {
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
    @apply bg-background-dark p-2 overflow-x-auto rounded-sm;
  }

  .content :global(code) {
    @apply font-mono text-sm text-foreground-light bg-background-darker py-1 px-2 rounded-sm;
  }

  .content :global(pre) :global(code) {
    @apply bg-transparent p-2;
  }

  .content :global(li) {
    @apply mb-2;
  }
</style>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<h1>{post.title}</h1>

<div class="content">
  {@html post.html}
</div>
