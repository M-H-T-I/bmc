<script>

    import { page } from "$app/state";

</script>

<div>
    <h1 class="inter-500">Error: {page.status}</h1>
    <p class="inter-300">{page.error?.message}</p>
    <a href="/" class="inter-300">Go Back To Home</a>
</div>


<style>
    div{
        margin: 200px 0 0 0 ;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1{
        font-size: 4.8rem;
    }

    p{
        font-size: 2.4rem;
        margin: 20px 0;
        text-align: center;
    }
    a{
        font-size: 1.4rem;
    }
</style>
