<script>
  import { _ } from 'svelte-i18n'
  import Logo from './Logo.svelte'
  import PageSection from './PageSection.svelte'
</script>

<footer class="bg-background-alt text-white py-20">
  <PageSection>
    <div class="w-full mb-6">
      <Logo />
    </div>
    <div class="flex flex-col md:flex-row text-base leading-loose">
      <div class="flex-1">
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
          <li>
            <a href="privacy-policy" alt={$_('navigation.privacy_policy')}>
              {$_('navigation.privacy_policy')}
            </a>
          </li>
          <li>
            <a
              href="terms-and-conditions"
              alt={$_('navigation.terms_and_conditions')}>
              {$_('navigation.terms_and_conditions')}
            </a>
          </li>
        </ul>
      </div>
      <div class="flex-1 my-8 md:my-0">
        <div>Weissenbruchstraat 63</div>
        <div>2596 GB Den Haag</div>
      </div>
      <div class="flex-1">
        <div>info@petshop.nl</div>
        <div>070-555-5555</div>
      </div>
    </div>
  </PageSection>
</footer>
