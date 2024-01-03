import { SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import post from './post'
import credit from './credit'
import heroSection from './heroSection'
import contact from './contact'




export const schemaTypes = [post, blockContent, credit, heroSection]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, blockContent, credit, heroSection, contact],
}
