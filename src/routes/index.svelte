<script>
  import { _ } from 'svelte-i18n'
  import Block from '../components/Block.svelte'
  import FeaturesBlock from '../components/FeaturesBlock.svelte'
  import Hero from '../components/Hero.svelte'
</script>

<style>
  ul li {
    @apply h-16 w-40 my-4 flex;
  }

  ul li img {
    @apply object-contain;
  }

  @media (min-width: theme('screens.sm')) {
    ul li {
      @apply h-20 w-48;
    }
  }
</style>

<svelte:head>
  <title>{$_('site.title')}</title>
</svelte:head>

<Hero
  title={$_('hero.title')}
  subtitle={$_('hero.subtitle')}
  src="cat.jpg"
  alt={$_('images.cat.jpg')} />

<Block
  id="what-we-sell"
  title={$_('what_we_sell.title')}
  subtitle={$_('what_we_sell.subtitle')}>
  <ul class="flex flex-row flex-wrap justify-center items-center">
    <li>
      <img alt="Acana" src="acana.png" />
    </li>
    <li>
      <img alt="Orijen" src="orijen.png" />
    </li>
    <li>
      <img alt="Royal Canin" src="royal_canin.png" />
    </li>
    <li>
      <img alt="Welness Core" src="wellness.jpg" />
    </li>
    <li>
      <img alt="Kong" src="kong.png" />
    </li>
  </ul>
</Block>

<FeaturesBlock
  id="our-services"
  title={$_('our_services.title')}
  features={[{ icon: 'dog-food-bowl', title: $_('our_services.pet_supplies.title'), description: $_('our_services.pet_supplies.description') }, { icon: 'delivery-truck', title: $_('our_services.local_delivery.title'), description: $_('our_services.local_delivery.description') }, { icon: 'dog-food-bowl', title: $_('our_services.pet_supplies.title'), description: $_('our_services.pet_supplies.description') }]} />

<Block id="meet-our-family" title={$_('meet_our_family.title')}>
  <div class="flex flex-col md:flex-row text-center md:text-left">
    <div class="flex-1 flex flex-col justify-center">
      <img
        src="team.jpg"
        alt={$_('images.team.jpg')}
        class="w-full object-cover" />
    </div>
    <div class="flex-1 flex flex-col justify-center md:pl-8 lg:pl-16">
      <div class="mt-6 md:mt-0">
        <h3 class="text-xl md:text-2xl font-medium mb-1">
          {$_('meet_our_family.gidget.title')}
        </h3>
        <h4 class="text-base font-light text-foreground-light">
          {$_('meet_our_family.gidget.description')}
        </h4>
      </div>
      <div class="mt-6">
        <h3 class="text-xl md:text-2xl font-medium mb-1">
          {$_('meet_our_family.john.title')}
        </h3>
        <h4 class="text-base font-light text-foreground-light">
          {$_('meet_our_family.john.description')}
        </h4>
      </div>
    </div>
  </div>
</Block>
