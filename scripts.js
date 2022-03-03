
(function(window, document, undefined){

    // code that should be taken care of right away
    
    window.onload = init;
    
      function init(){
        // the code to be called when the dom has loaded
        // #document has its nodes


        let item1 = document.getElementById("box-1");
        let item2 = document.getElementById("box-2");
        let item3 = document.getElementById("box-3");

        item1.onmouseenter = function() {
            this.classList.add("process__active");            
        }
        item1.onmouseleave = function() {
            this.classList.remove("process__active");
        }
        item2.onmouseenter = function() {
            this.classList.add("process__active");            
        }
        item2.onmouseleave = function() {
            this.classList.remove("process__active");
        }
        item3.onmouseenter = function() {
            this.classList.add("process__active");            
        }
        item3.onmouseleave = function() {
            this.classList.remove("process__active");
        }


        let hello_hide_img = document.getElementById("hello-hide");

        hello_hide_img.onmouseenter = function() {
            //this.setAttribute("style", "transform: rotate(1deg)");
            this.setAttribute("style", "transform: translateX(-3.5rem)");
        }

        hello_hide_img.onmouseout = function() {
            //this.setAttribute("style", "transform: rotate(-1deg)");
            this.setAttribute("style", "transform: translateX(0.05rem)");
        }

        let offers = document.getElementsByClassName("offers_card");

        Object.values(offers).forEach(offer => {
            offer.onmouseenter = function() {
                this.setAttribute("style", "transform: translateX(3.5rem)");
            }
            offer.onmouseleave = function() {
                this.removeAttribute("style", "transform: translateX(3.5rem)");
            }
        });

        let responsive = document.getElementById("medium-circle");

        responsive.onmouseenter = function() {
            this.setAttribute("style", "background-color: #abd399");
            this.setAttribute("style", "border: 2px solid #79b75e");
        }

        responsive.onmouseleave = function() {
            this.removeAttribute("style", "background-color: #abd399");
            this.removeAttribute("style", "border: 2px solid #79b75e");
        }

        
      }
    
    })(window, document, undefined);