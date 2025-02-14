<script lang="ts">
    import GeneralBtn from "../GeneralBtn.svelte";

</script>

<div id="parentDiv">
    
    <div id="departments-card">

        <div class="text-content">

            <div class="header">
    
                <h3 class="libre-baskerville-regular">Departments</h3>

            </div>

            <p class="inter-300">
                Offering world class healthcare to people. The matter of keeping our patients healthy is a mission the team at BMC does its utmost to fulfill each an everyday. Donec libero mauris, tincidunt ut bibendum quis, dignissim ac nunc. Donec dapibus sapien et tortor bibendum, a ullamcorper urna pellentesque. Phasellus lobortis id quam quis tempor. Integer elementum hendrerit lacus, vitae vestibulum purus laoreet at. Aliquam non felis in velit lobortis tincidunt ut nec nulla. Donec non condimentum ligula.
            </p>
    
            <GeneralBtn linkText= "Departments" linkPath = "/departments" />
    
        </div>

        <img src="/images/services-home.png" alt="doctor talking to his patient" />

    </div>

    <div id="other-services-card">

        <img src="/images/other-services.png" alt="doctor walking through a laboratory."/>
    
        <div class="text-content">

            <div class="header">
    
                <h3 class="libre-baskerville-regular">Other Services</h3>
        
            </div>

            <p class="inter-300">
                Offering world class healthcare to people. The matter of keeping our patients healthy is a mission the team at BMC does its utmost to fulfill each an everyday. Donec libero mauris, tincidunt ut bibendum quis, dignissim ac nunc. Donec dapibus sapien et tortor bibendum, a ullamcorper urna pellentesque. Phasellus lobortis id quam quis tempor. Integer elementum hendrerit lacus, vitae vestibulum purus laoreet at. Aliquam non felis in velit lobortis tincidunt ut nec nulla. Donec non condimentum ligula.
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

        width: 80%;
        

        padding-bottom: 100px;
    }

    #departments-card, #other-services-card{
        display: flex;

        margin: 40px 0 0 0 ;
    }   

    #other-services-card{
        margin: 100px 0 0 0;
    }

    img{
        min-width: 40%;
        border-radius: 5px;
    }


    h3{
        width: 100%;
        text-align: center;
    }

    p{
        width: 70%;
        text-align: center;
    }

    .text-content{
        margin: 0 40px 0 40px;

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

</style>