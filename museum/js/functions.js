function mapStuff(exhibit){
	
	// //Changes the size of the div by modifying the bootstrap column sizes
	// document.getElementById("map-container").classList.remove("col-xs-12");
	// document.getElementById("map-container").classList.add("col-xs-12");
	//Sets the exhibit description container to visible
	document.getElementById("map-exhibit").style.display = "inline";
	
	var exhibitName;
	var exhibitText;

	var input = exhibit.toLowerCase();
	
	//Sets the exhibit name and 
	switch(input){	
		case "dna":
			window.location.hash = input;
			exhibitName = "Brisbane DNA";
			exhibitText = "Discover the thoughts, opinions and life stories of 100 Brisbane residents.";
			break;
			
		case "place":
			window.location.hash = input;
			exhibitName = "Place"
			exhibitText = "Explore the dynamic relationship between people and place, and what connects us to the city.";
			break;
			
		case "story":
			window.location.hash = input;
			exhibitName = "A Brisbane Story"
			exhibitText = "A short film exploring Brisbane’s history, written and presented by actor and author William McInnes.";
			break;
			
		case "birth":
			window.location.hash = input;
			exhibitName = "Birth of a City";
			exhibitText = "1825 to 1839 Brisbane was a prison for convicts before being opened to free settlers in 1842.";
			break;
			
		case "meanjin":
			window.location.hash = input;
			exhibitName = "Meanjin to Brisbane"
			exhibitText = "As Brisbane developed, thousands of Aboriginal people were dispossessed of their land.";
			break;
			
		case "country":
			window.location.hash = input;
			exhibitName = "Country"
			exhibitText = "Members of the local Aboriginal community share their thoughts on what Country means to them.";
			break;
			
		case "tram":
			window.location.hash = input;
			exhibitName = "Tram Days";
			exhibitText = "Brisbane’s tramway network serviced the city for nearly 80 years, playing a significant role in day-to-day life.";
			break;
			
		case "flood":
			window.location.hash = input;
			exhibitName = "Brisbane River Flood"
			exhibitText = "Brisbane has experienced several major flood events, significantly impacting the city.";
			break;
			
		case "radio":
			window.location.hash = input;
			exhibitName = "ABC Radio Booth"
			exhibitText = "Come and add your views to ours in the 100% Brisbane ABC Radio Brisbane Booth then tune in to ABC Radio Brisbane for a chance to hear your story on air.";
			break;
			
		case "dayinthelife":
			window.location.hash = input;
			exhibitName = "A Day in the Life of Brisbane";
			exhibitText = "Discover fun facts about life in Brisbane.";
			break;
			
		case "scents":
			window.location.hash = input;
			exhibitName = "Scents of the City"
			exhibitText = "Experience some of the evocative scents of Brisbane.";
			break;

		case undefined:
			window.location.hash = "";
			exhibitName = "Welcome to the 100% Brisbane Exhibition";
			exhibitText = "Select a part of the exhibit on the map below to find out more about it";
			break;
		default:
			window.location.hash = "";
			exhibitName = "Welcome to the 100% Brisbane Exhibition";
			exhibitText = "Select a part of the exhibit on the map below to find out more about it";
	}
	
	//Replaces the content of the exhibit section
	document.getElementById("exhibit-name").innerHTML = exhibitName;
	document.getElementById("exhibit-text").innerHTML = exhibitText;	
}