import React from 'react'
import PropTypes from 'prop-types'

export function Para ({ children }) {
  return <p className='text-para'>{children}</p>
}

Para.propTypes = {
  children: PropTypes.any
}
