<script lang="ts">
    import MoreInfoBtn from "$lib/comps/MoreInfoBtn.svelte";
    import GeneralBtn from "$lib/comps/GeneralBtn.svelte";
    import ServiceCard from "$lib/comps/home-only/ServiceCard.svelte";
    import CredBlock from "$lib/comps/home-only/credibility/CredBlock.svelte";
    import Contact from "$lib/comps/contact section/Contact.svelte";
    import Title from "$lib/comps/Title.svelte";

    let aboutUsRef: HTMLElement;

    function handleLocalNavigation(event: Event){

        event.preventDefault();
        aboutUsRef.scrollIntoView({behavior:"smooth"});

    }

</script>

<main>

    <div>
        <Title page = "Home" subtitle = "Years of service. Thousands of lives saved." titleText = "Cutting Edge Medical Expertise"/>
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

    <h2 class="libre-baskerville-regular">What Do We Do?</h2>
    <h6 class="inter-300">Get you on the right path to heal.</h6>

    <ServiceCard />
    
</section>

<section id="partners">
    <h2 class="libre-baskerville-regular">Our Partners</h2>
    <img src="/images/hameed-latif.png" alt="logo saying hameed latif laboratories">
</section>

<section id="about-us" bind:this={aboutUsRef}>
    <h2 class="libre-baskerville-regular">About Us</h2>
    <h6 class="inter-300">Spoilers: We are people who help other people.</h6>

    <img src="/images/about-us.png" alt="the bmc team">

    <h3 class="libre-baskerville-regular">Our Story</h3>

    <p class="inter-300">

        We have a pretty interesting story. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus nunc eget felis ultrices cursus eget vitae ligula. Aenean bibendum  bibendum quam id finibus. Nam a est finibus, fermentum elit faucibus,  maximus turpis. Morbi vel arcu arcu. Praesent tristique placerat  egestas. Ut sed est quam. Etiam ac viverra ligula, vitae vehicula justo. Cras quis sagittis nisi. Proin bibendum, massa sed sollicitudin mollis, ipsum mauris volutpat nisi, non dictum lectus sapien a mi.
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed  tincidunt molestie ex dictum pharetra. Pellentesque molestie augue ut  porttitor elementum. Nam porta dignissim sapien, eu ornare nisl  consectetur sed. Suspendisse finibus, metus nec luctus egestas, purus  nisi sollicitudin metus, quis vestibulum leo felis non magna. 
       Nunc vel  dapibus felis, yoop ion ni non efficitur turpis.    
    </p>

    <GeneralBtn linkPath = "/about-us" linkText = "Read More"/>

</section>

<Contact />

<style>

    div{
        margin: 20px;
    }

    h1{
        font-size: 6.4rem;
        margin-bottom: 1%;
    }

    :global(h2){
        font-size: 6.4rem;
    }

    :global(h3){
        font-size: 3.2rem;
        width: fit-content;
    }

    h4{
        font-size: 1.6rem;
        margin-left: 10px;
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
        letter-spacing: 3%;

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

        color: white;

    }

    #about-us{
        padding-top: 80px;

        display: flex;
        align-items: center;
        flex-direction: column;

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

    #partners{
        display: flex;
        flex-direction: column;
        align-items: center;

        padding: 20px 0 100px 0;
    }
    /* ---- SECTION SPECIFIC ---- */
    main div{
        background-color: rgba(255, 255, 255, 0.6);
        padding: 20px;
        border-radius: 5px;
    }

    #about-us img{
        width: 40%;
        margin-bottom: 40px;
    }

     #cred-grid{
        width: 100%;

        display: flex;
        justify-content: space-evenly;
        align-items: center;

        margin: 90px 0 0 0;
    }

    #partners img{
        max-width: 35%;

        margin:100px 0 0 0;
    }

</style>
