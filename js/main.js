;(function() {
	
	document.addEventListener('keydown', divToText);

})();

var message = document.createElement('p');
var textArea = document.getElementById("textarea");
var div = document.getElementById("text-div");
div.appendChild(message);

function divToText(e) {

	if ((e.keyCode == 69) && e.ctrlKey) {
		e.preventDefault();
		
		textArea.value = message.innerHTML;
		textArea.style = "display: inline-block;";
		message.style = "display: none";

	} else if ((e.keyCode == 83) && e.ctrlKey) {
		e.preventDefault();
		
		message.innerHTML = textArea.value;
		textArea.style = "display: none;";
		message.style = "display: inline";

	} else if (e.keyCode == 27){
		
		textArea.style = "display: none;";
		message.style = "display: inline";

	}
}