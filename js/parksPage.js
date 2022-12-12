//Select a state from this dropdown
function CreateDropDown(selectbox,text,value )
{
	var optn = document.createElement("OPTION");
	optn.text = text;
	optn.value = value;
	selectbox.options.add(optn);
}

function loadFilterByStateList(){
    const locationsArray = [
        "Alabama",
        "Alaska",
        "American Samoa",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "DC",
        "Florida",
        "Georgia",
        "Guam",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Puerto Rico",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virgin Islands",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming"
    ]
for (var i=0; i < locationsArray.length;++i){
    CreateDropDown(document.drop_list.stateDropDown, locationsArray[i], locationsArray[i]);
    }
}

//When this function is called, it will loop through the items in the parkTypes array
//and add each item as an option in the parkTypeDropDown dropdown list. 

function loadNationalParkDropDownlist() {
    for (var i=0; i < parkTypesArray.length;++i){
        CreateDropDown(document.drop_list.parkTypeDropDown, parkTypesArray[i], parkTypesArray[i]);
  }

}   



//Functions we are calling
loadFilterByStateList();
loadNationalParkDropDownlist();
filterByState();
filterByParkType();

// Card that displays Park Info
function parksTemplate(park) {
   return  `<div class="parks">
          <h2 class="location-name"> ${park.LocationName}</h2>
          <h3 class="park-address"> Address: ${park.Address}</h3>
         <h3 class="park-city"> ${park.City}, ${park.State} ${park.ZipCode}</h3> 
         <h6 class="park-lang"> ${park.Latitude}, ${park.Longitude}</h6>       
        </div>
        `};

//We want a function that Filters by Sates 

   function filterByState() {
    const selectedState = document.getElementById("stateDropDown").value;
    const filteredParks = nationalParksArray.filter(park => park.State === selectedState);
    document.getElementById("parks").innerHTML = filteredParks.map(parksTemplate);

   }

   // Declaring the function
   //We want a Function that will filter by park type
function filterByParkType() {
    const filteredByType = []; 
  
    const parkTypeFromDropdown = document.getElementById("parkTypeDropDown").value;

    // using for loop to go through parks array
    //all parks with same park type as selected will appear
    for (let i = 0; i < nationalParksArray.length; i++) {
       
        if (nationalParksArray[i].LocationName.includes(parkTypeFromDropdown) == true) {
            filteredByType.push(nationalParksArray[i]);
        }
    }
    document.getElementById("parks").innerHTML = filteredByType.map(parksTemplate);
}
