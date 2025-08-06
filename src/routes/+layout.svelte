<script>

    import Footer from "$lib/comps/Footer.svelte";
    import NavBar from "$lib/comps/NavBar.svelte";

    let {children} = $props();
</script>


<NavBar />

{@render children()}

<Footer />