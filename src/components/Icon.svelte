<script>
    export let icon = ''
    
    let classname = ''
    export { classname as class }
</script>

<div class='inline-block leading-none'>
    <span class='{classname} {`icon-${icon}`}'></span>
</div>
