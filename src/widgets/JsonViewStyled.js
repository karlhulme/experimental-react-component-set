import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  JsonView,
  CODE, LINE, HIGHLIGHTED_LINE, STRING_VALUE, NUMBER_VALUE,
  BOOLEAN_VALUE, NULL_VALUE, PROPERTY_NAME, LINE_NUMBER
} from 'json-view-for-react'

const DefaultCodeElement = styled.code`
  display: block;
  padding: 0.5rem;
  background-color: rgb(40, 44, 52);
  color: rgb(136, 198, 190);
  overflow-x: scroll;
  border-radius: 5px;
`

const DefaultLineElement = styled.div`
  white-space: nowrap;
`

const DefaultHiLineElement = styled.div`
  white-space: nowrap;
  background-color: rgb(80, 80, 95);
`

const DefaultStringValueSpan = styled.span`color: rgb(121, 182, 242);`
const DefaultNumberValueSpan = styled.span`color: rgb(255, 255, 200);`
const DefaultBooleanValueSpan = styled.span`color: rgb(197, 165, 197);`
const DefaultNullValueSpan = styled.span`color: rgb(197, 165, 197);`
const DefaultPropertyNameSpan = styled.span`color: rgb(250, 200, 99);`

const DefaultLineNumberSpan = styled.span`
  display: inline-block;
  padding-right: 1rem;
  color: rgb(178, 178, 178);
  text-align: right;
  user-select: none;
`

/**
 * Creates a styled element.
 * @param {String} contentType The type of content to be rendered.
 * @param {Object} content A set of React components to be wrapped by this new element.
 * @param {Object} elementProps Props to be added to the returned element.
 */
function onCreateElement (contentType, content, elementProps) {
  switch (contentType) {
    case CODE: return <DefaultCodeElement {...elementProps}>{content}</DefaultCodeElement>
    case LINE: return <DefaultLineElement {...elementProps}>{content}</DefaultLineElement>
    case HIGHLIGHTED_LINE: return <DefaultHiLineElement {...elementProps}>{content}</DefaultHiLineElement>
    case STRING_VALUE: return <DefaultStringValueSpan {...elementProps}>{content}</DefaultStringValueSpan>
    case NUMBER_VALUE: return <DefaultNumberValueSpan {...elementProps}>{content}</DefaultNumberValueSpan>
    case BOOLEAN_VALUE: return <DefaultBooleanValueSpan {...elementProps}>{content}</DefaultBooleanValueSpan>
    case NULL_VALUE: return <DefaultNullValueSpan {...elementProps}>{content}</DefaultNullValueSpan>
    case PROPERTY_NAME: return <DefaultPropertyNameSpan {...elementProps}>{content}</DefaultPropertyNameSpan>
    case LINE_NUMBER: return <DefaultLineNumberSpan {...elementProps}>{content}</DefaultLineNumberSpan>
    /* istanbul ignore next */ // There is no case for getting an unrecognised contentType here.
    default: return <span {...elementProps}>{content}</span>
  }
}

/**
 * A JSON document displayed with a dark theme with line numbers.
 */
export function JsonViewStyled ({ obj, highlightedLineNumbers }) {
  return <JsonView obj={obj} showLineNumbers highlightedLineNumbers={highlightedLineNumbers} onCreateElement={onCreateElement} />
}

JsonViewStyled.propTypes = {
  obj: PropTypes.any,
  highlightedLineNumbers: PropTypes.array
}
