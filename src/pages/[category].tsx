import { useGlobalContext } from '@/contexts/global/globalContext'
import { ModepharmType, validateResponseZod } from '@/helpers/zod'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface CategoryPageProps {
  modepharmData: ModepharmType
}

export default function CategoryPage({ modepharmData }: CategoryPageProps) {
  const { pages, menu } = modepharmData
  const {
    query: { category }
  } = useRouter()

  const categoryPage = typeof category === 'string' && pages[category]
  const subMenu = typeof category === 'string' && menu[category]['child-pages']

  if (!categoryPage) {
    return <h1>Should be 404 page</h1>
  }

  return (
    <>
      <h1>{categoryPage['post_title']}</h1>
      <p>{categoryPage['post_content']}</p>
      {subMenu &&
        Object.values(subMenu).map((item) => (
          <Link key={item.title} href={`/${item.full_slug}`}>
            <h2>{item.title}</h2>
          </Link>
        ))}
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
