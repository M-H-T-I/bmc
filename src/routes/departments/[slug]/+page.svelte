<script lang="ts">
    import Service from "$lib/comps/Service.svelte";
    import Doctor from "$lib/comps/Doctor.svelte";
    
    let {data} = $props()

    const {entry} = data;

</script>

<div id="parent-container">
    <header>

        <h1 class="inter-400">{entry.cardInfo.departmentName}</h1>
        <p class="inter-300">{entry.cardInfo.desc}</p>

    </header>

    <section id="services">

        <h4 class="inter-400">Services we provide:</h4>

        <div id="service-grid">
            {#each entry.pageInfo.serviceList as service}
                <Service name = {service} />
            {/each}
        </div>
      

    </section>

    <section id="doctors"> 

        <h4 class="inter-400">Our Specialists: </h4>

        <section id="doctors-grid">
             {#each entry.pageInfo.doctorList as doctor}
                <Doctor {...doctor} />
        {   /each}
        </section>
       

    </section>

    <section id="contact">
        
    </section>
</div>

<style>

    
    header{
        height: 50vh;

        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 50px
    }

    h1{
        font-size: 4.2rem;
    }

    h4{
        font-size: 1.8rem;
        width: 100%;
    }
    p{
        width: 100%;
        font-size: 1.4rem;
    }

    #parent-container{
        padding: 20px;
    }

    #service-grid{
        display: flex;
        gap: 10px;
        margin: 20px 0 10px 0;

    }

    #doctors{

        margin: 50px 0 10px 0;
        
    }

    #doctors-grid{
        display: flex;
        gap: 10px;
        margin: 20px 0 0 0;
    }
</style>