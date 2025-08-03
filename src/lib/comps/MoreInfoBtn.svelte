<script lang="ts">
    import {fly} from "svelte/transition";
    let {scrollTo} = $props()

    let hovering: boolean = $state(false);

    function toggleHover(){
        hovering = !hovering;
    }

    function handleLocalNavigation(event: Event){

        event.preventDefault();
        scrollTo.scrollIntoView({behavior:"smooth"});

    }

</script>

<button onmouseenter={toggleHover} onmouseleave={toggleHover} role="button" tabindex="0" onclick={handleLocalNavigation}>

    {#if !hovering}

    
        <span 
            class="material-symbols-outlined icon" 
            in:fly={{duration: 200, y: -200}}
            out:fly={{duration:200, y:-200}}
        >
            arrow_downward

        </span>

    {:else}

    <span class="inter-400 content" in:fly={{duration: 800, y: 200}}>Departments</span>
 
    {/if}

    </button> 

<style>

    button{

        border: none;

        width: 120px;
        height: 40px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        padding: 10px;
        
        margin-left: auto;
        margin-right: auto;

        color: white;
        background-color: black;
        
        border-radius: 8px;
        
        cursor: pointer;
    }

    .content{
        font-size: 1.3rem;
    }

    .icon{
        animation: up-down 2000ms  20ms infinite ;
        color: white;
        font-size: 2.8rem;
    }

    @keyframes up-down{
        0%{
            translate: 0 0;
        }

        50%{
            translate: 0 8px;
        }

        100% {
            translate: 0 0;
        }
    }
</style>