// import functions needed to get data
import { 
        getAllBasicCountriesDetails,
        getCountriesByRegion} from "../src/services/apiServices.js"

import { singleCountryDetails } from "./utils/singleCountry.js"
import { createCountryCardElements } from "./utils/createCountry.js"


//define variables
let countriesList = document.getElementById('list')
let mainContainer = document.getElementById('mainContainer')
let searchInput = document.getElementById('searchInput')
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

//filter countries by the region it is in
regions.addEventListener('change', async function(e){
    //selecting the option within the select element
    const regionOptions = regions.selectedOptions
    
    const selectedRegion = regionOptions[0].value
    console.log(`this is region`,regionOptions)
    console.log(selectedRegion)
    
    countriesList.innerHTML =''
    if (selectedRegion == 'All Regions'){
         countryCards()
        
    } else{
        const selectRegionCountries = await getCountriesByRegion(selectedRegion)
        createCountryCardElements(selectRegionCountries)
        // console.log(e.target)
    }
})


searching.addEventListener('input', async function (e){
let countrycardsType = await getAllBasicCountriesDetails()

    let searchTerm = e.target.value.toLowerCase()
    
    let searchedCountries = countrycardsType.filter((country) => {
        
         return country.name.common.toLowerCase().includes(searchTerm);

      
    });
    countriesList.innerHTML =''
    createCountryCardElements(searchedCountries)
})


window.addEventListener('load', countryCards)

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

