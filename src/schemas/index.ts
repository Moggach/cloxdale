import { SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import post from './post'
import credit from './credit'


export const schemaTypes = [post, blockContent, credit]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, blockContent, credit],
}
