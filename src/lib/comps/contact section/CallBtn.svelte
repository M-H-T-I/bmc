<script lang="ts">
    let { text, handler, styleType} = $props();

    

</script>

    <button onclick = {handler} class="{styleType} inter-300">
        {text}
    </button>

<style>

    button{
        box-sizing: border-box;

        min-width: 125px;
        border-radius: 5px;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 10px;

        transition: all ease-in 200ms;

        font-weight: 400;


    }

    .emphasized{
        
       background-color: black;
       color: white;
       border: none;

    }

    button:hover{
        background-color: white;
        color: black;
        border: 1px solid transparent;
    }

    .normal{
        border: 1px solid black;
        background-color: transparent;
        color: black;
        font-size: 1.5rem;
        
    }

  
   
    
</style>

