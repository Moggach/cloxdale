import { SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import credit from './credit'
import heroSection from './heroSection'
import contact from './contact'
import nonsense from './nonsense'
import searchItem from './searchItem'






export const schemaTypes = [blockContent, credit, heroSection]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContent, credit, heroSection, contact, nonsense, searchItem],
}
