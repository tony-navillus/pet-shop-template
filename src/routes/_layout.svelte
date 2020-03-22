<script context="module">
  import { waitLocale } from 'svelte-i18n'

  export async function preload() {
    return await waitLocale()
  }
</script>

<script>
  import { _ } from 'svelte-i18n'
  import Footer from '../components/Footer.svelte'
  import Icon from '../components/Icon.svelte'
  import Header from '../components/Header.svelte'
  import Logo from '../components/Logo.svelte'
  import Tailwind from '../components/Tailwind.svelte'

  let menuOpen = false

  const toggleMenu = () => (menuOpen = !menuOpen)
  const openMenu = () => (menuOpen = true)
  const closeMenu = () => (menuOpen = false)
</script>

<style>
  nav li,
  #contact li {
    @apply inline-block;
  }

  nav li a,
  #contact li a {
    @apply py-2 block text-lg;
  }
</style>

<Tailwind />

<aside class="lg:hidden h-screen w-64 absolute top-0 right-0 flex flex-col py-3 px-5">
  <div class='flex items-center pb-2 pt-4 mb-4 border-b border-foreground-alt'>
    <Logo />
  </div>
  
  <nav class="flex-1">
    <ul>
      <li>
        <a href="#what-we-sell" alt={$_('navigation.what_we_sell')}>
          {$_('navigation.what_we_sell')}
        </a>
      </li>
      <li>
        <a href="#our-services" alt={$_('navigation.our_services')}>
          {$_('navigation.our_services')}
        </a>
      </li>
      <li>
        <a href="#meet-our-family" alt={$_('navigation.meet_our_family')}>
          {$_('navigation.meet_our_family')}
        </a>
      </li>
    </ul>
  </nav>

  <ul id="contact" class="flex flex-row items-center justify-around pt-3 border-t border-foreground-alt">
    <li>
      <a href="#" alt={$_('navigation.location')}>
        <Icon icon="location-pin" class="text-2xl mx-1" />
      </a>
    </li>
    <li>
      <a href="#" alt={$_('navigation.phone')}>
        <Icon icon="phone" class="text-2xl mx-1" />
      </a>
    </li>
    <li>
      <a href="#" alt={$_('navigation.email')}>
        <Icon icon="email" class="text-2xl mx-1" />
      </a>
    </li>
    <li>
      <a href="#" alt={$_('navigation.facebook')}>
        <Icon icon="facebook" class="text-2xl mx-1" />
      </a>
    </li>
  </ul>
</aside>

<div
  class="bg-background transform lg:transform-none transition lg:transition-none transition-transform duration-300 {menuOpen ? 'shadow-2xl -translate-x-64' : ''}">
  <Header on:menu={toggleMenu} />

  <main class='-mt-16'>
    <slot />
  </main>

  <Footer />
</div>
