import './style.css'

import { createNavigation } from './components/navigation.js'

import { createDashboard } from './pages/dashboard.js'
import { createCalendar } from './pages/calendar.js'
import { createTraining } from './pages/training.js'
import { createLibrary } from './pages/library.js'
import { createMetrics } from './pages/metrics.js'
import { createConnections } from './pages/connections.js'

document.querySelector('#app').innerHTML = `

<div class="container">

<div class="hero">

  <h1>TRIKITRI</h1>

  <p class="club-subtitle">
    Triathlon Club
  </p>

  <select id="athleteSelector">

    <option>Ibon</option>

    <option>Aritz</option>

  </select>

</div>

  ${createNavigation()}

  <div id="page-content">

    ${createDashboard()}

  </div>

</div>

`
const athleteSelector =
  document.getElementById('athleteSelector')

if (athleteSelector) {

  const savedAthlete =
    localStorage.getItem('selectedAthlete')

  if (savedAthlete) {

    athleteSelector.value =
      savedAthlete

  }

  athleteSelector.addEventListener(
    'change',
    () => {

      localStorage.setItem(
        'selectedAthlete',
        athleteSelector.value
      )

    }
  )

}
const pageContent =
  document.getElementById('page-content')

document
  .getElementById('navDashboard')
  ?.addEventListener('click', () => {

    pageContent.innerHTML =
      createDashboard()
const athleteSelector =
  document.getElementById('athleteSelector')

if (athleteSelector) {

  const savedAthlete =
    localStorage.getItem('selectedAthlete')

  if (savedAthlete) {

    athleteSelector.value =
      savedAthlete

  }

  athleteSelector.addEventListener(
    'change',
    () => {

      localStorage.setItem(
        'selectedAthlete',
        athleteSelector.value
      )

      console.log(
        'Guardado:',
        athleteSelector.value
      )

    }
  )

}
  })

document
  .getElementById('navCalendar')
  ?.addEventListener('click', () => {

    pageContent.innerHTML =
      createCalendar()

  })

document
  .getElementById('navTraining')
  ?.addEventListener('click', () => {

    pageContent.innerHTML =
      createTraining()

    if (typeof setupTrainingChecks === 'function') {
      setupTrainingChecks()
    }

  })

document
  .getElementById('navLibrary')
  ?.addEventListener('click', () => {

    pageContent.innerHTML =
      createLibrary()

  })

document
  .getElementById('navMetrics')
  ?.addEventListener('click', () => {

    pageContent.innerHTML =
      createMetrics()

    if (typeof setupMetrics === 'function') {
      setupMetrics()
    }

  })

document
  .getElementById('navConnections')
  ?.addEventListener('click', () => {

    pageContent.innerHTML =
      createConnections()

  })