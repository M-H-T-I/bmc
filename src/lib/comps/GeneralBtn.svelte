<script lang="ts">
    let {linkPath, linkText}  = $props(); 
</script>

<a href={linkPath} class="inter-400">
    {linkText}
</a>

<style>
    a{
        color: black;
        text-decoration: underline;

        font-size: 1.4rem;

        transition: all ease-in-out 300ms;
    }

    a:hover{
        color: var(--accent-red);
    }
</style>