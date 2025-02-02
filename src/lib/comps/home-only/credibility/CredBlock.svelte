<script lang="ts">
    // figure should be integer
    let {figure, description} = $props();
</script>

<div>
    <span class="figure inter-700">{figure}</span>
    <span class="description inter-400">{description}</span>
</div>

<style>
    div{
        display: flex;
        flex-direction: column;
        align-items: center;

        color: var(--main-black);
        background-color: white;
        padding: 10px;

        border-radius: 10px;
    }

    .figure{
        color: black;
        font-size: 2.2rem;
        margin: 10px 0 10px 0;
    }

    .description{
        font-size: 1.4rem;
        margin: 0 10px 10px 10px;
    }
</style>