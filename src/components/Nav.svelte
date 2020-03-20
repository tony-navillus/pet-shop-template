<script>
  import { _ } from 'svelte-i18n'
  export let segment
</script>

<style>
  nav {
    @apply font-light py-0 px-4 border-b border-brand-light;
  }

  li {
    @apply block float-left;
  }

  [aria-current] {
    @apply relative inline-block;
  }

  [aria-current]::after {
    content: '';
    width: calc(100% - 1em);
    height: 2px;
    bottom: -1px;
    @apply absolute block bg-brand;
  }

  a {
    @apply no-underline py-4 px-2 block;
  }
</style>

<nav>
  <ul class="clearfix">
    <li>
      <a aria-current={segment === undefined ? 'page' : undefined} href=".">
        {$_('navigation.home')}
      </a>
    </li>
    <li>
      <a aria-current={segment === 'about' ? 'page' : undefined} href="about">
        {$_('navigation.about')}
      </a>
    </li>

    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
    <li>
      <a
        rel="prefetch"
        aria-current={segment === 'blog' ? 'page' : undefined}
        href="blog">
        {$_('navigation.blog')}
      </a>
    </li>
  </ul>
</nav>
