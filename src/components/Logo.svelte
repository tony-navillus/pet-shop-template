<script>
  import { _ } from 'svelte-i18n'
  import Icon from './Icon.svelte'
</script>

<div class="flex flex-row items-center">
  <Icon icon="cat" class="text-2xl md:text-3xl" />
  <div class="text-lg md:text-2xl text-logo ml-4">{$_('site.title')}</div>
</div>
