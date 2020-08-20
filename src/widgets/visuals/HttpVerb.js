import React from 'react'
import PropTypes from 'prop-types'

function chooseText (props) {
  if (props.get) {
    return 'GET'
  } else if (props.post) {
    return 'POST'
  } else if (props.patch) {
    return 'PATCH'
  } else if (props.delete) {
    return 'DELETE'
  } else if (props.put) {
    return 'PUT'
  } else {
    return '?'
  }
}

function getClassNameForVerb (props) {
  if (props.get) {
    return 'visuals-http-verb-get'
  } else if (props.post) {
    return 'visuals-http-verb-post'
  } else if (props.patch) {
    return 'visuals-http-verb-patch'
  } else if (props.delete) {
    return 'visuals-http-verb-delete'
  } else if (props.put) {
    return 'visuals-http-verb-put'
  } else {
    return ''
  }
}

export function HttpVerb (props) {
  return <span className={`visuals-http-verb ${getClassNameForVerb(props)}`}>{chooseText(props)}</span>
}

HttpVerb.propTypes = {
  get: PropTypes.bool,
  post: PropTypes.bool,
  patch: PropTypes.bool,
  delete: PropTypes.bool,
  put: PropTypes.bool
}
