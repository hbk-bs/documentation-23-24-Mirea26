
function colorTheme() {
 	var bereich1 = document.getElementById("bereich1");
	var bereich2 = document.getElementById("bereich2");
	var bereich3 = document.getElementById("bereich3");

	var buttonToHide2 = document.getElementById("buttonToHide2");
	var buttonToHide3 = document.getElementById("buttonToHide3");

	var header = document.getElementById("header");

 	if (bereich1.style.display === "none") {
		bereich1.style.display = "block";
		bereich2.style.display = "none";
		bereich3.style.display = "none";
		buttonToHide2.style.display = "none";
		buttonToHide3.style.display = "none";
		header.style.display = "none";
 	} else {
		bereich1.style.display = "none";
		buttonToHide2.style.display = "block";
		buttonToHide3.style.display = "block";
		header.style.display = "block";
 	}
}


function smallMutiples() {
	var bereich1 = document.getElementById("bereich1");
	var bereich2 = document.getElementById("bereich2");
	var bereich3 = document.getElementById("bereich3");

	var buttonToHide1 = document.getElementById("buttonToHide1");
	var buttonToHide3 = document.getElementById("buttonToHide3");

	var header = document.getElementById("header");

	if (bereich2.style.display === "none") {
	   bereich2.style.display = "block";
	   bereich1.style.display = "none";
	   bereich3.style.display = "none";
	   buttonToHide1.style.display = "none";
	   buttonToHide3.style.display = "none";
	   header.style.display = "none";
	} else {
	   bereich2.style.display = "none";
	   buttonToHide1.style.display = "block";
	   buttonToHide3.style.display = "block";
	   header.style.display = "block";
	}
}

function sleepingUncle() {
	var bereich1 = document.getElementById("bereich1");
	var bereich2 = document.getElementById("bereich2");
	var bereich3 = document.getElementById("bereich3");

	var buttonToHide1 = document.getElementById("buttonToHide1");
	var buttonToHide2 = document.getElementById("buttonToHide2");

	var header = document.getElementById("header");

	if (bereich3.style.display === "none") {
		bereich3.style.display = "block";
		bereich1.style.display = "none";
		bereich2.style.display = "none";
		buttonToHide1.style.display = "none";
		buttonToHide2.style.display = "none";
		header.style.display = "none";
	} else {
		bereich3.style.display = "none";
		buttonToHide1.style.display = "block";
		buttonToHide2.style.display = "block";
		header.style.display = "block";
	}
}



	var acc = document.getElementsByClassName("accordion");
    var i;
	
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }


	function vergroessern() {
		var bild = document.getElementById("verkleinertesBild");
		if (bild.style.width === "20%") {
			bild.style.width = "70%";
		} else {
			bild.style.width = "20%";
		}
	}
