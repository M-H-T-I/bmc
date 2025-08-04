<script lang="ts">
    import type { PageProps } from "../$types";
    import Service from "$lib/comps/Service.svelte";
    
    let {data} = $props()

    const {entry} = data;

</script>

    <header>

        <h1 class="inter-400">{entry.cardInfo.departmentName}</h1>
        <p class="inter-300">{entry.cardInfo.desc}</p>

    </header>

    <Service name = "ureter replacement"/>

<style>

    header{
        height: 50vh;
        padding: 20px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 50px
    }

    h1{
        font-size: 4.2rem;
    }

    p{
        font-size: 1.5rem;
    }

</style>