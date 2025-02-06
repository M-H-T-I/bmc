<script>
    let { page, titleText, subtitle} = $props();

</script>


<div class = "inter-300">
        
    <h3>
        {page}
    </h3>

    <h1 class="libre-baskerville-regular">
        {titleText}
    </h1>

    <h3 style:color = "#2F2F2F">
        {subtitle}
    </h3>

</div>

<style>

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h3{
        font-size: 14px;
        color: #575656;
    }

    h1{
        font-size: 36px;
        color: black;
        margin: 10px;
    }

</style>