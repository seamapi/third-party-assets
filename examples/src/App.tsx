import './App.css'

import { useState } from 'react'

import {
  ManufacturerLogo,
  manufacturerLogos,
} from '@seamapi/third-party-assets'

export function App(): JSX.Element {
  const [monochrome, setMonochrome] = useState(false)

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
      <div className='manufacturer-logos'>
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
