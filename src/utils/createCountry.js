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
        const regionTagLabel = document.createElement('h6')
        const capitalTagLabel = document.createElement('h6')
        const populationTagLabel = document.createElement('h6')
        
        //assign class atribute
        countryBasics.className = 'card'
        cardBodyTag.className = 'card-body'
        imgTag.classList = 'card-img-top'
        
        
        //assigning data to each element
        imgTag.src = country.flags.svg
        nameTag.innerText = country.name.common
        populationTag.innerText = country.population
        regionTag.innerText = country.region
        capitalTag.innerText = country.capital

        regionTagLabel.textContent = 'Region: '
        capitalTagLabel.textContent = 'Capital: '
        populationTagLabel.textContent = 'Population: '
        // appending elements to other elements to be shown in the html document
        
        
        
        
        countryBasics.appendChild(imgTag)
        countryBasics.appendChild(cardBodyTag)
        cardBodyTag.appendChild(nameTag)        
        cardBodyTag.appendChild(populationTagLabel)        
        cardBodyTag.appendChild(populationTag)        
        cardBodyTag.append(regionTagLabel)
        cardBodyTag.appendChild(regionTag)        
        cardBodyTag.appendChild(capitalTagLabel)        
        cardBodyTag.appendChild(capitalTag)        
        
        
        countriesList.appendChild(countryBasics)
    });
    return cards
}

