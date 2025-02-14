<script lang="ts">
    import GeneralBtn from "$lib/comps/GeneralBtn.svelte";
    import ServiceCard from "$lib/comps/home-only/ServiceCard.svelte";
    import CredBlock from "$lib/comps/home-only/credibility/CredBlock.svelte";
    import Contact from "$lib/comps/contact section/Contact.svelte";
    import Title from "$lib/comps/Title.svelte";
    import BtnDiv from "$lib/comps/BtnDiv.svelte";

    let aboutUsRef: HTMLElement;

    function handleLocalNavigation(event: Event){

        event.preventDefault();
        aboutUsRef.scrollIntoView({behavior:"smooth"});

    }

</script>

<main>

    <div>

        <Title page = "Home" subtitle = "Years of service. Thousands of lives saved." titleText = "Cutting Edge Medical Expertise"/>
       
        <BtnDiv />
       
           
    </div>

    
    <!-- <a href="#about-us" onclick={handleLocalNavigation}>
        <MoreInfoBtn /> 
    </a>   -->

</main>

<section id="credibility-figures">
    <div id="cred-grid">

        <CredBlock figure="50000+" description = "patients saved"/>

        <CredBlock figure="32+" description = "years of service"/>

        <CredBlock figure="15+" description = "departments"/>

        <CredBlock figure="100%" description = "patients saved"/>

        <CredBlock figure="15+" description = "trusted recognitions"/>

        <CredBlock figure="5+" description = "platforms acknowledge us"/>



    </div>
</section>

<section id="services">

    <div>
        <Title titleText = "What can we do for you?" page = "Home" subtitle = "You have a variety of options to choose from."/>
    </div>

    <ServiceCard />
    
</section>

<!-- <section id="partners">
    <Title page = "Home" titleText = "We are trusted by" subtitle = "The best of the best trust us."/>
    <img src="/images/hameed-latif.png" alt="logo saying hameed latif laboratories">
</section> -->

<section id="about-us" bind:this={aboutUsRef}>

    <Title titleText = "Our Story" subtitle = "Here's a sneak peak" page = "Home"/>

    <div 
    style:display="flex"
    style:justify-content = "space-between">

        <img src="/images/about-us.png" alt="the bmc team">

            <div 
            style:display="flex"
            style:flex-direction = "column"
            style:align-items="center"
            style:width="fit-content"
            style:justify-content = "center"
            >
                <p class="inter-300" style:width ="80%">

                    We have a pretty interesting story. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus nunc eget felis ultrices cursus eget vitae ligula. Aenean bibendum  bibendum quam id finibus. Nam a est finibus, fermentum elit faucibus,  maximus turpis. Morbi vel arcu arcu. Praesent tristique placerat  egestas. Ut sed est quam. Etiam ac viverra ligula, vitae vehicula justo. Cras quis sagittis nisi. Proin bibendum, massa sed sollicitudin mollis, ipsum mauris volutpat nisi, non dictum lectus sapien a mi.
                    Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed  tincidunt molestie ex dictum pharetra. Vestibulum leo felis non magna. 
                Nunc vel  dapibus felis, yoop ion ni non efficitur turpis.  
            
                </p>
            
                <GeneralBtn linkPath = "/about-us" linkText = "Read More"/>
            </div>
            
    </div>

</section>

<Contact />

<style>

    div{
        margin: 20px;
    }

    :global(h2){
        font-size: 6.4rem;
    }

    :global(h3){
        font-size: 2.4rem;
        width: fit-content;
    }

    :global(h6){
        font-size: 1.4rem;
        font-weight: 200;

        margin: 10px 0 100px 0;
    }

    :global(p){
        
        text-align: left;
        font-size: 1.3rem;
        line-height: 140%;
        letter-spacing: 4%;

        width: 35%;

        margin: 30px 0;

    }

    /* ---- SECTIONS ---- */ 
    
    main{
        
        width: 100%;
        height: 100vh;
        background-image: url("/images/hero-background.png");
        background-repeat: no-repeat;
        background-size:cover;
        background-attachment: fixed;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;


    }

    #about-us{
        padding-top: 80px;

        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        width: 100%;

        padding-bottom: 125px;
    }
    #services{
        display: flex;
        align-items: center;
        flex-direction: column;

    } 

    #credibility-figures{

        margin: 20px 0 150px 0 ;

        color: white;

        display: flex;
        align-items: center;

        flex-direction: column;
    }

    /* #partners{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        height: 100vh;

        padding: 20px 0 100px 0;
    } */
    /* ---- SECTION SPECIFIC ---- */
    main div{
        background-color: rgba(255, 255, 255, 0.6);
        padding: 20px;
        border-radius: 5px;

        display: flex;
        flex-direction: column;
        align-items: center;

        gap: 40px;

    }

    #services div{
        margin-bottom: 100px;
    }

    #about-us img{
        
        min-width: 700px;
        max-width: 60%;
        border-radius: 5px;
        margin: 100px 40px 40px 40px ;
    }

    

     #cred-grid{
        width: 100%;

        display: flex;
        justify-content: space-evenly;
        align-items: center;

        margin: 90px 0 0 0;
    }

    /* #partners img{
        max-width: 25%;
        min-width: 400px;

        margin:100px 0 0 0;
    } */

</style>
