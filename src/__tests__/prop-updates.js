import 'jest-dom/extend-expect'
import 'react-testing-library/cleanup-after-each'
import React from 'react'
import {render, fireEvent, getByText} from 'react-testing-library'
import {FavoriteNumber} from '../favorite-number'

test('entering an invalid value shows an error message', () => {
  const {getByLabelText, getByTestId, debug, rerender} = render(
    <FavoriteNumber />,
  )
  const input = getByLabelText(/favorite number/i)
  fireEvent.change(input, {target: {value: 10}})

  expect(getByTestId('error-message')).toHaveTextContent(
    /the number is invalid/i,
  )

  debug()

  rerender(<FavoriteNumber max={10} />)

  debug()
})
