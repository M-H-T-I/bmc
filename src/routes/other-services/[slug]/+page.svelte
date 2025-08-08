<script lang="ts">
    import Service from "$lib/comps/Service.svelte";
    import Doctor from "$lib/comps/Doctor.svelte";

    let {data} = $props()

    const {entry} = data;

</script>

<div id="parent-container">

    <header>

        <h1 class="inter-400">{entry.cardInfo.departmentName}</h1>

        <div id="img-grid">
            
            {#each entry.pageInfo.images as image}
                <img src={image.path} alt={image.alt} />
            {/each}

        </div>

        <h2 class="inter-400">General Information:</h2>

        <p class="inter-300" style="white-space: pre-line;">{entry.pageInfo.desc}</p>

    </header>

    <section id="services">

        <h4 class="inter-400">Services we provide:</h4>

        <div id="service-grid">
            {#each entry.pageInfo.serviceList as service}
                <Service name = {service} />
            {/each}
        </div>
      

    </section>

    <!-- <hr /> -->

    <section id="contact">

        <h2 class="inter-300">
            For any queries contact us: <span>+92 311 2233262</span>
        </h2>

        <hr id="separator"/>

        <p class="inter-300">Or Visit us</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217873.2748292922!2d74.13756511068868!3d31.434235270605214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905cf95969827%3A0x3c629a331caa648a!2sBMC%20-%20Bashir%20Medical%20Complex!5e0!3m2!1sen!2s!4v1738467843974!5m2!1sen!2s" width="60%" height="500px" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="map to physical address"></iframe>


    </section>

</div>

<style>

     #parent-container{
        padding: 20px;
    }
    header{
        margin-top: 50px;
        min-height: 50vh;

        display: flex;
        flex-direction: column;
        
        gap: 20px
    }

    h1{
        font-size: 4.2rem;
    }
    
    h2{
        font-size: 2.6rem;
    }

    h4{
        font-size: 1.8rem;
        width: fit-content;
    }
    p{
        width: 100%;
        font-size: 1.6rem;
    }

    #img-grid{
        display: flex;
        gap: 30px;
        justify-content: space-around;
        margin: 20px;
    }

    #img-grid img{
        width:40%;
        min-width: 300px;
        max-width: 500px;
    }
    
    #services{
        margin-top: 80px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #service-grid{
        display: flex;
        gap: 10px;
        justify-content: center;
        margin: 20px 0 150px 0;

        flex-wrap: wrap;
    }

    #contact{
        /* margin: 50px 0 0 0;  */
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #separator{
        width: 80px;
        color: var(--accent-red);
        margin: 20px 0 40px 0;
    }

    #contact p{
        font-size: 1.6rem;
        opacity: 0.6;
        width: fit-content;
        margin-bottom: 20px;
    }

    @media(width < 800px){
        #img-grid{
            flex-direction: column;
            align-items: center;
        }

        h1{
            text-align: center;
        }

        h2{
            font-size: 2.0rem;
        }

        h2 span{
            display: block;
        }
    }
</style>