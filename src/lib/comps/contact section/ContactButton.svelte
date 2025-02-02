<script lang="ts">
    let { text, handler, icon} = $props();

    let iconColor:string = $state("#B40133"); 

</script>

    <button onclick={handler}  onmouseenter={()=> iconColor = "white"} onmouseleave = {()=> iconColor = "#B40133"}>

        <span class="material-symbols-outlined" style:color={iconColor}>
            {icon}
        </span>

        <h5 class="inter-400">
            {text}
        </h5>

    </button>

<style>

    button{

        margin: 20px;

        min-width: 215px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        background-color: white;

        border: none;
        border-radius: 8px;

        padding: 5px 10px;

        color: black;

        transition: all ease-in 100ms;
    }

    button:hover{
        background-color: var(--accent-red);
        color: white;
        cursor: pointer;
    }

    h5{
        width: 100%;
        font-size: 1.6rem;

        margin: 10px;

        text-align: left;

    }

    .material-symbols-outlined {
        font-variation-settings:
        'FILL' 0,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24
    }

</style>

