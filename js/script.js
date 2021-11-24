function beer(){
	
	var bottles = 99;
	
	//For loop from 99 to 1
	for(var i=99;i>=0;i--){
		if(i>1){
		document.getElementById("songbox").innerHTML+="<br />"+i+" bottles of beer on the wall, "+i+" bottles of beer.";
		document.getElementById("songbox").innerHTML+="<br />Take one down and pass it around, "+(i-1)+" bottles of beer on the wall.";
		document.getElementById("songbox").innerHTML+="<br />";
		}
		
		else if(i==1){
		document.getElementById("songbox").innerHTML+="<br />"+i+" bottles of beer on the wall, "+i+" bottles of beer.";
		document.getElementById("songbox").innerHTML+="<br />Take one down and pass it around, no more bottles of beer on the wall."
		document.getElementById("songbox").innerHTML+="<br />";
		}
		
		else{
		document.getElementById("songbox").innerHTML+="<br />No more bottles of beer on the wall, no more bottles of beer.";
		document.getElementById("songbox").innerHTML+="<br />Go to the store and buy some more, "+bottles+" bottles of beer on the wall.";
		document.getElementById("songbox").innerHTML+="<br />";
		}
	}
	
	
	showButton();
}



function showButton(){
	var el = document.getElementById("buttonTab");
	el.classList.remove("hiddenStyle");
}







