
//This will set the tool tip of the image dispayed in the banner of each web page.
function queue()
{		
		//Get Current Month
		var currDate=new Date();
        var currMonth = currDate.getMonth();
		
        // Month returned by getDate() is 0 to 11 so add 1
        currMonth = parseInt(currMonth) + 1;
		
 
        // Based on month assign Tool Tip
       
	   if (currMonth >= 1) {
				document.getElementById("courtesy").title = "Courtesy of Travel Manitoba"; // Month is January or greater
				
		}
        if (currMonth >= 3) {
				document.getElementById("courtesy").title = ""; // Month is March or greater
		}
        
		if (currMonth >= 6){

				document.getElementById("courtesy").title = "" // Month is June or greater
				
		}
       
	   if (currMonth >= 9) {
				document.getElementById("courtesy").title = "Courtesy of Travel Manitoba";   // Month is September or greater
		}
       
	   if (currMonth == 12) {
				document.getElementById("courtesy").title = "Courtesy of Travel Manitoba"; // Month is December
		}
				}