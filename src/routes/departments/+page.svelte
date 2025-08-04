<script lang="ts">
    import Title from "$lib/comps/Title.svelte";
    import type { Entry } from "./data";
    import Department from "$lib/comps/Department.svelte";
    import {slugify} from "$lib/utils";

    let {data} = $props();
    const depData: Entry[] = data.depData;



    let query: string = $state("");
    let filtered: Entry[] = $derived(query ? depData.filter((entry) => entry.cardInfo.departmentName.toLowerCase().includes(query.toLowerCase())) : depData);

</script>

<main>
    <Title titleText = "Top Notch Expertise" page = "Departments" subtitle="We will give it our all to help heal you."/>
</main>

<section id="parent-service-container">
    
    <header>

            <h2 class="libre-baskerville-regular">
                Our Departments
            </h2>

            <input name="search" placeholder="Search..." bind:value={query}>

    </header>

    <hr>

    <div id="services-grid"> 

        {#if filtered.length > 0}

            {#each filtered as {cardInfo : {departmentName, desc, imgPath, imgAlt}}}


                <Department {departmentName} {desc} {imgAlt} {imgPath} pagePath = "/departments/{slugify(departmentName)}"/>

            {/each}

        {:else}

            <div id="error-div">

                <h2 class="inter-400" style="margin: 20px auto;">No department with this name exists currently. Try something different.</h2>
                <h4 class="inter-300">For any queries contact our team <a href="/contact">here</a></h4>

            </div>

        {/if}

    

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

    h4{
        font-size: 1.6rem;
    }

    hr{
        margin: 25px 0 50px 0;
        color: #F1F0E4;
    }


    input{
        padding: 10px;
        background-color: #F1F0E4;
        max-height: 40px;

        border: 1px solid gray;

    }

    input:active{
        border: 1px solid gray;
    }

    #error-div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    #parent-service-container{
        display: flex;
        flex-direction: column;
        padding: 20px;
    }

    #parent-service-container header{

        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        
    }

    #services-grid{
        display: flex;
        gap: 10px;
    }

</style>