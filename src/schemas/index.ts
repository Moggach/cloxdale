import { SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import credit from './credit'
import heroSection from './heroSection'
import contact from './contact'




export const schemaTypes = [blockContent, credit, heroSection]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContent, credit, heroSection, contact],
}
