import React from 'react'
import PropTypes from 'prop-types'

function getClassNameForBoxType (props) {
  if (props.alert) {
    return 'surfaces-box-alert'
  } else if (props.hint) {
    return 'surfaces-box-hint'
  } else if (props.system) {
    return 'surfaces-box-system'
  } else {
    return ''
  }
}

export function Box (props) {
  return <blockquote className={`surfaces-box ${getClassNameForBoxType(props)}`}>{props.children}</blockquote>
}

Box.propTypes = {
  alert: PropTypes.bool,
  children: PropTypes.any,
  hint: PropTypes.bool,
  system: PropTypes.bool
}
