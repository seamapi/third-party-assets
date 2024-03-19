import React from 'react'
import ReactDOM from 'react-dom/client'

import { ManufacturerLogo, manufacturerLogos } from './ManufacturerLogo.js'

const root = document.getElementById('root')
if (root === null) throw new Error('No root element found')

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ManufacturerLogoShowcase />
  </React.StrictMode>,
)

function ManufacturerLogoShowcase() {
  const [monochrome, setMonochrome] = React.useState(false)

  return (
    <div>
      <h1>Manufacturer Logos</h1>
      <label>
        <input
          type='checkbox'
          onChange={() => {
            setMonochrome(!monochrome)
          }}
        />{' '}
        Monochrome
      </label>

      <hr />
      <div
        style={{
          margin: 24,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, 100px)',
          gap: 24,
        }}
      >
        {(
          Object.keys(manufacturerLogos) as Array<
            keyof typeof manufacturerLogos
          >
        ).map((name) => (
          <div key={name}>
            <ManufacturerLogo manufacturerName={name} monochrome={monochrome} />
          </div>
        ))}
      </div>
    </div>
  )
}
