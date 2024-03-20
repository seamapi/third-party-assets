import { test, expect } from 'vitest'
import type { ComponentType } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

import {
  ManufacturerLogo,
  manufacturerLogos,
} from '@seamapi/third-party-assets'

test.each(
  Object.entries(manufacturerLogos) as Array<
    [keyof typeof manufacturerLogos, ComponentType | null]
  >,
)('Renders logo for %s', (name, Logo) => {
  const result = renderToStaticMarkup(
    <ManufacturerLogo manufacturerName={name} />,
  )
  if (Logo === null) {
    expect(result).toBe('')
  } else {
    expect(result).toMatch(/^<svg/)
  }
})
