<script lang="ts">
    let routeText: string[] = ["Home", "Departments", "Other Services", "About Us", "Contact Us"]
    let routeLink: string[] = ["", "departments", "other-services", "about-us", "contact"]

    function slideMenu(): void{
        const ul:HTMLUListElement = document.getElementsByTagName("ul")[0];
        ul.style = "right: 0px;"
        console.log("done")
    }

    function closeMenu(): void{
        const ul:HTMLUListElement = document.getElementsByTagName("ul")[0];
        ul.style.position = "absolute";
        ul.style.right = "-1000px";
        console.log("done")
    }

</script>

<nav>
    <img src="/images/logo.png" alt="logo of bmc">

    <div id="list-container">
        <ul class="inter-500">
            
            <button id="close-menu" on:click={closeMenu}>
                <span class="material-symbols-outlined">
                    close
                </span>
            </button>

            {#each routeText as route, index}
                <li>
                    <a href="/{routeLink[index]}">{route}</a>
                </li>
            {/each}

        </ul>
    </div>
    

    <button id="open-menu" on:click={slideMenu}>
        <span class="material-symbols-outlined">
            menu
        </span>
</button>

</nav>

<style>

    nav{
        width: 100vw;
        padding: 20px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        position: fixed;
        top: 0;
        background-color: white;

        z-index: 100;
    }

    img{
        width: 8rem;

        
    }

    ul{
        display: flex;
        justify-content: space-between;
        align-items: center;

        list-style-type: none;

        margin-left: auto;

        transition: ease-in 500ms;
    }

    li{
        margin: 10px;
    }

    a{
        color: var(--main-black);
        text-decoration: none;
        cursor: pointer;  
        
        font-size: 1.3rem;

        transition: all ease-in 200ms;
    }

    button:hover{
        cursor:pointer;
    }

    span{
        font-size: 3.2rem;
    }

    #open-menu{
        background-color: transparent;
        display: none;
        border: none;
    }

    #close-menu{
        background-color: transparent;
        border: none;
        position: absolute;
        top: 0;
        right: 0;
        display: none;

        margin: 20px;
    }

    a:hover{
        color: var(--accent-red);
    }

    @media (width < 900px){
        ul{

            position: fixed;
            width: 100%;
            height: 100vh;
            flex-direction: column;
            position:absolute;
            top: 10px;
            right: -1000px;

            padding: 50px;

            background-color: rgba(255, 255, 255);
            
        }

        a{
            font-size: 1.6rem;
        }

        #open-menu, #close-menu{
            display:inline-block;
        }


    }

</style>