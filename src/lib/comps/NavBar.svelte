<script lang="ts">

    import {afterNavigate} from "$app/navigation";
    import { onMount } from "svelte";

    let isMobile: boolean = $state(false);


    onMount(() => {

        const mediaQuery = window.matchMedia('(width < 900px)');
        isMobile = mediaQuery.matches;

        // check if window resized + if it is greater than 900 px and if ul is out of view
        window.addEventListener("resize", () => {

            isMobile = mediaQuery.matches

            if(window.innerWidth > 899 && !isMobile){

                const ul:HTMLUListElement = document.getElementsByTagName("ul")[0];

                if(ul.style.right === "-1000px"){
                    ul.style.right = "0px";
                }


            }

        });          

    });

    let routeText: string[] = ["Home", "Departments", "Other Services", "About Us", "Contact Us"]
    let routeLink: string[] = ["", "departments", "other-services", "about-us", "contact"]

    function slideMenu(): void{
        const ul:HTMLUListElement = document.getElementsByTagName("ul")[0];
        ul.style = "right: 0px;"

        const body: HTMLElement = document.body;
        const scrollY = window.scrollY;

        body.style.overflow = "hidden";
        body.style.height = "100%";

        console.log("body scrolling disabled");
    }

    function closeMenu(): void{

        const ul:HTMLUListElement = document.getElementsByTagName("ul")[0];
        ul.style.right = "-1000px";

        document.body.style.overflow = "scroll";
        window.scrollTo(0, scrollY);

        console.log("body scroll enabled");
    }

    afterNavigate(() =>{

        if (isMobile){
            closeMenu();
        }

    });


</script>

<nav>
    <img src="/images/logo.png" alt="logo of bmc">

    <div id="list-container">
        <ul class="inter-500">
            
            <button id="close-menu" onclick={closeMenu}>
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
    

    <button id="open-menu" onclick={slideMenu}>
        <span class="material-symbols-outlined">
            menu
        </span>
</button>

</nav>

<style>
    nav{
        width: 100vw;
        padding: 5px 20px;

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
        position: relative;
        justify-content: space-between;
        align-items: center;
        overflow: scroll;

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

    button{
        color: black;
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

            position: absolute;
            width: 100vw;
            height: 100vh;
            flex-direction: column;
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