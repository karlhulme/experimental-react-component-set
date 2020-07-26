export function findSpecialSubstrings (text) {
  const codeRegex = /`.*`/g
  const codeMatches = [...text.matchAll(codeRegex)]

  const fieldTypeRegex = /%%.*%%/g
  const fieldTypeMatches = [...text.matchAll(fieldTypeRegex)]

  // (http|https)(:\/\/)([^()]*?)((?=[ ()])|(?=\.[\n ()])|(?=\.$)|(?=$))
  const linkTypeRegex = /(http|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/g
  const linkTypeMatches = [...text.matchAll(linkTypeRegex)]

  return [
    ...codeMatches.map(m => ({
      type: 'code',
      content: text.substring(m.index + 1, m.index + m[0].length - 1),
      start: m.index,
      end: m.index + m[0].length - 1
    })),
    ...fieldTypeMatches.map(m => ({
      type: 'fieldType',
      content: text.substring(m.index + 2, m.index + m[0].length - 2),
      start: m.index,
      end: m.index + m[0].length - 1
    })),
    ...linkTypeMatches.map(m => ({
      type: 'externalLink',
      content: text.substring(m.index, m.index + m[0].length),
      start: m.index,
      end: m.index + m[0].length - 1
    }))
  ]
}
