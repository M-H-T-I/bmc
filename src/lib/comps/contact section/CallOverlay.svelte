<script>

    import { fly, scale } from "svelte/transition";

    let {showOverlay = $bindable(false)} = $props();



</script>

<div id="parentDiv" in:fly={{y:20, duration: 200}} out:fly = {{y: 20, duration: 200}}>
    <div id="overlay">

        <img src="/images/call-overlay.png" alt="a patient shaking the hand of her doctor">
    
        <div id="text-parent-div">
            <h2 class="libre-baskerville-regular">Contact Us</h2>
            <h6 class="inter-300">The best way to get a hold of us is through our phone number.</h6>
    
            <div class="timing inter-300">
                <h4>Timings: </h4>
                <p>Monday-Friday</p>
                <p>11:00 am - 1:00 pm</p>
                <p>7:30 pm - 9:30 pm</p>
            </div>
    
            <div class="phone-num inter-300">
                <h4>Phone:</h4>
                <p>0311 2233262</p>
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
    }

    h4{
        font-size: 2.2rem;
        opacity: 0.8;
    }
    h6{
        font-size: 1.2rem;
        letter-spacing: 4%;
    }
    p{
        margin: 10px 0;
        width: fit-content;
    }

    img{
        width: 25vw;
        border-radius: 10px 0 0 10px;
    }

    /* --- Classes and ids ---*/

    #parentDiv{
        
        width: 100%;
        height: 100%;
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
        max-height: 80vh;

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

    .timing{
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;

        margin-bottom: 30px;

    }

    .phone-num{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

</style>