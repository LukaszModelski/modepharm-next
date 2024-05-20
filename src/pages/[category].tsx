import { ModepharmType, validateResponseZod } from '@/helpers/zod'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Menu } from '@/components/Menu/Menu'
import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs'
import { GridTiles } from '@/components/GridTiles/GridTiles'
import { Dispatch, SetStateAction } from 'react'

interface CategoryPageProps {
  modepharmData: ModepharmType
  isMenuOpen: boolean
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>
}

export default function CategoryPage({ modepharmData, isMenuOpen, setIsMenuOpen }: CategoryPageProps) {
  const { pages, menu } = modepharmData
  const {
    query: { category }
  } = useRouter()

  const categoryPage = typeof category === 'string' && pages[category]
  const subMenu = typeof category === 'string' && menu[category]['child-pages']

  if (!categoryPage) {
    // TODO: redirect to 404
    return <h1>Should be 404 page</h1>
  }

  const { post_title: categoryTitle, post_content: categoryContent, meta_desc: metaDesc } = categoryPage
  const breadcrumbsItems = [{ label: 'Strona Główna', link: '/' }, { label: categoryTitle }]

  const tiles = Object.values(subMenu || {}).map((item) => ({
    label: item.title,
    link: `/${item.full_slug}`,
    imageUrl: item.tile_img || undefined,
    color: item.tile_color
  }))

  return (
    <>
      <Head>
        <title>{categoryTitle}</title>
        <meta name="description" content={metaDesc}></meta>
      </Head>
      <Menu data={modepharmData.menu} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <h1>{categoryTitle}</h1>
      <Breadcrumbs items={breadcrumbsItems} />
      <div className="wyswyg-content" dangerouslySetInnerHTML={{ __html: categoryContent }}></div>
      <GridTiles tiles={tiles} size="small" />
    </>
  )
}

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { category: 'audyty-konsultacje-szkolenia' } },
      { params: { category: 'o-nas' } },
      { params: { category: 'oferta-dla-hurtowni' } },
      { params: { category: 'programy-oszczednosciowe' } },
      { params: { category: 'walidacja-i-kwalifikacje-w-przemysle' } },
      { params: { category: 'walidacja-systemow-skomputeryzowanych' } }
    ],
    fallback: false
  }
}

export const getStaticProps = async () => {
  let modepharmData: ModepharmType
  let validatedData: ModepharmType | null = null

  try {
    const res = await fetch('https://www.modepharm.pl/cms/wp-json/modepharm/all')
    modepharmData = await res.json()
    validatedData = await validateResponseZod(modepharmData)
  } catch (error) {
    console.error(error)
  }

  return {
    props: { modepharmData: validatedData }
  }
}
