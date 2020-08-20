import React from 'react'
import { useParams } from 'react-router-dom'
import {
  FieldTypeBadge,
  Abstract, Columns, Code, CodeHeading, Divider, Heading, HttpVerb, JsonExamplesPanel,
  Markdown, PrimaryScaffold, Spacer, Strong, Tag, Title, Panel, Para
} from '../widgets'

export function DocTypeRoute ({ docTypes, enumTypes, fieldTypes, darkMode, setDarkMode }) {
  const { docTypeName } = useParams()
  const docType = docTypes.find(d => d.name === docTypeName)

  return (
    <PrimaryScaffold darkMode={darkMode} setDarkMode={setDarkMode}>
      <Title>{docType.title}</Title>

      <Abstract>{docType.summary}</Abstract>

      <Columns>
        <Columns.LeftHalf>
          <Spacer large>
            {docType.paragraphs.map((p, index) => <Markdown key={index} source={p} />)}
          </Spacer>
        </Columns.LeftHalf>
        <Columns.RightHalf>
          <Panel>
            <Panel.Header><Strong>END POINTS</Strong></Panel.Header>
            <Panel.Section>
              <Para><HttpVerb get /><Code>/{docType.pluralName}/:id</Code></Para>
              <Para><HttpVerb get /><Code>/{docType.pluralName}</Code></Para>
              <Para><HttpVerb post /><Code>/{docType.pluralName}</Code></Para>
              {docType.operations && Object.keys(docType.operations).map(opName =>
                <Para key={opName}><HttpVerb post /><Code>/{docType.pluralName}/:id/{opName}</Code></Para>
              )}
              <Para><HttpVerb patch /><Code>/{docType.pluralName}/:id</Code></Para>
              {(docType.policy || {}).canReplaceDocuments &&
                <Para><HttpVerb put /><Code>/{docType.pluralName}/:id</Code></Para>}
              {(docType.policy || {}).canDeleteDocuments &&
                <Para><HttpVerb delete /><Code>/{docType.pluralName}/:id</Code></Para>}
            </Panel.Section>
          </Panel>
        </Columns.RightHalf>
      </Columns>

      <Heading>Fields</Heading>

      <Columns>
        <Columns.LeftHalf>
          <Spacer large>
            {/* Regular fields */}
            {Object.keys(docType.fields).map((fieldName, index) => {
              const field = docType.fields[fieldName]
              const enumType = enumTypes.find(e => e.name === field.type)
              const fieldType = fieldTypes.find(f => f.name === field.type)

              return (
                <React.Fragment key={fieldName}>
                  {index > 0 && <Divider />}
                  <Spacer small>
                    <Spacer row small>
                      <CodeHeading>{fieldName}{field.isArray ? '[]' : ''}</CodeHeading>
                      {field.isDeprecated && <Tag deprecated />}
                      {field.isRequired && <Tag required />}
                      {field.canUpdate && <Tag patchable />}
                    </Spacer>
                    <div>
                      {Array.isArray(field.paragraphs) && field.paragraphs.length > 0 && field.paragraphs.map((p, pIndex) => <Markdown key={pIndex} source={p} />)}
                    </div>
                    {enumType &&
                      <div>
                        <FieldTypeBadge text={`${field.isArray ? 'ARRAY of ' : ''}${enumType.title.toUpperCase()}`} />
                      </div>}
                    {fieldType &&
                      <div>
                        <FieldTypeBadge text={`${field.isArray ? 'ARRAY of ' : ''}${fieldType.title.toUpperCase()}`} />
                      </div>}
                  </Spacer>
                </React.Fragment>
              )
            })}

            {/* Calculated fields */}
            {docType.calculatedFields && Object.keys(docType.calculatedFields).map((fieldName, index) => {
              const field = docType.calculatedFields[fieldName]
              const enumType = enumTypes.find(e => e.name === field.type)
              const fieldType = fieldTypes.find(f => f.name === field.type)

              return (
                <React.Fragment key={fieldName}>
                  <Divider />
                  <Spacer small>
                    <Spacer row small>
                      <CodeHeading>{fieldName}{field.isArray ? '[]' : ''}</CodeHeading>
                      {field.isDeprecated && <Tag deprecated />}
                      <Tag calculated />
                    </Spacer>
                    <div>
                      {Array.isArray(field.paragraphs) && field.paragraphs.length > 0 && field.paragraphs.map((p, pIndex) => <Markdown key={pIndex} source={p} />)}
                    </div>
                    <Para>
                      Calculated fields cannot be provided to a post end-point or updated via a patch.&nbsp;
                      However you can use them in queries.&nbsp;
                      {field.inputFields.length > 0 &&
                        <>
                          This calculated field is based on {field.inputFields.map((f, cIndex) =>
                            <React.Fragment key={f}>{cIndex > 0 ? ', ' : ''}<Code>{f}</Code></React.Fragment>)}.
                        </>}
                    </Para>
                    {enumType &&
                      <div>
                        <FieldTypeBadge text={`${field.isArray ? 'ARRAY of ' : ''}${enumType.title.toUpperCase()}`} />
                      </div>}
                    {fieldType &&
                      <div>
                        <FieldTypeBadge text={`${field.isArray ? 'ARRAY of ' : ''}${fieldType.title.toUpperCase()}`} />
                      </div>}
                  </Spacer>
                </React.Fragment>
              )
            })}
          </Spacer>
        </Columns.LeftHalf>
        <Columns.RightHalf>
          <JsonExamplesPanel docTypeName={docType.name} examples={docType.examples} enumTypes={enumTypes} fieldTypes={fieldTypes} />
        </Columns.RightHalf>
      </Columns>

      <Heading>{`Creating a ${docType.title}`}</Heading>
      <Para>
      But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?
      </Para>
      <Para>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Para>
      <Para>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
      </Para>
      <Para>
      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat
      </Para>
    </PrimaryScaffold>
  )
}
