import test from 'ava'
import type { ComponentType } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

import {
  ManufacturerLogo,
  manufacturerLogos,
} from '@seamapi/third-party-assets'

for (const [key, value] of Object.entries(manufacturerLogos) as Array<
  [keyof typeof manufacturerLogos, ComponentType | null]
>) {
  test(`todo: renders ${key}`, (t) => {
    const result = renderToStaticMarkup(
      <ManufacturerLogo manufacturerName={key} />,
    )
    if (value === null) {
      t.true(result === '')
    } else {
      t.true(result.startsWith('<svg'))
    }
  })
}
