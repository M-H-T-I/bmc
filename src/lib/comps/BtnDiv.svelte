<script lang="ts">

    import CallBtn from "./contact section/CallBtn.svelte";
    import LocationOverlay from "$lib/comps/contact section/LocationOverlay.svelte";
    import CallOverlay from "$lib/comps/contact section/CallOverlay.svelte";

let toggleCallOverlay: boolean = $state(false);
let toggleLocationOverlay: boolean = $state(false);

</script>

<div id="buttons">
    {#if toggleLocationOverlay}
        <LocationOverlay bind:showOverlay = {toggleLocationOverlay}/>
    {/if}

    {#if toggleCallOverlay}
        <CallOverlay bind:showOverlay = {toggleCallOverlay}/>
    {/if}
    <CallBtn handler = {() => toggleCallOverlay = true} text = "Call Us" styleType = "emphasized" />
    <CallBtn handler ={() => toggleLocationOverlay = true} text = "Visit Us" styleType =  "normal"/>
</div>

<style>
    div{
        display: flex;
        gap: 40px;
    }
</style>