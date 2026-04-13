
let countriesList = document.getElementById('list')
let mainContainer = document.getElementById('mainContainer')






export const  singleCountryDetails = async(name) => {
    try {
        
       //fetching country by name 
        const response = await fetch(`https://restcountries.com/v3.1/name/${name}`)
        const aCountry = await response.json()


        //creating containers for div 
        const detailsDiv = document.createElement('div')
        const detailsFlag = document.createElement('div')
        const details = document.createElement('div')
        
        //set classes for elements
        detailsDiv.className = 'detailsDiv'
        detailsFlag.className = 'detailsFlag'
        details.className = 'detailsBox'
        
        


        //creating elements for country details with labels
        
        const imgDetails = document.createElement('img')
        const countryName = document.createElement('h3')
        const nativeNameDetailLabel = document.createElement('h6')
        const nativeNameDetail = document.createElement('p')
        const populationDetailLabel = document.createElement('h6')
        const populationDetails = document.createElement('p')
        const regionDetailLabel = document.createElement('h6')
        const regionDetails = document.createElement('p')
        const subRegionDetailsLabel = document.createElement('h6')
        const subRegionDetails = document.createElement('p')
        const capitalDetailsLabel = document.createElement('h6')
        const capitalDetails = document.createElement('p')
        const domainDetailsLabel = document.createElement('h6')
        const domainDetails = document.createElement('p')
        const currencyDetailsLabel = document.createElement('h6')
        const currencyDetails = document.createElement('p')
        const languageDetailsLabel = document.createElement('h6')
        const languageDetails = document.createElement('p')
        const borderCountryDetailsLabel = document.createElement('h6')
        const borderCountries= document.createElement('div')
        const borderCountryDetails = document.createElement('div')
        
        
        // Start assigning details 
        
        imgDetails.src = aCountry[0].flags.svg
        borderCountries.className = 'borderCountries'

        countryName.textContent = aCountry[0].name.common

        nativeNameDetailLabel.textContent = 'Native Name: '
        nativeNameDetail.textContent = aCountry[0].name.official

        populationDetailLabel.textContent = 'Population: '
        populationDetails.textContent = aCountry[0].population

        regionDetailLabel.textContent = 'Region: '
        regionDetails.textContent = aCountry[0].region
        
        subRegionDetailsLabel.textContent = 'Sub Region: '
        subRegionDetails.textContent = aCountry[0].subregion

        capitalDetailsLabel.textContent = 'Capital: '
        capitalDetails.textContent = aCountry[0].capital[0]
        
        domainDetailsLabel.textContent = 'Top Level Domain: '
        domainDetails.textContent = aCountry[0].tld
        currencyDetailsLabel.textContent = 'Currencies: '

        //this accesses the keys on a given object and joins each key with a comma 
        currencyDetails.textContent = Object.keys(aCountry[0].currencies).join(', ');
        languageDetailsLabel.textContent = 'Languages: '

        //returns values in thte given array and joins them with a comma
        languageDetails.textContent = Object.values(aCountry[0].languages).join(', ');
        borderCountryDetailsLabel.textContent = 'Border Countries: '

        //creating a border country button 

        aCountry[0].borders.forEach((border) => {
        const button = document.createElement('button');
        button.textContent = border;
        button.className = 'borderCountryBtn'
        borderCountryDetails.appendChild(button);
        });


            
        //appending details for country to other elements
        
        detailsFlag.appendChild(imgDetails)
        borderCountries.appendChild(borderCountryDetails)
        
        details.appendChild(countryName)
        details.appendChild(nativeNameDetailLabel)
        details.appendChild(nativeNameDetail)
        details.appendChild(populationDetailLabel)
        details.appendChild(populationDetails)
        details.appendChild(regionDetailLabel)
        details.appendChild(regionDetails)
        details.appendChild(subRegionDetailsLabel)
        details.appendChild(subRegionDetails)
        details.appendChild(capitalDetailsLabel)
        details.appendChild(capitalDetails)
        details.appendChild(domainDetailsLabel)
        details.appendChild(domainDetails)
        details.appendChild(currencyDetailsLabel)
        details.appendChild(currencyDetails)
        details.appendChild(languageDetailsLabel)
        details.appendChild(languageDetails)
        details.appendChild(borderCountryDetailsLabel)
        details.appendChild(borderCountries)
        detailsDiv.appendChild(detailsFlag)
        detailsDiv.appendChild(details)
       
        
        mainContainer.appendChild(detailsDiv)
    }

     catch (error) {
        console.log(error)
    }
}


// borderCountries.addEventListener('click', async (e) => {

//         if (e.target.classList.contains('borderCountryBtn')) {
//             const clickedBorderCode = e.target.textContent;
//             console.log(`Clicked Border Code:${clickedBorderCode}`);

//             try {
//                 const response = await fetch(`https://restcountries.com/v3.1/alpha/${clickedBorderCode}`);
//                 if (!response.ok) {
//                     throw new Error('Network response was notok');
//                 }
//                 const clickedCountryDetails = await response.json();
//                 console.log('Clicked Country Details:',
// clickedCountryDetails);

//                 // Clear existing content in the main container
//                 mainContainer.innerHTML = '';

//                 // Display clicked country details
//                 singleCountry(clickedCountryDetails[0]);
//             } catch (error) {
//                 console.error('Error fetching countrydetails:', error);
//             }
//         }
//     })



// function countryDetailsBox (country)  {
//     console.log(country)
//     const countryName = document.createElement('h3')
//     const nativeNameDetail = document.createElement('p')
//     const populationDetails = document.createElement('p')
//     const regionDetails = document.createElement('p')
//     const subRegionDetails = document.createElement('p')
//     const capitalDetails = document.createElement('p')
//     const domainDetails = document.createElement('p')
//     const currencyDetails = document.createElement('p')
//     const languageDetails = document.createElement('p')
//     // const borderCountryDetails = document.createElement('p')
//     const borderCountries= document.createElement('div')
//     const borderCountryDetails = document.createElement('div')

//     // countryName.textContent = country.name
//     // nativeNameDetail.textContent = country.name
//     populationDetails.textContent = country[0].population
//     regionDetails.textContent = country[0].region
//     subRegionDetails.textContent = country[0].subregion
//     capitalDetails.textContent = country[0].capital[0]
//     domainDetails.textContent = country[0].tld
//     // currencyDetails.textContent = country.currencies
//     // languageDetails.textContent = country.languages
//     // borderCountryDetails.textContent = country.borderCountries


//     console.log(detailsBox)


//     // borderCountries.appendChild(borderCountryDetails)

//     // detailsBox.appendChild(countryName)
//     // detailsBox.appendChild(nativeNameDetail)
//     detailsBox.appendChild(populationDetails)
//     detailsBox.appendChild(regionDetails)
//     detailsBox.appendChild(subRegionDetails)
//     detailsBox.appendChild(capitalDetails)
//     detailsBox.appendChild(domainDetails)
//     // detailsBox.appendChild(currencyDetails)
//     // detailsBox.appendChild(languageDetails)
//     // detailsBox.appendChild(borderCountries)





// }