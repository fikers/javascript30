function reverseText(text) {
	var reversedText = '';
	console.log(text);
	var lastLetter = (text.length) - 1; 
	for (i=lastLetter; i>=0 ; i--) {
		var temp = text[i];
		console.log(temp);
		reversedText = reversedText + temp;
	} 
	reversedText = reversedText[0].toUpperCase() + reversedText.slice(1).toLowerCase()
	console.log(reversedText)
	document.querySelector('span').innerHTML = `${reversedText}`;
	document.querySelector('.loader').remove();
}


document.addEventListener('DOMContentLoaded', function(){

	document.addEventListener('onkeydown', function(){
		if (e.keydown == 13) {
			reverseText(TextArea.value);
		}
	})

})