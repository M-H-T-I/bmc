<script>
    import GeneralBtn from "./GeneralBtn.svelte";
    let {iconName, serviceName, serviceDescription} = $props();
</script>
    <button class="parent">
        <span class="material-symbols-outlined">
            {iconName}
        </span>
        <h4 class="libre-baskerville-regular">{serviceName}</h4>
        <p class="inter-400">{serviceDescription}</p>

        <div>
            <GeneralBtn linkText="See More" linkPath="#"/>
        </div>

    </button>
<style>
    .parent{
        display: flex;
        flex-direction: column;
        align-items: start;
        border-radius: 10px;
        border: none;

        max-width: 250px;
        gap: 10px;
        margin: 20px;
        padding: 10px;
        background-color: #dfdeb9;

        transition: ease-in-out 250ms;

    }
    .parent:hover{
        transform: translate(15px, -10px);
        box-shadow: -10px 10px 10px rgba(0, 0, 0, 0.4);

    }

    div{
        width: 100%;
        display: flex;
        justify-content: center;
        margin: 10px 0;
    }

    h4{
        font-size: 2.2rem;
        margin: 15px 0 0 0;
    }
    p{
        font-size: 1.4rem;
        letter-spacing: 4%;
        display: block;
        width: 100%;
        margin: 5px 0 20px 0;
    }
    span{
        font-size: 5.4rem;
        color: var(--accent-red);
    }


    .material-symbols-outlined {
        font-variation-settings:
        'FILL' 0,
        'wght' 350,
        'GRAD' 0,
        'opsz' 24
    }


</style>