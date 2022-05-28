

function ComputeBMI()
{
   /**
    * @type HTMLInputElement
    */
    let weight = document.getElementById("weightID").value;

    /**
    * @type HTMLInputElement
    */
    var height = document.getElementById("heightID").value;

    var BMI = weight / (height * height);

    var output = document.getElementById("BMIvalue");

    output.innerText = BMI.toFixed(3);
    
    document.getElementById("weightID").value = "";
    document.getElementById("heightID").value = "";
    
    DetermineHealthiness(BMI);
}

function DetermineHealthiness(BMI)
{
    const underWeightThresHold = 18.5;
    const overWeightThresHold = 25.0;;


    var text = document.getElementById("BMIOutCome");

    if (BMI < underWeightThresHold)
    { 
        text.innerHTML ='<b>Underweight</b>';
        text.style.color = "red";
    }

    else if (BMI > underWeightThresHold && BMI < overWeightThresHold)
    {
        text.innerHTML ='<b>Healthy</b>';
        text.style.color = "green";
    }

    else if (BMI > overWeightThresHold)
    {
        text.innerHTML ='<b>Overweight</b>';
        text.style.color = "red";
    }
}
