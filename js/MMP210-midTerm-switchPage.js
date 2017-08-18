
                //alert("HI");
                //pull out the button element
                var button = document.getElementById("myButton");
                //assign function doStuff to handle onclick
                button.onclick = radioButton;


            //function assigned to handle onclick when button is clicked
            function radioButton(){

                for(var i = 0; i < document.foodform.food.length; i++){
                    //checks to see if radio button has been checked
                    console.log(document.foodform.food[i]);
                    if(document.foodform.food[i].checked){
                        //set value of variable to the checked value
                        var radioVal = document.foodform.food[i].value;
                    }
                }
                 //console.log(radioVal);
                 //set the href to the value of the radio button that has been clicked
                 document.location.href = radioVal;
            }

            //set init function to be invoked when window is loaded.



             //console.log(init);