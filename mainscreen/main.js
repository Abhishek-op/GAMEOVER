document.addEventListener("DOMContentLoaded", function() {
	var pointer = document.getElementById("pointer"),
	pointerBox = pointer.getBoundingClientRect(),
	centerPoint = window.getComputedStyle(pointer).transformOrigin,
	centers = centerPoint.split(" ");

	function rotatePointer(e) {
		var pointerEvent = e;
       	if (e.targetTouches && e.targetTouches[0]) {
          		e.preventDefault(); 
          		pointerEvent = e.targetTouches[0];
          		mouseX = pointerEvent.pageX;
          		mouseY = pointerEvent.pageY;
    		} else {
          		mouseX = e.clientX,
          		mouseY = e.clientY;
    		}

 var centerY = pointerBox.top + parseInt(centers[1]) - window.pageYOffset,
 centerX = pointerBox.left + parseInt(centers[0]) - window.pageXOffset,
 radians = Math.atan2(mouseX - centerX, mouseY - centerY),
 degrees = (radians * (180 / Math.PI) * -1) + 180; 
 pointer.style.transform = 'rotate('+degrees+'deg)';
}

window.addEventListener('mousemove', rotatePointer);
window.addEventListener('touchmove', rotatePointer);
window.addEventListener('touchstart', rotatePointer);
})


var a = document.getElementById("font").innerHTML
if (a == "SCORE:6") {
    document.getElementById("font").innerHTML = "You won"
} else {
  
    document.getElementById("font").innerHTML = "Game over"
}