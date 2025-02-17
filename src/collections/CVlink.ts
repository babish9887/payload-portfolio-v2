import type { CollectionConfig } from 'payload'

export const CVLink: CollectionConfig = {
  slug: 'cvlink',
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'link',
      type: 'text',
      required: true,
    },
  ],
}
