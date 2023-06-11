const arrowDown = document.querySelector('#custom--select--arrow'),
   filters = document.querySelector('.filters'),
   toggleThemeBtn = document.querySelector('#theme'),
   header = document.querySelector('.header'),
   main = document.querySelector('.main'),
   spanInFilters = document.querySelectorAll('.filters span'),
   filter = document.querySelector('#filter'),
   deleteFilter = document.querySelector('.filters svg'),
   countriesInput = document.querySelector('.magnifier--with--input input'),
   customSelect = document.querySelector('.custom--select'),
   divForCountries = document.querySelector('.countries'),
   loader = document.querySelector('.loader'),
   countryInfo = document.querySelector('.country-info'),
   bgcInfo = document.querySelector('.bgc--info'),
   backBtn = document.querySelector('.back'),
   flagInInfo = document.querySelector('.flagInInfo '),
   infoInInfo = document.querySelector('.infoInInfo'),
   nameOfCountry = document.querySelector('.name--of--country'),
   population = document.querySelector('.population'),
   region = document.querySelector('.region'),
   languages = document.querySelector('.languages'),
   capital = document.querySelector('.capital'),
   nCountries = document.querySelector('.nCountries'),
   continent = document.querySelector('.continent'),
   currency = document.querySelector('.currency'),
   domen = document.querySelector('.domen'),
   regionArea = document.querySelector('.region-area'),
   error = document.querySelector('.error'),
   bgcLoader = document.querySelector('.bgc--loader')

let imgInThemeBtn,
   countriesInfo,
   countries,
   inputValue,
   countryNameLetters,
   arrayForCountries = [],
   isFirstLetter = true,
   receivedData,
   choosedFilter,
   filteredReceivedData

countriesInput.addEventListener('input', () => {
   searchCountries(countriesInput.value)
})

const searchCountries = (inputValue) => {
   countries.forEach((country, i) => {
      getInputCountries(inputValue.trim(), country)
   })
   countries = arrayForCountries

   addCountries(countries)
   if (choosedFilter) {
      countries = filteredReceivedData
   } else {
      countries = receivedData
   }

   arrayForCountries = []

   if (inputValue === '') {
      // addCountries(receivedData, choosedFilter)
      divForCountries.innerHTML = ''
      getCountries()
   }
}

const getInputCountries = (inputValue, country) => {
   if (
      country.name.common
         .toLowerCase()
         .indexOf(inputValue.trim().toLowerCase()) === 0
   ) {
      arrayForCountries.push(country)
   }
}

spanInFilters.forEach((span, i) => {
   span.addEventListener('click', () => {
      filter.textContent = span.textContent
      filters.classList.remove('active')
      changeFilter(span.textContent)
   })
})

deleteFilter.addEventListener('click', () => {
   if (choosedFilter) {
      getCountries()
   }
   filter.textContent = 'Фильтр по регионам'
   filters.classList.remove('active')
   countriesInput.value = ''
})

const changeFilter = (content) => {
   if (content === 'Африка') {
      addCountries(receivedData, 'Africa')
      choosedFilter = 'Africa'
      countries = filteredReceivedData
      countriesInput.value = ''

      return
   }
   if (content === 'Америка') {
      addCountries(receivedData, 'Americas')
      choosedFilter = 'Americas'
      countries = filteredReceivedData
      countriesInput.value = ''
      return
   }
   if (content === 'Азия') {
      addCountries(receivedData, 'Asia')
      choosedFilter = 'Asia'
      countries = filteredReceivedData
      countriesInput.value = ''
      return
   }
   if (content === 'Европа') {
      addCountries(receivedData, 'Europe')
      choosedFilter = 'Europe'
      countries = filteredReceivedData
      countriesInput.value = ''
      return
   }
   if (content === 'Океания') {
      addCountries(receivedData, 'Oceania')
      choosedFilter = 'Oceania'
      countries = filteredReceivedData
      countriesInput.value = ''
   }
}

arrowDown.addEventListener('click', () => {
   filters.classList.toggle('active')
})

toggleThemeBtn.addEventListener('click', () => {
   toggleToDarkTheme()
   toggleThemeBtn.classList.contains('active')
      ? ThemeBtnToDark()
      : themeBtnToLight()
})

const hideLoader = () => {
   setTimeout(() => {
      loader.style.display = 'none'
      bgcLoader.style.display = 'none'
   }, 100)
}
const showLoader = () => {
   loader.style.display = 'flex'
   bgcLoader.style.display = 'flex'
}

const toggleToDarkTheme = () => {
   header.classList.toggle('header--dark__theme')
   main.classList.toggle('main--dark__theme')
   toggleThemeBtn.classList.toggle('active')
   countriesInput.classList.toggle('active')
   customSelect.classList.toggle('active')
   divForCountries.classList.toggle('countries--dark__theme')
   countryInfo.classList.toggle('info__dark--theme')
   bgcLoader.classList.toggle('bgcLoader--darkTheme')
   loader.classList.toggle('darkTheme')
}

ThemeBtnToDark = () => {
   imgInThemeBtn = `<svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
   >
      <path
         d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"
      ></path>
   </svg>`
   toggleThemeBtn.innerHTML = `${imgInThemeBtn} Темная`
}

themeBtnToLight = () => {
   imgInThemeBtn = `<svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
   >
      <path
         d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"
      ></path>
   </svg>`
   toggleThemeBtn.innerHTML = `${imgInThemeBtn} Светлая`
}
getCountries()
function getCountries() {
   showLoader()
   divForCountries.innerHTML = ''
   countriesInfo = ''
   countries = ''
   receivedData = ''
   filteredReceivedData = ''
   countryNameLetters = ''
   fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => {
         countries = data
         receivedData = data

         addCountries(data)
         hideLoader()
      })
      .catch((err) => error.classList.add('active'))
}

const addCountries = (countries, filter) => {
   if (!filter) {
      addCountriesWithoutFilter(countries)
   } else if (filter === 'Africa') {
      addCoutnriesWithFilter(countries, 'Africa')
   } else if (filter === 'Americas') {
      addCoutnriesWithFilter(countries, 'Americas')
   } else if (filter === 'Europe') {
      addCoutnriesWithFilter(countries, 'Europe')
   } else if (filter === 'Asia') {
      addCoutnriesWithFilter(countries, 'Asia')
   } else if (filter === 'Oceania') {
      addCoutnriesWithFilter(countries, 'Oceania')
   }
}

const addCountriesWithoutFilter = (countries) => {
   countriesInfo = countries.map(
      (country, idx) =>
         `<div class='country'>
      <div class='flag'>
      <img src='${country.flags.png}' class='flag'>
      </div>
      <div class='info'>
      <span >Название:<span>${country.name.common}</span></span>
      <span >Население:<span></span> ${country.population}</span>
      <span >Регион:<span> ${country.region}</span></span>
      <span >Столица:<span> ${country.capital}</span></span>
      </div>
</div>`
   )
   divForCountries.innerHTML = ''
   countriesInfo.forEach((country) => (divForCountries.innerHTML += country))

   const countriesForListener = document.querySelectorAll('.countries .country')
   countriesForListener.forEach((country) => {
      openInfoAboutCountry(country, countries)
   })
}

const addCoutnriesWithFilter = (countries, filter) => {
   countries = countries.filter((country) => {
      if (country.region === filter) return country
   })
   countriesInfo = countries.map(
      (country) => `<div class='country'>
      <div class='flag'>
      <img src='${country.flags.png}' class='flag'>
      </div>
      <div class='info'>
      <span >Название:<span>${country.name.common}</span></span>
      <span >Население:<span></span> ${country.population}</span>
      <span >Регион:<span> ${country.region}</span></span>
      <span >Столица:<span> ${country.capital}</span></span>
      </div>
</div>`
   )
   filteredReceivedData = countries

   divForCountries.innerHTML = ''
   countriesInfo.forEach((country) => (divForCountries.innerHTML += country))
   const countriesForListener = document.querySelectorAll('.countries .country')
   countriesForListener.forEach((country) => {
      openInfoAboutCountry(country, countries)
   })
}

const openInfoAboutCountry = (country, countries) => {
   country.addEventListener('click', () => {
      bgcInfo.classList.add('active')
      countryInfo.classList.add('active')

      openedInfo(
         country.querySelector('.flag img').src,
         country.querySelector('.info span span').textContent,
         countries
      )
   })
}

backBtn.addEventListener('click', () => {
   bgcInfo.classList.remove('active')
   countryInfo.classList.remove('active')
   nCountries.textContent = ''
   languages.textContent = ''
})

const openedInfo = (src, name, infoObject) => {
   flagInInfo.src = src
   nameOfCountry.textContent = name
   infoObject = infoObject.find((country) => {
      if (country.name.common === name) return country
   })
   addInfo(infoObject)
}

const addInfo = (infoObject) => {
   infoObject.population
      ? (population.textContent = preparePopulation(infoObject.population))
      : 0

   region.textContent = infoObject.region
   if (infoObject.languages) {
      for (let language of Object.values(infoObject.languages)) {
         languages.textContent += ` ${language}`
      }
   } else {
      languages.textContent = 'There is no set language'
   }
   infoObject.capital
      ? (capital.textContent = infoObject.capital)
      : (capital.textContent = 'There is no capital here')
   infoObject.borders
      ? fetch(
           `https://restcountries.com/v3.1/alpha?codes=${infoObject.borders}`
        )
           .then((borders) => borders.json())
           .then((bordersCountry) => borders(bordersCountry))
      : (nCountries.textContent = 'The country has no neighbors')

   continent.textContent = infoObject.continents
   infoObject.currencies
      ? (currency.textContent = Object.values(infoObject.currencies)[0].name)
      : (currency.textContent = 'There is no set currency here')
   infoObject.tld
      ? (domen.textContent = infoObject.tld[0])
      : (domen.textContent = 'There is no set domen')
   infoObject.subregion
      ? (regionArea.textContent = infoObject.subregion)
      : (regionArea.textContent = 'The subregion is not set here')
}

const preparePopulation = (num) => {
   if (num > 1000000000) {
      return (num / 1000000000).toFixed(3) + ' млрд.ч'
   } else if (num > 1000000) {
      return (num / 1000000).toFixed(2) + ' млн.ч'
   } else if (num > 1000) {
      return (num / 1000).toFixed(2) + ' тыс.ч'
   } else {
      return num.toString() + ' чел.'
   }
}

const borders = (bordersCountry) => {
   bordersCountry.forEach((border) => {
      if (border.name.common) {
         nCountries.textContent += `  ${border.name.common}`
      }
   })
}
