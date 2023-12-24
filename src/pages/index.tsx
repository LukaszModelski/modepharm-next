import { useGlobalContext } from '@/contexts/global/globalContext'
import { ModepharmType, validateResponseZod } from '@/helpers/zod'
import Link from 'next/link'

interface HomeProps {
  modepharmData: ModepharmType
}

export default function Home({ modepharmData }: HomeProps) {
  const { 'home-page': homePage, menu } = modepharmData

  return (
    <div id="page-home">
      <h1>{homePage['post_title']}</h1>
      <div className="breadcrumbs">
        <span className="breadcrumb-item">Strona główna /</span>
      </div>
      <div className="wyswyg-content" dangerouslySetInnerHTML={{ __html: homePage['post_content'] }}></div>
      <section className="grid-tiles">
        {Object.values(menu).map((item) => (
          <Link key={item.title} href={`/${item.full_slug}`}>
            <h2>{item.title}</h2>
          </Link>
        ))}
        {/* {Object.values(menu).map((item) => `/${item.full_slug}`)} */}
        {/* 
      <div ref="tile" v-for="(item, name, i) in fullData.menu" v-if="item.parent == 0" class="tile" v-bind:style="{ backgroundImage: 'url(' + item['tile_img'] + ')' }">
        <router-link 
          v-if="item.type == 'page'"
          :to="{ path: '/' + item.full_slug }"
          class="tile__nav-item"
        >
          <h2>{{item.title}}</h2>
        </router-link>
        <!-- color from wp admin panel -->
        <!-- <div class="tile__color" v-bind:style="{ backgroundColor: item['tile_color'] }"></div> -->

        <!-- color from tiles-colors.js -->
        <div class="tile__color" v-bind:style="{ backgroundColor: tilesColors[i % tilesColors.length] }"></div>
      </div>
    */}
      </section>
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
