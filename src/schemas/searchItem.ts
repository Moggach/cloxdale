import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'searchItem',
  title: 'Search Item',
  type: 'document',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
    })
  ]
})
