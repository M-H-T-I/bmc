<script lang="ts">
    import ContactButton from "./ContactButton.svelte";
    import CallOverlay from "./CallOverlay.svelte";
    import LocationOverlay from "./LocationOverlay.svelte";

    let toggleCallOverlay: boolean = $state(false);
    let toggleLocationOverlay: boolean = $state(false)
</script>

<div id="parentDiv">
    <div id="text">

        <h2 class="libre-baskerville-regular">Get In Touch</h2>
        <h6 class="inter-300">Have questions or need assistance? Maybe you want to make an appointment. Give us a call.</h6>

    </div>
    <div id="buttons">
        <ContactButton handler = {() => toggleCallOverlay = true} text = "Contact Information" icon = "add_call"/>
        <ContactButton handler = {() => {toggleLocationOverlay = true}} text = "Visit Us" icon = "pin_drop"/>

    </div>

    {#if toggleCallOverlay}
        <CallOverlay bind:showOverlay = {toggleCallOverlay}/>
    {/if}

    {#if toggleLocationOverlay}
    <LocationOverlay bind:showOverlay = {toggleLocationOverlay}/>
    {/if}

</div>

<style>

    #parentDiv{
        min-height: 90vh;

        display: flex;
        justify-content: space-between;
        align-items: end;

        background-image: url("/images/contact-background.png");
        background-attachment: fixed;
        background-size:cover;
        background-repeat: no-repeat;

        padding: 20px;

    }


    #text, #buttons{
        color: white;

        padding: 20px;
        
        max-width: 40%;
        min-height: 30vh;


        border-radius: 10px;

        background-color: rgba(15, 7, 7, 0.9);
    }

    h6{
        margin: 10px;
    }


</style>