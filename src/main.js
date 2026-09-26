import { createDashboard } from './pages/dashboard.js'
import './style.css'
import { createNavigation } from './components/navigation.js'
import { athlete } from './data/athlete.js'

import { createCalendar } from './pages/calendar.js'
import { createTraining } from './pages/training.js'
import { createLibrary } from './pages/library.js'
import { createMetrics } from './pages/metrics.js'
import { createConnections } from './pages/connections.js'

document.querySelector('#app').innerHTML = `

<div class="container">

  <div class="hero">

    <h1>🏊🚴🏃 Ibon Half Coach</h1>

    <p>Proyecto Half Vitoria 2027</p>

  </div>

  ${createNavigation()}

  <div id="page-content">

    <div class="grid">

      <div class="card principal">

        <h2>🎯 Objetivo Principal</h2>

        <h3>VI Half Vitoria 2027</h3>

        <p>Objetivo: ${athlete.objetivoHalf}</p>

        <h1 id="contadorHalf"></h1>

      </div>

      <div class="card">

        <h2>🏁 Próxima carrera</h2>

        <h3>Behobia San Sebastián</h3>

        <h1 id="contadorBehobia"></h1>

      </div>

      <div class="card">

        <h2>💓 Estado actual</h2>

        <ul>
          <li>VO₂max: ${athlete.vo2max}</li>
          <li>FC reposo: ${athlete.fcReposo} ppm</li>
          <li>VFC: ${athlete.hrv} ms</li>
          <li>Estado Garmin: ${athlete.estado}</li>
        </ul>

      </div>

      <div class="card">

        <h2>📅 Calendario</h2>

        <ul>
          <li>✅ Almendra 10K</li>
          <li>🎯 Behobia</li>
          <li>🌙 Night Run</li>
          <li>🏃 Media Maratón</li>
          <li>🚴 ZuiaDu</li>
          <li>🏊 Half Vitoria</li>
        </ul>

      </div>

    </div>

  </div>

</div>

`

function diasHasta(fecha) {

  const hoy = new Date()
  const objetivo = new Date(fecha)

  const diferencia = objetivo - hoy

  return Math.ceil(
    diferencia / (1000 * 60 * 60 * 24)
  )
}

document.getElementById('contadorHalf').textContent =
  diasHasta('2027-06-05') + ' días'

document.getElementById('contadorBehobia').textContent =
  diasHasta('2026-11-08') + ' días'

const pageContent =
  document.getElementById('page-content')

document
  .getElementById('navDashboard')
  ?.addEventListener('click', () => {

    pageContent.innerHTML =
      createDashboard()

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
 
setupTrainingChecks()

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

    setupMetrics()

  })

  document
  .getElementById('navConnections')
  ?.addEventListener('click', () => {

    pageContent.innerHTML =
      createConnections()

  })
  function setupTrainingChecks() {

  const checks =
    document.querySelectorAll('.training-check')

  checks.forEach(check => {

    const id =
      check.dataset.id

    const saved =
      localStorage.getItem(id)

    if(saved === 'true') {

      check.checked = true

    }

    check.addEventListener('change', () => {

      localStorage.setItem(
        id,
        check.checked
      )

      updateCompliance()

    })

  })

  updateCompliance()
}

function updateCompliance() {

  const checks =
    document.querySelectorAll('.training-check')

  if(checks.length === 0) return

  const total = checks.length

  let completed = 0

  checks.forEach(check => {

    if(check.checked) {

      completed++

    }

  })

  const percentage =
    Math.round(
      (completed / total) * 100
    )

  const compliance =
    document.getElementById('compliance')

  if(compliance){

    compliance.innerHTML =
      `Cumplimiento: ${percentage}%`

  }

}
function setupMetrics() {

  const peso =
    document.getElementById('peso')

  const fc =
    document.getElementById('fc')

  const sueno =
    document.getElementById('sueno')

  const fatiga =
    document.getElementById('fatiga')

  const saveButton =
    document.getElementById('saveMetrics')

  if(!saveButton) return

  peso.value =
    localStorage.getItem('peso') || ''

  fc.value =
    localStorage.getItem('fc') || ''

  sueno.value =
    localStorage.getItem('sueno') || ''

  fatiga.value =
    localStorage.getItem('fatiga') || ''

  saveButton.addEventListener('click', () => {

    localStorage.setItem(
      'peso',
      peso.value
    )

    localStorage.setItem(
      'fc',
      fc.value
    )

    localStorage.setItem(
      'sueno',
      sueno.value
    )

    localStorage.setItem(
      'fatiga',
      fatiga.value
    )
const history =
  JSON.parse(
    localStorage.getItem(
      'metricsHistory'
    )
  ) || []

history.push({

  fecha:
    new Date()
      .toLocaleDateString(),

  peso: peso.value,

  fc: fc.value,

  sueno: sueno.value,

  fatiga: fatiga.value

})

localStorage.setItem(

  'metricsHistory',

  JSON.stringify(history)

)
    document.getElementById(
      'metricsSaved'
    ).innerHTML =
      '✅ Datos guardados'

  })

}