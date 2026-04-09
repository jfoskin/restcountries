// import functions needed to get data
import { getAllCountries,
         getAllBasicCountriesDetails, 
         getAllCountriesFlags } from "../src/services/apiServices.js"


//define variables
let countriesList = document.getElementById('list')

// let alldetails = await getAllCountries()
// console.log(alldetails)

//define functions

let countryCards = async () =>{
    let countries = await getAllBasicCountriesDetails()
    console.log(countries)
    let cards  = countries.forEach((country) => {
        

        //creating elements for the country data to be displayed in 
        // const li = document.createElement('li')
        const countryBasics = document.createElement('div')
        const nameTag = document.createElement('h5')
        const regionTag = document.createElement('p')
        const capitalTag = document.createElement('p')
        const populationTag = document.createElement('p')
        const imgTag = document.createElement('img')
        
        //assign class atribute
        countryBasics.classList.add('countryClass')


        //assigning data to each element
        imgTag.src = country.flags.svg
        
        nameTag.innerText = country.name.common
        regionTag.innerText = country.region
        capitalTag.innerText = country.capital
        
        // console.log(country)
        countryBasics.appendChild(imgTag)
        countryBasics.appendChild(nameTag)        
        countryBasics.appendChild(regionTag)        
        countryBasics.appendChild(capitalTag)        

        // li.appendChild(countryBasics)
        
        countriesList.appendChild(countryBasics)
    });
    return cards
}



//call functions 
countryCards()


// window.addEventListener('load', countryCards)
