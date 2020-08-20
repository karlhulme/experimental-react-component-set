import React from 'react'
import PropTypes from 'prop-types'

function chooseText (props) {
  if (props.deprecated) {
    return 'DEPRECATED'
  } else if (props.patchable) {
    return 'PATCHABLE'
  } else if (props.required) {
    return 'REQUIRED'
  } else if (props.calculated) {
    return 'CALCULATED'
  } else {
    return '?'
  }
}

function getClassNameForTagType (props) {
  if (props.deprecated) {
    return 'visuals-tag-content-deprecated'
  } else if (props.patchable) {
    return 'visuals-tag-content-patchable'
  } else if (props.required) {
    return 'visuals-tag-content-required'
  } else if (props.calculated) {
    return 'visuals-tag-content-calculated'
  } else {
    return ''
  }
}

export function Tag (props) {
  return <span className='visuals-tag-wrapper'><div className={`visuals-tag-content ${getClassNameForTagType(props)}`}>{chooseText(props)}</div></span>
}

Tag.propTypes = {
  deprecated: PropTypes.bool,
  patchable: PropTypes.bool,
  required: PropTypes.bool
}
