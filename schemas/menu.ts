import {defineField, defineType} from 'sanity'

import RecipeIcon from '../icons/RecipeIcon'

export default defineType({
  name: 'menu',
  title: 'Menu',
  type: 'document',
  icon: RecipeIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
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
      name: 'price',
      title: 'Price',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'categories',
      title: 'Category',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'category'}],
        },
      ],
    }),
    defineField({
      name: 'status',
      title: 'Is it Available?',
      type: 'boolean',
      initialValue: false,
    }),
  ],

  preview: {
    select: {
      title: `name`,
      media: 'image',
    },
  },
})
