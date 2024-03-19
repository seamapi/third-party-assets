import test from 'ava'

import { todo } from '@seamapi/third-party-assets'

test('todo: returns argument', (t) => {
  t.is(todo('todo'), 'todo', 'returns input')
})
