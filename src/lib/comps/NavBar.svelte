<script lang="ts">
    let routeText: string[] = ["Home", "Departments", "Other Services", "About", "Contact Us"]
    let routeLink: string[] = ["", "departments", "other-services", "about", "contact-us"]

</script>

<nav>
    <img src="/images/logo.png" alt="logo of bmc">

    <ul class="inter-500">
        
        {#each routeText as route, index}
            <li>
                <a href="/{routeLink[index]}">{route}</a>
            </li>
        {/each}

    </ul>

</nav>

<style>

    nav{
        width: 100%;
        padding: 10px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        position: fixed;
        top: 0;
        background-color: white;
    }

    img{
        width: 10rem;
        height: auto;

        position: absolute;
        left: 0;
        top: 0;
    }

    ul{
        display: flex;
        justify-content: space-between;
        align-items: center;

        list-style-type: none;

        margin-left: auto;
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

    a:hover{
        color: var(--accent-red);
    }

</style>