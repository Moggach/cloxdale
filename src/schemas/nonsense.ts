import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'nonsense',
  title: 'Nonsense',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'blockContent'
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
        name: 'videoLink',
        title: 'Video Link',
        type: 'string',
      }),
    defineField({
      name: 'externalLink',
      title: 'External link',
      type: 'string',
    }),
  ],

})
