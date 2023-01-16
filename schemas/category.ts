import {defineField, defineType} from 'sanity'
import CategoryIcon from '../icons/CategoryIcon'

export default defineType({
  name: 'category',
  title: 'Categories',
  type: 'document',
  icon: CategoryIcon,
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
  ],

  preview: {
    select: {
      title: `name`,
      media: 'image',
    },
  },
})
