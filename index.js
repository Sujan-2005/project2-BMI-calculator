document.getElementById("bmiForm").addEventListener("submit",
function(e){

    e.preventDefault();       //stop refreshing the page after entering of data when we submit
    console.log("form submission prvented")
    const gender=document.getElementById('gender').value;
    const age=parseInt(document.getElementById("age").value);
    const heightFeet=parseInt(document.getElementById("feet").value);
    const heightinch=parseInt(document.getElementById("inches").value);
    const weight=parseFloat(document.getElementById("weight").value);

    if(gender && age && heightFeet && heightinch && weight){
        const heightInMeters=((heightFeet*12)+heightinch)*0.0254;
        const bmi=weight/(heightInMeters*heightInMeters);
        const resultElement=document.getElementById("result")

        let category="";
        if(bmi<18.5){
            category="Under Weight";
        }
        else if(bmi>=18.5 && bmi<=24.9){
            category="Normal Weight"
        }
        else if(bmi>=25 && bmi<29.9){
            category="Over Weight"
        }
        else{
            category="Obese"
        }

        let resultMessage='Your BMI: '+bmi.toFixed(2)+'<br>';
        resultMessage+='Category: '+category;
        resultElement.innerHTML = resultMessage;
    }

    });