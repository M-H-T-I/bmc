<script lang="ts">

    let {data} = $props();

    import Title from "$lib/comps/Title.svelte";
    import MoreInfoBtn from "$lib/comps/MoreInfoBtn.svelte";
    import Service from "$lib/comps/Service.svelte";

    let scrollTo: HTMLElement;

</script>

<main>
    <Title titleText = "Top Notch Expertise" page = "Departments" subtitle="We will give it our all to help heal you."/>
    <MoreInfoBtn scrollTo = {scrollTo}/>
</main>

<section bind:this={scrollTo}>
    <h2 class="libre-baskerville-regular">
        Our Departments
    </h2>

    <div id="services-grid">

        {#each data.cardData as {serviceName, serviceDescription, iconName}}
            <Service serviceName serviceDescription iconName />
        {/each}

        <!-- <Service serviceName="Nephrology" serviceDescription="One of our most revered balah bala habjandksadk" iconName="nephrology"/> -->
    </div>

</section>

<style>

    main{
        min-height: 90vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 50px;
    }


    h2{
        font-size: 2.8rem;
        text-align: center;
        margin: 20px;
    }

</style>