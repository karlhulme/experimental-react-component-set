import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function resolveFieldTypeJsonSchema (jsonSchema) {
  if (typeof jsonSchema === 'function') {
    return jsonSchema('#/defs/')
  } else if (typeof jsonSchema === 'object') {
    return jsonSchema
  } else {
    return null
  }
}

function resolveFieldTypeValue (fieldTypeValue, fieldValuesDocs) {
  const fieldTypeValueDoc = (fieldValuesDocs.values || []).find(v => v.value === fieldTypeValue.value) || {}

  return {
    value: fieldTypeValue.value,
    symbol: fieldTypeValue.symbol || null,
    deprecated: fieldTypeValue.deprecated || false,
    text: fieldTypeValueDoc.text || fieldTypeValue.value
  }
}

function resolveFieldTypeRef (fieldTypeRefName, fieldTypeDocs) {
  const refFieldType = fieldTypeDocs.find(f => f.name === fieldTypeRefName) || {}

  return {
    name: fieldTypeRefName,
    title: refFieldType.title || fieldTypeRefName
  }
}

function createDocumentedCategory (category, docs) {
  const categoryDoc = docs.categoryDocs.find(cd => cd.name === category.name) || {}

  return {
    name: category.name,
    order: category.order,
    title: categoryDoc.title || category.name
  }
}

function createDocumentedDocType (docType, docs) {
  const docTypeDoc = docs.docTypeDocs.find(dd => dd.name === docType.name) || {}

  return {
    name: docType.name,
    ...docTypeDoc // not correct
  }
}

function createDocumentedFieldType (fieldType, docs) {
  const fieldTypeDoc = docs.fieldTypeDocs.find(fd => fd.name === fieldType.name) || {}
  const fieldValuesDoc = docs.fieldTypeValues.find(fv => fv.name === fieldType.name) || {}
  const categoryDoc = docs.categoryDocs.find(cd => cd.name === fieldType.category) || {}

  return {
    name: fieldType.name,
    title: fieldTypeDoc.title || fieldType.name,
    type: fieldType.type,
    category: fieldType.category,
    categoryTitle: categoryDoc.title || fieldType.category,
    jsonSchema: resolveFieldTypeJsonSchema(fieldType.jsonSchema),
    referencedFieldTypes: (fieldType.referencedFieldTypes || [])
      .map(r => resolveFieldTypeRef(r, docs.fieldTypeDocs)),
    paragraphs: fieldTypeDoc.paragraphs || [],
    examples: fieldTypeDoc.examples || [],
    values: fieldType.type === 'enum'
      ? fieldType.values.map(v => resolveFieldTypeValue(v, fieldValuesDoc))
      : null
  }
}

function createResources (categories, docTypes, fieldTypes, docs) {
  // ensure docs has correct shape
  if (!Array.isArray(docs.categoryDocs)) { docs.categoryDocs = [] }
  if (!Array.isArray(docs.docTypeDocs)) { docs.docTypeDocs = [] }
  if (!Array.isArray(docs.fieldTypeDocs)) { docs.fieldTypeDocs = [] }
  if (!Array.isArray(docs.fieldTypeValues)) { docs.fieldTypeValues = [] }

  return {
    categories: categories.map(c => createDocumentedCategory(c, docs)),
    docTypes: docTypes.map(d => createDocumentedDocType(d, docs)),
    fieldTypes: fieldTypes.map(f => createDocumentedFieldType(f, docs))
  }
}

export function DocsLoaderRoot ({ categories, docTypes, fieldTypes, view, getDocsFunc }) {
  const { lang } = useParams()
  const [resources, setResources] = useState(createResources(categories, docTypes, fieldTypes, {}))

  useEffect(() => {
    async function fetch () {
      const docs = await getDocsFunc(lang)

      const newResources = createResources(categories, docTypes, fieldTypes, docs)

      setResources(newResources)
    }

    fetch()

    // we only need 'lang' as the dependency on useEffect
    // eslint-disable-next-line
  }, [lang])

  return view({ resources })
}
