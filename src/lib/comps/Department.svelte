<script lang="ts">
    let {imgPath, imgAlt, departmentName, desc, pagePath} = $props();

    if(imgPath === ""){
        imgPath = "/images/department/placeholder.webp";
        imgAlt = "placeholder image";
    }


</script>


    <div class="parent">

        <a href={pagePath}>

            <img src={imgPath} alt={imgAlt} />

            <section class="text-content">

                <h4 class="libre-baskerville-regular">
                    {departmentName}
                </h4>

                <p class="inter-200">
                    {desc}
                </p>

            </section>

        </a>
         
    </div>

<style>

    a {
        text-decoration: none;  
        color: black;

        transition: 200ms ease-in-out;
    }

    
    a:hover{

        transform: translate(10px, -10px);

    }
    
    img{
        border-radius: 10px 10px 0 0;
        width: 100%;
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

        min-width: 250px;
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
            width: 70%;
        }

    }

</style>
