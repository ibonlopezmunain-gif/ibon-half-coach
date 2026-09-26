export function createMetrics() {

  const history =
    JSON.parse(
      localStorage.getItem('metricsHistory')
    ) || []

  return `

    <div class="card">

      <h2>📊 Seguimiento Diario</h2>

      <label>Peso (kg)</label>

      <input
        id="peso"
        type="number"
        step="0.1"
      />

      <label>FC Reposo</label>

      <input
        id="fc"
        type="number"
      />

      <label>Sueño (horas)</label>

      <input
        id="sueno"
        type="number"
        step="0.1"
      />

      <label>Fatiga (1-10)</label>

      <input
        id="fatiga"
        type="number"
        min="1"
        max="10"
      />

      <br><br>

      <button id="saveMetrics">
        Guardar
      </button>

      <br><br>

      <div id="metricsSaved"></div>

    </div>

    <div class="card">

      <h2>📈 Histórico</h2>

      ${
        history.length === 0

          ? '<p>No hay registros todavía</p>'

          : history.reverse().map(item => `

              <div class="history-item">

                <strong>${item.fecha}</strong>

                <p>⚖️ Peso: ${item.peso} kg</p>

                <p>❤️ FC: ${item.fc} ppm</p>

                <p>😴 Sueño: ${item.sueno} h</p>

                <p>🔥 Fatiga: ${item.fatiga}/10</p>

              </div>

            `).join('')
      }

    </div>

  `

}