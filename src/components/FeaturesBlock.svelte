<script>
    import Block from './Block.svelte'
    import Icon from './Icon.svelte'

    export let id = ''
    export let title = ''
    export let subtitle = ''
    export let features = [] // [{ icon, title, description }]
</script>

<Block
    {id}
    {title}
    {subtitle}
>
    <div class='flex flex-col md:flex-row text-center md:text-left'>
        {#each features as feature, i}
        <div class={i + 1 < features.length ? 'pb-8 md:pb-0' : ''}>
            <Icon icon={feature.icon} class='text-6xl mb-2 mx-auto md:mx-0 text-foreground-alt' />
            <h3 class='text-xl md:text-2xl font-medium mb-1'>{feature.title}</h3>
            <h4 class='text-base font-light text-foreground-light md:pr-4'>{feature.description}</h4>
        </div>
        {/each}
    </div>
</Block>