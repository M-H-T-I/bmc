<script lang="ts">
    import GeneralBtn from "../GeneralBtn.svelte";

</script>

<div id="parentDiv">
    
    <div id="departments-card">

        <img src="/images/services-home.png" alt="doctor talking to his patient" />

        <div class="text-content">

            <div class="header">
    
                <h3 class="libre-baskerville-regular">Departments</h3>

            </div>

            <p class="inter-300">
                Offering world class healthcare to people. The matter of keeping our patients healthy is a mission the team at BMC does its utmost to fulfill each an everyday. Donec libero mauris, tincidunt ut bibendum quis, dignissim ac nunc. Donec dapibus sapien et tortor bibendum, a ullamcorper urna pellentesque. Phasellus lobortis id quam quis tempor. Integer elementum hendrerit lacus, vitae vestibulum purus laoreet at. Aliquam non felis in velit lobortis tincidunt ut nec nulla. Donec non condimentum ligula.
            </p>
    
            <GeneralBtn linkText= "Departments" linkPath = "/departments" />
    
        </div>


    </div>

    <div id="other-services-card">

        <img src="/images/other-services.png" alt="doctor walking through a laboratory."/>
    
        <div class="text-content">

            <div class="header">
    
                <h3 class="libre-baskerville-regular">Other Services</h3>
        
            </div>

            <p class="inter-300">
                Offering world class healthcare to people. The matter of keeping our patients healthy is a mission the team at BMC does its utmost to fulfill each an everyday. Donec libero mauris, tincidunt ut bibendum quis, dignissim ac nunc. Donec dapibus sapien et tortor bibendum, a ullamcorper urna pellentesque. 
                Phasellus lobortis id quam quis tempor. Integer elementum hendrerit lacus, vitae vestibulum purus laoreet at. Aliquam non felis in velit lobortis tincidunt ut nec nulla. Donec non condimentum ligula. Ambaa and ausajcsa hdoaj apdaoiuadc daj asijd uwas pI awa s asawhogn out yot seae odhsan boillo y.
                asjajwisj aisaj dpjoid cofseand brihgn shugea.
            </p>
    
            <GeneralBtn linkText= "Other Services" linkPath = "/other-services" />
    
        </div>

    </div>

</div>


<style>

    #parentDiv{
        display: flex;
        justify-content: space-around;

        flex-direction: column;

        width: 100%;
        

        padding: 30px;
    }

    #departments-card, #other-services-card{
        display: flex;
        gap: 30px;

        margin: 40px 0 0 0 ;
    }   

    #other-services-card{
        margin: 100px 0 0 0;
    }

    #departments-card img{
        float: right;
    }

    img{
        max-width: 600px;
        border-radius: 5px;
    }


    h3{
        width: 100%;
        text-align: center;
        margin-bottom: 30px;
    }

    p{
        width: 60%;
        text-align: center;
        margin-bottom: 20px;
    }

    .text-content{
        /* margin: 0 40px 0 40px; */

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 10px;
    }

    @media(width < 1100px){

        img{
            max-width: 300px;
        }

    }

    @media(width < 800px){
        
        #departments-card, #other-services-card{
            
            flex-direction: column;
            align-items: center;

        }
        

    }

</style>