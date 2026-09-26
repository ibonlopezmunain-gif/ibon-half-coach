import { athlete } from "../data/athlete.js"

export function createDashboard() {

  const peso =
    localStorage.getItem('peso') || '-'

  const fc =
    localStorage.getItem('fc') || athlete.fcReposo

  const sueno =
    localStorage.getItem('sueno') || '-'

  const fatiga =
    localStorage.getItem('fatiga') || '-'

  let totalChecks = 0
  let completedChecks = 0

  for(let i = 0; i < localStorage.length; i++){

    const key = localStorage.key(i)

    if(
      key.includes('Behobia') ||
      key.includes('Media') ||
      key.includes('Half') ||
      key.includes('ZuiaDu')
    ){

      totalChecks++

      if(localStorage.getItem(key) === 'true'){

        completedChecks++

      }

    }

  }

  const cumplimiento =
    totalChecks > 0
      ? Math.round(
          completedChecks /
          totalChecks *
          100
        )
      : 0
      const semanaActual = {

  running: 36,

  natacion: 2500,

  crossfit: 2

}

  function diasHasta(fecha){

    const hoy = new Date()

    const objetivo = new Date(fecha)

    return Math.ceil(
      (objetivo - hoy) /
      (1000 * 60 * 60 * 24)
    )

  }

  return `

    <div class="grid">

      <div class="card principal">

        <h2>🎯 Objetivo Principal</h2>

        <h3>VI Half Vitoria 2027</h3>

        <p>Objetivo: ${athlete.objetivoHalf}</p>

        <h1>
          ${diasHasta("2027-06-05")} días
        </h1>

      </div>

      <div class="card">

        <h2>🏁 Próximo Objetivo</h2>
        <div class="card">

  <h2>📅 Esta semana</h2>

  <p>
    🏃 Running:
    ${semanaActual.running} km
  </p>

  <p>
    🏊 Natación:
    ${semanaActual.natacion} m
  </p>

  <p>
    💪 CrossFit:
    ${semanaActual.crossfit}
  </p>

  <p>
    ✅ Cumplimiento:
    ${cumplimiento}%
  </p>

</div>

        <h3>Behobia San Sebastián</h3>

        <p>Objetivo: 1h30</p>

        <h1>
          ${diasHasta("2026-11-08")} días
        </h1>

      </div>

      <div class="card">

        <h2>💓 Estado Actual</h2>

        <ul>
          <li>VO₂max: ${athlete.vo2max}</li>
          <li>FC reposo: ${athlete.fcReposo}</li>
          <li>VFC: ${athlete.hrv}</li>
          <li>Estado: ${athlete.estado}</li>
        </ul>

      </div>

      <div class="card">

        <h2>📊 Seguimiento</h2>

        <ul>
          <li>⚖️ Peso: ${peso} kg</li>
          <li>❤️ FC: ${fc} ppm</li>
          <li>😴 Sueño: ${sueno} h</li>
          <li>🔥 Fatiga: ${fatiga}/10</li>
        </ul>

      </div>

      <div class="card">

        <h2>✅ Cumplimiento</h2>

        <div class="progress-bar">

          <div
            class="progress-fill"
            style="width:${cumplimiento}%"
          ></div>

        </div>

        <h1>${cumplimiento}%</h1>

        <p>

          ${
            cumplimiento >= 90
              ? "🟢 Excelente"
              : cumplimiento >= 70
              ? "🟡 Bueno"
              : "🔴 Bajo"
          }

        </p>

      </div>

    </div>

  `

}