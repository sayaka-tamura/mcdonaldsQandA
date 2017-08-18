            //declare variables so they can be referred to throughout script
            var myImage;
            var next;
            var previous;
            var whichImage = 0;
            var imageArray = ["image_1.jpg", "image_2.jpg", "image_3.jpg", "image_4.jpg", "image_5.jpg" ];

            function nextImage(){
                //use conditional to test what whichImage evaluates to
                if(whichImage < imageArray.length-1){
                    //increment it
                    whichImage++;
                } else{
                    //set it bac to 0
                    whichImage = 0;
                }
                //console.log(whichImage);

                //set source to concatenated path with whichImage in it
                myImage.src = "img/" + imageArray[whichImage];
                //console.log(myImage.src);
            }

            function previousImage(){
                if(whichImage > 0){
                    whichImage--;
                } else {
                    whichImage = 4;
                }
                myImage.src = "img/" + imageArray[whichImage];
                //console.log(whichImage);
            }

            function slideShow(){
                //put values into the variables
                myImage = document.getElementById("imageHolder");
                next = document.getElementById("next");
                previous = document.getElementById("previous");
                //assign the onclick property of the next and previous buttons to a function
                next.onclick = nextImage;
                previous.onclick = previousImage;

                //console.log();
            }

            //set init funion to be invoked when window is loaded.
            window.onload = slide;

            function slide (){
                //console.log("here");
            slideShow();
            }
             //console.log(init);
