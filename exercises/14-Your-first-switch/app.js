function getColor(selection)
{
	switch(selection){
        // Add more options here
        case "red": 
            console.log("false");
            break;
        case "green":
            console.log("true");
            break;
        case "blue":
            console.log("true");
            break;
	    default:
	    	return false;  //returns false because the user picked an unavailable color
	    break;               
	}
}

var colorname = prompt('What color do you want?').trim();
var isAvailable = getColor(colorname);

if(isAvailable)
	console.log('Good news! That color is available');
else 
	console.log('We are sorry, that color is not available');
