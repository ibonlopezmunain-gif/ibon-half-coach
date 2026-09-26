import { races } from "../data/races.js"

function diasHasta(fecha) {

  const hoy = new Date()
  const carrera = new Date(fecha)

  return Math.ceil(
    (carrera - hoy) /
    (1000 * 60 * 60 * 24)
  )

}

export function createCalendar() {

  return `

    <div class="card">

      <h2>📅 Calendario de Temporada</h2>

      ${races.map(race => `

        <div class="race-card">

          <h3>${race.nombre}</h3>

          <p>
            📅 ${race.fecha}
          </p>

          <p>
            📏 ${race.distancia}
          </p>

          <p>
            🎯 ${race.objetivo}
          </p>

          <p>
            ⏳ ${diasHasta(race.fecha)} días
          </p>

        </div>

      `).join("")}

    </div>

  `

}