<script lang="ts">
    let {imgPath, imgAlt, departmentName, desc, pagePath} = $props();

    if(imgPath === ""){
        imgPath = "/images/services/placeholder.webp";
        imgAlt = "placeholder image";
    }


</script>
<a href={pagePath}>

    <div class="parent">

        <img src={imgPath} alt={imgAlt} />

        <section class="text-content">

            <h4 class="libre-baskerville-regular">
                {departmentName}
            </h4>

            <p class="inter-200">
                {desc}
            </p>

        </section>

    </div>

</a>


<style>

    a {
        text-decoration: none;  
        color: black;

        transition: 200ms ease-in-out;
    }

    
    a:hover{

        transform: translate(10px, -10px);

    }

    h4{
        font-size: 2.4rem;
    }

    p{
        font-size: 1.4rem;
        width: 100%;
        padding: 10px;
    }
    .parent{    

        max-width: 450px;

        display: flex;
        flex-direction: column;
        gap: 20px;

        background-color: #F1F0E4;
        border-radius: 10px 10px;

    }

    section{
        padding: 20px;
    }
    

    @media(width < 500px){

        .parent{
            max-width: 70%;
        }

    }

</style>
