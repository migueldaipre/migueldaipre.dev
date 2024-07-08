import { getCollection, type CollectionEntry } from 'astro:content'
import ogApi from '@thewebforge/astro-og-images'

export const prerender = true

const entries = await getCollection('posts')

export const { getStaticPaths } = ogApi({
  entries: entries,
  param: 'ogimage',
  template: 'simple',

  getImageOptions: async ({ id, data }: CollectionEntry<'posts'>) => {
    return {
      path: id,
      title: {
        text: data.title,
      },
      description: {
        text: data.description
      },
    };
  },
});