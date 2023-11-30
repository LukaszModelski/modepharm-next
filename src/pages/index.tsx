import { useGlobalContext } from '@/contexts/global/globalContext'
import Link from 'next/link'

export default function Home() {
  const { 'home-page': homePage, menu } = useGlobalContext()

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

  return (
    <>
      <h1>home page</h1>
      <Link href="/test">Test1</Link>
      <hr />
      <Link href="/test1">Test2</Link>
    </>
  )
}
