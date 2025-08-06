<script lang="ts">
    
    let {imgPath, imgAlt, socialLink, name} = $props();

</script>

    <a href={socialLink} aria-label="got to respective doctor's ({name}) preferred social page">
        <div id="parent-container">
            <div id="image-container">
                <img src={imgPath} alt={imgAlt}>
            </div>

            <p class="inter-300">{name}</p>

        </div>
    </a>

<style>

    a{
        text-decoration: none;
        color: black;

        transition: ease-in 200ms;
    }

    a:hover{
        transform: scale(1.1);
    }

    #parent-container{
        display: flex;
        flex-direction: column;
        align-items: center;

        max-width: 120px;
    }

    #image-container{
        border-radius: 50%;
    }

    img{
        width: 100%;
        border-radius: 50%;
    }

    p{
        font-size: 1.2rem;
    }
    
</style>