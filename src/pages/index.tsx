import Head from 'next/head'
import { ModepharmType, validateResponseZod } from '@/helpers/zod'
import { stripHtmlfromTags } from '@/helpers/stripHtml'
import { Menu } from '@/components/Menu/Menu'
import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs'
import { GridTiles } from '@/components/GridTiles/GridTiles'
import { Dispatch, SetStateAction } from 'react'

interface HomeProps {
  modepharmData: ModepharmType
  isMenuOpen: boolean
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>
}

export default function Home({ modepharmData, isMenuOpen, setIsMenuOpen }: HomeProps) {
  const { 'home-page': homePage, menu } = modepharmData
  const { post_title: pageTitle, post_content: pageContent } = homePage
  const breadcrumbsItems = [{ label: 'Strona Główna' }]
  const tiles = Object.values(menu).map((item) => ({
    label: item.title,
    link: `/${item.full_slug}`,
    imageUrl: item.tile_img || undefined,
    color: item.tile_color
  }))

  return (
    <div id="page-home">
      <Head>
        <title>{pageTitle}</title>
        {pageContent && <meta name="description" content={stripHtmlfromTags(pageContent)}></meta>}
      </Head>
      <Menu data={modepharmData.menu} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <h1>{pageTitle}</h1>
      <Breadcrumbs items={breadcrumbsItems} />
      <div className="wyswyg-content" dangerouslySetInnerHTML={{ __html: pageContent }}></div>
      <GridTiles tiles={tiles} size="big" />
    </div>
  )
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
