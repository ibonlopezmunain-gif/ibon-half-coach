import { behobiaPlan } from '../data/behobia.js'
import { mediaPlan } from '../data/media.js'
import { zuiaduPlan } from '../data/zuiadu.js'
import { halfPlan } from '../data/half.js'

function renderBlock(title, weeks) {

  return `

    <details class="block">

      <summary class="block-title">

        ${title}

      </summary>

      ${weeks.map((week, weekIndex) => `

        <div class="week-card">

          <h3>${week.semana}</h3>
<p>
  🏃 Running: ${week.volumenRunning} km
</p>

<p>
  🏊 Natación: ${week.volumenNatacion} m
</p>
<p>
  🚴 Bici: ${week.volumenBici || 0} km
</p>
<p>
  💪 CrossFit: ${week.crossfit}
</p>
          <p>${week.objetivo}</p>

          ${week.sesiones.map((session, sessionIndex) => {

            const id =
              `${title}-${weekIndex}-${sessionIndex}`

            return `

              <details>

                <summary>

                  <input
                    type="checkbox"
                    class="training-check"
                    data-id="${id}"
                  />

                  ${session.dia}
                  -
                  ${session.titulo}

                </summary>

                <pre>
${session.detalles}
                </pre>

              </details>

            `

          }).join("")}

        </div>

      `).join("")}

    </details>

  `
}

export function createTraining() {

  return `

    <div class="card">

      <h2>🏃 Plan de Entrenamiento</h2>

      <div id="compliance">
        Cumplimiento: 0%
      </div>

      ${renderBlock(
        "🏃 Behobia",
        behobiaPlan
      )}

      ${renderBlock(
        "🏃 Media Maratón",
        mediaPlan
      )}

      ${renderBlock(
        "🚴 ZuiaDu",
        zuiaduPlan
      )}

      ${renderBlock(
        "🏊 Half Vitoria",
        halfPlan
      )}

    </div>

  `
}