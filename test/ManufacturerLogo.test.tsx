import test from 'ava'
import { renderToStaticMarkup } from 'react-dom/server'

import { ManufacturerLogo } from '@seamapi/third-party-assets'

test('todo: renders a logo', (t) => {
  const result = renderToStaticMarkup(
    <ManufacturerLogo manufacturerName='salto' />,
  )
  t.true(result.startsWith('<svg'))
})
