// import functions needed to get data
import { 
        getAllBasicCountriesDetails,
        getCountriesByRegion} from "../src/services/apiServices.js"

import { singleCountryDetails } from "./utils/singleCountry.js"
import { createCountryCardElements } from "./utils/createCountry.js"


//define variables
let countriesList = document.getElementById('list')
let mainContainer = document.getElementById('mainContainer')
let searching = document.getElementById('searching')
let toggleDarkMode = document.getElementById('toggleDarkMode')
let regions = document.getElementById('regions')
let html = document.querySelector('html')



//define functions

const countryCards = async () => {
    //get all countries with basic details
    let countries = await getAllBasicCountriesDetails()

    //creating country cards and passing in an array of countries
    return createCountryCardElements(countries)
}


//call eventlisteners

//inital event listener that loads all the countries and their details 
window.addEventListener('load', countryCards)


//filter countries by the region it is in
regions.addEventListener('change', async function(e){
    //selecting the option within the select element
    const regionOptions = regions.selectedOptions

    //setting that region 
    const selectedRegion = regionOptions[0].value
    
    //clearing the inner HTML so it will load new countries based on the region and not appended it to the end of the countries already loaded
    countriesList.innerHTML =''

    //setting conditional 
    if (selectedRegion == 'All Regions'){

        //return all countries
         countryCards()
        
    } else{
        //getting countries based on the region
        const selectRegionCountries = await getCountriesByRegion(selectedRegion)

        //creating the country cards again but only with countries in the select region 
        createCountryCardElements(selectRegionCountries)
    }
})


//input search event listener to filter countries based on letter ing in 

searching.addEventListener('input', async function (e){
    // getting all countries to map over
    let countrycardsType = await getAllBasicCountriesDetails()

    // the letters we are searching for 
    let searchTerm = e.target.value.toLowerCase()
    
    //setting a variable to stored the return filtered countries
    let searchedCountries = countrycardsType.filter((country) => {
        
        //returning the country if the countries common name includes the search term
         return country.name.common.toLowerCase().includes(searchTerm);

      
    });
    //updating the ui so it clears the div before adding the countries that were found
    countriesList.innerHTML =''

    //create cards of the returned countries
    createCountryCardElements(searchedCountries)
})



//toggle webpage from light to dark mode
toggleDarkMode.addEventListener('click', function (e){

  if (html.getAttribute('data-bs-theme') === 'light') {
        html.setAttribute('data-bs-theme', 'dark');
    } else {
        html.setAttribute('data-bs-theme', 'light');
    }

})

list.addEventListener('click',(e)=>{
 
    
    let countryName = e.target.parentElement.childNodes[1].textContent.toLowerCase() 
    console.log(countryName)
    countriesList.innerHTML =''
    mainContainer.innerHTML = ''
    singleCountryDetails(countryName)

} )

