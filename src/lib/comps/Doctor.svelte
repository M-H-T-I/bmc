<script lang="ts">
    
    let {imgPath, imgAlt, socialLink, name} = $props();

</script>

    <a href={socialLink} aria-label="got to respective doctor's ({name}) preferred social page">
        <div id="parent-container">
            <div id="image-container">
                <img src={imgPath} alt={imgAlt}>
            </div>

            <p class="inter-400">{name}</p>

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

    }

    #image-container{
        border-radius: 50%;
    }

    img{
        border-radius: 50%;
        max-width: 110px;
        height: 100px;
    }

    p{
        font-size: 1.4rem;
    }
    
</style>