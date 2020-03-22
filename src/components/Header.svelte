<script>
  import { createEventDispatcher } from 'svelte'
  import { _ } from 'svelte-i18n'
  import Icon from './Icon.svelte'
  import Logo from './Logo.svelte'
  import PageSection from './PageSection.svelte'

  const dispatch = createEventDispatcher()

  const onMenu = () => dispatch('menu')

  let scrollY = 0
  let height = 0

  $: solid = scrollY / height >= 1
</script>

<style>
  header.solid {
    @apply bg-background-dark shadow-lg;
  }

  nav li,
  #contact li {
    @apply inline-block;
  }

  nav li a,
  #contact li a {
    @apply p-2 block text-lg;
  }
</style>

<svelte:window bind:scrollY />

<header
  bind:offsetHeight={height}
  class="sticky top-0 z-40 transition transition-colors duration-150"
  class:solid>
  <PageSection>
    <div class="flex flex-row h-16 items-center">
      <div class="flex-1 lg:flex-none">
        <Logo />
      </div>

      <nav class="hidden lg:block ml-8 xl:ml-12 flex-1">
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

      <ul
        id="contact"
        class="hidden lg:flex flex-row items-center mr-12 xl:mr-16">
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

      <button class="flex flex-row items-center">
        <Icon icon="world" class="text-2xl m-2" />
        <span>{$_('site.locale')}</span>
      </button>

      <button
        class="flex lg:hidden flex-row items-center ml-4"
        on:click={onMenu}>
        <Icon icon="menu" class="text-2xl m-2" />
      </button>
    </div>
  </PageSection>
</header>
