<script>

    import { fly, scale } from "svelte/transition";

    let {showOverlay = $bindable(false)} = $props();



</script>

<div id="parentDiv" in:fly={{y:20, duration: 200}} out:fly = {{y: 20, duration: 200}}>
    <div id="overlay">

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217873.2748292922!2d74.13756511068868!3d31.434235270605214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905cf95969827%3A0x3c629a331caa648a!2sBMC%20-%20Bashir%20Medical%20Complex!5e0!3m2!1sen!2s!4v1738467843974!5m2!1sen!2s" width="40%" height="100%" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="map to physical address"></iframe>
    
        <div id="text-parent-div">
            <h2 class="libre-baskerville-regular">Our Location</h2>
            <h6 class="inter-300">The best way to get checked out is in person.</h6>
    
            <div class="location inter-300">
                <h4>Main Building</h4>
                <h5 class="inter-400">Pakistan, Punjab, Lahore</h5>
                <p>Shareef Market Stop, Main Walton Rd, opposite Toyota Cantt Motors, Madina Colony, Lahore, Punjab 54600</p>
            </div>       
    
        </div>

        <button onclick = {() => showOverlay = false}>
            <span class="material-symbols-outlined">
                close
            </span>
        </button>
    
    </div>
</div>



<style>

    /* ---- Tags ---- */

    iframe {
        border-radius: 10px 0 0 10px;
    }
    
    button{
        background-color: transparent;
        border: none;

        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
    }
    h2{
        font-size: 4.8rem;
        text-align: center;
    }

    h4{
        font-size: 2.6rem;
        opacity: 0.8;
        text-align: center;
    }
    h5{
        margin-top: 20px;
        font-size: 1.6rem;
        opacity: 0.8;
    }
    h6{
        font-size: 1.2rem;
        letter-spacing: 4%;
    }
    p{
        margin: 10px 0;
        width: fit-content;
        font-size: 1.2rem;
        opacity: 0.8;
    }



    /* --- Classes and ids ---*/

    #parentDiv{
        
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0,0, 0.8);

        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    #overlay{
        
        margin-inline: auto; 

        width: fit-content;
        height: 80vh;

        background-color: white;

        border-radius: 10px;

        display: flex;

        position: relative;

    }

    #text-parent-div{
        
        display: flex;
        flex-direction: column;
        align-items: center;
        
        padding: 40px;
        margin: 10px;
    }   


    @media(width < 1200px){

        p, h5{
            text-align: center;
        }
    }

    @media(width < 850px){

        #overlay{
            height: 90vh;
        }
        iframe{
            position:absolute;
            bottom: 0;

            margin-top: 40px;

            width: 100%;
            height: 300px;
            border-radius: 0 0 10px 10px;

        }

        p{
            width: 100%;
        }
    }


</style>