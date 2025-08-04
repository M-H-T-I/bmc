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

    <section id="services">

        <p class="inter-300">Services we provide:</p>

        <div id="service-grid">
            {#each entry.pageInfo.serviceList as service}
                <Service name = {service} />
            {/each}
        </div>
      

    </section>

    <section id="doctor-grid">

        {#each entry.pageInfo.doctorList as doctor}
            
        {/each}

    </section>

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

    #services{
        padding: 20px;

    }

    #service-grid{
        display: flex;
        gap: 10px;
        margin: 20px 0 10px 0;

    }

</style>