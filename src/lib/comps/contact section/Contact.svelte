<script lang="ts">

    import BtnDiv from "$lib/comps/BtnDiv.svelte";
    import Title from "../Title.svelte";

    let {page} = $props();

</script>

<div id="parentDiv">
    <div id="text">

     <Title titleText = "Get In Touch" subtitle = "Visit us or call us." page = {page}/>

    <BtnDiv />
    

    </div>

</div>

<style>

    #parentDiv{
        min-height: 100vh;

        display: flex;
        justify-content: center;
        align-items: center;

        background-image: url("/images/contact-background.png");
        background-attachment: fixed;
        background-size:cover;
        background-position: center;
        background-repeat: no-repeat;

        padding: 60px;

    }


    #text{
        background-color: rgba(250, 250, 250, 0.6);
        padding: 40px;
        border-radius: 5px;

        display: flex;
        flex-direction: column;
        gap: 40px;
    }




</style>