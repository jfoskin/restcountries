let countriesList = document.getElementById('list')


export  function createCountryCardElements (countries) {
    let cards  = countries.forEach((country) => {
        
        
        //creating elements for the country data to be displayed in 
        const countryBasics = document.createElement('div')
        const nameTag = document.createElement('h4')
        const regionTag = document.createElement('p')
        const capitalTag = document.createElement('p')
        const populationTag = document.createElement('p')
        const imgTag = document.createElement('img')
        const cardBodyTag = document.createElement('div')
        
        //assign class atribute
        countryBasics.className = 'card'
        cardBodyTag.className = 'cardBody'
        imgTag.classList = 'card-img-top'
        
        
        //assigning data to each element
        imgTag.src = country.flags.svg
        nameTag.innerText = country.name.common
        populationTag.innerText = country.population
        regionTag.innerText = country.region
        capitalTag.innerText = country.capital
        
        // appending elements to other elements to be shown in the html document
        countryBasics.appendChild(imgTag)
        countryBasics.appendChild(nameTag)        
        countryBasics.appendChild(populationTag)        
        countryBasics.appendChild(regionTag)        
        countryBasics.appendChild(capitalTag)        
        
        
        countriesList.appendChild(countryBasics)
    });
    return cards
}

