let countriesList = document.getElementById('list')


export  function createCountryCardElements (countries) {
    let cards  = countries.forEach((country) => {
        
        
        //creating elements for the country data to be displayed in 
        // const li = document.createElement('li')
        const countryBasics = document.createElement('div')
        const nameTag = document.createElement('h4')
        const regionTag = document.createElement('p')
        const capitalTag = document.createElement('p')
        const populationTag = document.createElement('p')
        const imgTag = document.createElement('img')
        
        //assign class atribute
        countryBasics.classList = 'countryClass'
        countryBasics.className = 'card'
        imgTag.classList = 'card-img-top'
        
        
        //assigning data to each element
        imgTag.src = country.flags.svg
        
        nameTag.innerText = country.name.common
        populationTag.innerText = country.population
        regionTag.innerText = country.region
        capitalTag.innerText = country.capital
        
        // console.log(country)
        countryBasics.appendChild(imgTag)
        countryBasics.appendChild(nameTag)        
        countryBasics.appendChild(populationTag)        
        countryBasics.appendChild(regionTag)        
        countryBasics.appendChild(capitalTag)        
        
        // li.appendChild(countryBasics)
        
        countriesList.appendChild(countryBasics)
        // mainContainer.appendChild(countriesList)
    });
    return cards
}

