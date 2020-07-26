export async function getDocsFromExternalLibrary (lang) {
  switch (lang) {
    default:
    case 'en': {
      const docsEn = await import('jsonotron-builtin-field-types-docs-en')
      return {
        categoryDocs: docsEn.builtinCategoryDocsEN,
        docTypeDocs: [],
        fieldTypeDocs: docsEn.builtinFieldTypeDocsEN,
        fieldTypeValues: docsEn.builtinFieldTypeValuesEN
      }
    }
  }
}
