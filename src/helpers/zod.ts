import { z } from 'zod'

export const validateResponseZod = async (response: ModepharmType) => {
  return modepharmResponseSchema.parse(response)
}

const menuPageSchema = z.object({
  title: z.string(),
  parent: z.string(),
  ['menu_id']: z.number(),
  ['page_id']: z.string(),
  ['site_url']: z.string(),
  ['tile_color']: z.string(),
  ['tile_img']: z.string().nullish(),
  type: z.string(),
  ['full_slug']: z.string()
})

const menuSchema = z.record(
  menuPageSchema.extend({
    ['child-pages']: z.record(menuPageSchema).nullish()
  })
)

const homePageSchema = z.object({
  ['post_title']: z.string(),
  ['post_content']: z.string()
})

const pageSchema = z.object({
  ID: z.number(),
  ['post_content']: z.string(),
  ['post_title']: z.string(),
  ['post_name']: z.string(),
  ['post_parent']: z.number(),
  ['post_type']: z.string(),
  guid: z.string(),
  ['menu_order']: z.number(),
  ['main_image']: z.union([z.string().nullish(), z.boolean()])
})

const pagesSchema = z.record(pageSchema)

const modepharmResponseSchema = z.object({
  menu: menuSchema,
  ['home-page']: homePageSchema,
  pages: pagesSchema
})

export type ModepharmType = z.infer<typeof modepharmResponseSchema>
