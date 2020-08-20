import React from 'react'
import { Markdown } from './Markdown'
import { BrowserRouter } from 'react-router-dom'
import { Spacer } from '../layout'

export default {
  title: 'Composites/Markdown'
}

function MarkdownExample ({ source }) {
  return (
    <div>
      <pre>{typeof source === 'undefined' ? '<UNDEFINED>' : source}</pre>
      <hr />
      <Spacer large>
        <Markdown source={source} />
      </Spacer>
    </div>
  )
}

const longExample = `# A header

Paragraphs are separated by a blank line.

2nd paragraph. *Italic*, **bold**, ~~strikethrough~~ and \`monospace\`.

\`\`\`json
{
  "hello": "world"
}
\`\`\`

\`\`\`bash
$ npm run develop --watch
\`\`\`

Itemized lists
look like:

  * this one
  * that one
  * the other one

Here's a numbered list:

  1. first item
  2. second item
  3. third item

***

> Block quotes are
> written like so.
>
> They can span multiple paragraphs,
> if you like.

There is support for "quotation marks" and other escaped characters.
Unicode ☺ is supported. Emojis 😊 are supported.

Tables look like this:

size | material | color
---|---|---
9 | leather | brown
10 | hemp canvas | natural
11 | glass | transparent

It is possible to link to an external site like
[link](http://www.wikipedia.com "Wikipedia")
or to an [link](/doc-types/scientist "internal page") on this domain.

Finally, here are some pictures of lions.  The first without a caption...

![Lion sat waiting](https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/256px-Lion_waiting_in_Namibia.jpg)

...the second with a caption

![Lion sat waiting](https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/256px-Lion_waiting_in_Namibia.jpg "African Lion")
`

export const asDefault = () => <MarkdownExample />
export const withShortExampleText = () => <MarkdownExample source={'# Heading\n\nHere is some text'} />
export const withLongExampleText = () => <BrowserRouter><MarkdownExample source={longExample} /></BrowserRouter>
