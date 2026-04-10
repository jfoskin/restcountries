// import functions needed to get data
import { getAllCountries,
         getAllBasicCountriesDetails,
        getCountriesByRegion} from "../src/services/apiServices.js"

import { singleCountryDetails } from "./utils/singleCountry.js"
import { createCountryCardElements } from "./utils/createCountry.js"


//define variables
let countriesList = document.getElementById('list')
let mainContainer = document.getElementById('mainContainer')
let searchInput = document.getElementById('searchInput')
let toggleDarkMode = document.getElementById('toggleDarkMode')
let regions = document.getElementById('regions')
let country = document.querySelector('.card > h4')

let html = document.querySelector('html')

// let alldetails = await getAllCountries()
// console.log(alldetails)

//define functions

let countryCards = async () => {
    let countries = await getAllBasicCountriesDetails()
    console.log(countries)
    // let cards  = countries.forEach((country) => {
        
        
    //     //creating elements for the country data to be displayed in 
    //     // const li = document.createElement('li')
    //     const countryBasics = document.createElement('div')
    //     const nameTag = document.createElement('h4')
    //     const regionTag = document.createElement('p')
    //     const capitalTag = document.createElement('p')
    //     const populationTag = document.createElement('p')
    //     const imgTag = document.createElement('img')
        
    //     //assign class atribute
    //     countryBasics.classList = 'countryClass'
    //     countryBasics.className = 'card'
    //     imgTag.classList = 'card-img-top'
        
        
    //     //assigning data to each element
    //     imgTag.src = country.flags.svg
        
    //     nameTag.innerText = country.name.common
    //     populationTag.innerText = country.population
    //     regionTag.innerText = country.region
    //     capitalTag.innerText = country.capital
        
    //     // console.log(country)
    //     countryBasics.appendChild(imgTag)
    //     countryBasics.appendChild(nameTag)        
    //     countryBasics.appendChild(populationTag)        
    //     countryBasics.appendChild(regionTag)        
    //     countryBasics.appendChild(capitalTag)        
        
    //     // li.appendChild(countryBasics)
        
    //     countriesList.appendChild(countryBasics)
    //     // mainContainer.appendChild(countriesList)
    // });
    console.log('hello')
    
    return createCountryCardElements(countries)
    

}



//call functions 










//call eventlisteners


regions.addEventListener('change', async function(e){
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
        console.log(e.target)
    }
})

// searchInput.addEventListener('change', async function (e){
//     console.log(e.target.value)
// })


window.addEventListener('load', countryCards)

toggleDarkMode.addEventListener('click', function (e){

  if (html.getAttribute('data-bs-theme') === 'light') {
        html.setAttribute('data-bs-theme', 'dark');
    } else {
        html.setAttribute('data-bs-theme', 'light');
    }

})

list.addEventListener('click',(e)=>{
    console.log(e)
    // console.log(e.target)
    
    let countryName = e.target.parentElement.childNodes[1].textContent.toLowerCase() 
    console.log(countryName)
    countriesList.innerHTML =''
    mainContainer.innerHTML = ''
    singleCountryDetails(countryName)

} )


