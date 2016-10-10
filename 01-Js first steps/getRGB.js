// Writes a function that convert a hexadecimal color, "blue" for example "#0000FF" in its RGB representation rgb(0,0,255)". Give the function the name getRGB() and test it with this code

// getRGB ('#00FF00'); // rgb(0,255,0)

function getRGB( hexColor ) {

	var redHex = hexColor[1] + hexColor[2];
	var greenHex = hexColor[3] + hexColor[4];
	var blueHex = hexColor[5] + hexColor[6];

	var red = parseInt(redHex,16);
	var green = parseInt(greenHex,16);
	var blue = parseInt(blueHex,16);

	return "RGB(" + red + "," + green + "," + blue + ")"

}