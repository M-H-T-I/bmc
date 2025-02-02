<script lang="ts">
    import {fly} from "svelte/transition";

    let hovering: boolean = $state(false);

    function toggleHover(){
        hovering = !hovering;
    }

</script>

<div onmouseenter={toggleHover} onmouseleave={toggleHover} role="button" tabindex="0">

    {#if !hovering}

    
        <span 
            class="material-symbols-outlined icon" 
            in:fly={{duration: 200, y: -200}}
            out:fly={{duration:200, y:-200}}
        >
            arrow_downward

        </span>

    {:else}

    <span class="inter-400 content" in:fly={{duration: 800, y: 200}}>More Info</span>
 
    {/if}

</div> 

<style>

    div{

        width: 80px;
        height: 80px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        padding: 10px;
        
        margin-left: auto;
        margin-right: auto;

        color: white;
        background-color: rgba(000, 000, 000, 70%);
        
        border-radius: 50%;
        
    }

    .content{
        font-size: 1.2rem;
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
            translate: 0 10px;
        }

        100% {
            translate: 0 0;
        }
    }
</style>