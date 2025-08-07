<script>
    let bullshit = false;
</script>

<div id="parent-container">

    <h2 class="inter-700">BMC</h2>

    <div id="about-us-summary">
        <h6 class="inter-300">About Us</h6>
        <p class="inter-300">Working since 1988 has enabled us to gather a level of expertise in the medical arts that you will not find anywhere else. In addition we have been able to build ourselves up to provide a wide range of services to cater to your health related problems. </p>
    </div>

    <div id="pages" class="inter-300">
        <h6 class="inter-300">Pages</h6>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/departments">Departments</a></li>
            <li><a href="/other-services">Other Services</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
        </ul>
    </div>

    <div id="contact-details" class="inter-300">
        <h6 class="inter-300">Contact Details</h6>

        <div class="contact-info location">
            <span class="material-symbols-outlined">
                pin_drop
            </span>
            <p class="inter-300">Shareef Market Stop, Main Walton Rd, opposite Toyota Cantt Motors, Madina Colony, Lahore, Punjab 54600</p>
        </div>

        <div class="contact-info">
            <span class="material-symbols-outlined">
                smartphone
            </span>

            <p>0311 2233262</p>
            
        </div>

        <hr />

        <div class="timing inter-300">
            <h6>Timings: </h6>
            <div class="inter-300">
                <p>Monday-Friday</p>
                <p>11:00 am - 1:00 pm</p>
                <p>7:30 pm - 9:30 pm</p>
            </div>
        </div>

    </div>
    <hr id="seperator"/>

    <div id="socials">
        <p class="inter-400">Copyright Bashir Medical Complex 2030 </p>
        <ul>
            <li>
                <a href="https://www.facebook.com/search/top?q=bmc%20bashir%20medical%20center"> 
                    <img src="/images/socials/fb.svg" alt="logo of facebook" id="fb"/> 
            </a>
            </li>
            
            <li><a href="https://www.instagram.com/bashirmedicalcenter/"><img src="/images/socials/insta.svg" alt="logo of youtube" id="insta"></a></li>
        </ul>
    </div>

</div>


<style>

    /* --- Ids --- */ 
    #parent-container{
        color: white;

        display: grid;
        grid-template-areas: 
        "one one one"
        "two three four"
        "five five five"
        "six six six";

        background-color: black;

        padding: 10px;
    }

    #about-us-summary{
        grid-area: two;
        width: fit-content;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #pages{
        grid-area: three;

        display: flex;
        flex-direction: column;
        align-items: center;

        margin: 0 100px 0 60px;
    }

    #contact-details{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #seperator{
        grid-area: five;
    }

    #socials{
        display: flex;
        justify-content: space-between;
        align-items: center;    
        
        width: 100%;

        margin-top: 20px;

        grid-area: six;
    }

    #insta{
        width: 30px;
    }
    #fb{
        width:22px;
    }

    #socials ul{
        display: flex;
        flex-direction: row;
        align-items: center;
        
    }

    /* --- Classes --- */
    .contact-info{

        width: 100%;

        display: flex;
        align-items: center;
        gap: 10px ;

        margin-bottom: 20px;

    }
    .timing{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: left;
        gap: 40px;

        margin-top: 20px;
    }

    .timing div p{
        width: fit-content;
        margin-bottom: 10px;
    }

    /* --- Tags ---*/
    h2{
        color: white;
        grid-area: one;

        margin-bottom: 40px;
    }
    
    ul{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    li{
        list-style-type: none;
        margin: 5px;
        text-align: center;
    }

    a{
        color: white;
        text-decoration: none;
        font-size: 1.2rem;

    }

    a:hover{
        text-decoration:underline;
    }

    p {
        width: 80%;
        margin: 0;
    }

    h6{
        margin: 20px;
    }

    hr{
        width: 100%;
    }

    @media(width<800px){
        
        #parent-container{
            display: flex;
            flex-direction: column;
            align-items: center;

            gap: 20px;
        }

        #pages{
            margin: 0;
        }

    }

</style>