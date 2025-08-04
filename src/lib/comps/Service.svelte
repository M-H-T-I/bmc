<script lang="ts">

    let {name} = $props();


</script>

    <div>
        <p class="inter-300">{name}</p>
    </div>


<style>

    div{
        width: 60px;
        height: 30px;

        border: 1px solid black;
        border-radius: 10px;
    }

    p{
        font-size: 1.2rem;
    }

</style>