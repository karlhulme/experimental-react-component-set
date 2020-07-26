import React from 'react'
import { findSpecialSubstrings } from './findSpecialSubstrings'

export function convertTextToSpans (text, fieldTypes, lang, CodeElement, LinkElement, ExternalLinkElement) {
  const specialSubstrings = findSpecialSubstrings(text)
  const spans = []
  let spanStartIndex = 0

  for (let i = 0; i < text.length; i++) {
    if (i >= spanStartIndex) {
      const isLast = i === text.length - 1
      const specialSubstring = specialSubstrings.find(m => m.start === i)

      if (isLast) {
        spans.push(<span key={i}>{text.substring(spanStartIndex, i + 1)}</span>)
      } else if (specialSubstring) {
        spans.push(<span key={i}>{text.substring(spanStartIndex, i)}</span>)
        if (specialSubstring.type === 'code') {
          spans.push(<code>{specialSubstring.content}</code>)
        } else if (specialSubstring.type === 'fieldType') {
          const title = (fieldTypes.find(f => f.name === specialSubstring.content) || {}).title || specialSubstring.content
          spans.push(<LinkElement text={title} url={`/${lang}/field-types/${specialSubstring.content}`} />)
        } else if (specialSubstring.type === 'externalLink') {
          spans.push(<ExternalLinkElement text={specialSubstring.content} url={specialSubstring.content} />)
        }

        spanStartIndex = specialSubstring.end + 1
      }
    }
  }

  return <>{spans}</>
}
