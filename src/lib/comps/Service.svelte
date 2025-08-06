<script lang="ts">

    let {name} = $props();


</script>

    <div>
        <p class="inter-500">{name}</p>
    </div>


<style>

    div{
        max-width: fit-content;
        max-height: 40px;

        padding: 10px;

        border: 1px solid black;
        border-radius: 8px;
    }

    p{
        font-size: 1.2rem;
        width: 100%;
    }

</style>