import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
      required: true,
    },
    {
      name: 'imageUrl',
      type: 'text',
    },
    {
      name: 'githubLink',
      type: 'text',
      required: true,
    },
    {
      name: 'siteLink',
      type: 'text',
      required: true,
    },
  ],
}
