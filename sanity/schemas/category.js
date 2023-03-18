import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Menu Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'Category name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image of Category',
      type: 'Image of Category',
    }),
  ],
})
