<script lang="ts">
    import Title from "$lib/comps/Title.svelte";
    import type { Entry } from "$lib/utils";
    import Department from "$lib/comps/Department.svelte";
    import {slugify} from "$lib/utils";

    let {data} = $props();

    console.log(data);
    const {depData} = data;

    let query: string = $state("");
    let filtered: Entry[] = $derived(query ? depData.filter((entry) => entry.cardInfo.departmentName.toLowerCase().includes(query.toLowerCase())) : depData);

</script>

<main>
    <Title titleText = "A Wide Variety Of Services" page = "Other Services" subtitle="Top Notch Expertise."/>
</main>

<section id="parent-service-container">
    
    <header>

            <h2 class="libre-baskerville-regular">
                Services We Provide:
            </h2>

            <input name="search" placeholder="Search..." bind:value={query}>

    </header>

    <hr>

    <div id="services-grid"> 

        {#if filtered.length > 0}

            {#each filtered as {cardInfo : {departmentName, desc, imgPath, imgAlt}}}


                <Department {departmentName} {desc} {imgAlt} {imgPath} pagePath = "/other-services/{slugify(departmentName)}"/>

            {/each}

        {:else}

            <div id="error-div" style="margin: 20px auto;">

                <h2 class="inter-400" >No department with this name exists currently. Try something different.</h2>
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
        justify-content: center;
        gap: 20px;
        flex-wrap: wrap;
    }

    @media (width < 1000px){
        header{
            flex-direction: column;
            gap:20px;
        }

        #services-grid{
            flex-direction: column;
            align-items: center;
        }

    }

</style>