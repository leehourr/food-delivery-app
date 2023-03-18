import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name of dish',
      type: 'String',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short_description',
      title: 'Short description',
      type: 'String',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'Price',
      title: 'Price of the Dish in dollar',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
