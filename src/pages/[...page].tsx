import { ModepharmType, validateResponseZod } from '@/helpers/zod'
import { useRouter } from 'next/router'

interface PageProps {
  modepharmData: ModepharmType
}

export default function Page({ modepharmData }: PageProps) {
  const { pages } = modepharmData
  const {
    query: { page: pageQuery }
  } = useRouter()

  const pagePath = pageQuery && Array.isArray(pageQuery) && pageQuery.join('/')
  const page = pagePath && pages[pagePath]

  if (!page) {
    return <></>
  }

  return (
    <>
      <h1>{page['post_title']}</h1>
      <p>{page['post_content']}</p>
    </>
  )
}

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { page: ['audyty-konsultacje-szkolenia', 'audyty-i-analiza-zgodnosci'] } },
      { params: { page: ['audyty-konsultacje-szkolenia', 'przydatne-linki'] } },
      { params: { page: ['audyty-konsultacje-szkolenia', 'szkolenia-z-zakresu-kwalifikacji-i-walidacji'] } },
      { params: { page: ['oferta-dla-hurtowni', 'analiza-ryzyka-procesow-magazynowych'] } },
      { params: { page: ['oferta-dla-hurtowni', 'kwalifikacja-pomieszczen-magazynowych'] } },
      { params: { page: ['oferta-dla-hurtowni', 'mapowanie-rozkladu-temperatury'] } },
      { params: { page: ['oferta-dla-hurtowni', 'walidacja-systemow-monitorowania-parametrow-klimatycznych'] } },
      { params: { page: ['oferta-dla-hurtowni', 'walidacja-systemow-skomputeryzowanych-zarzadzania-hurtownia'] } },
      { params: { page: ['programy-oszczednosciowe', 'audyt-pracy-systemu-pary-wodnej'] } },
      { params: { page: ['programy-oszczednosciowe', 'audyt-pracy-systemu-sprezonego-powietrza'] } },
      { params: { page: ['programy-oszczednosciowe', 'filtry-do-powietrza'] } },
      { params: { page: ['programy-oszczednosciowe', 'optymalizacja-zuzycia-wody'] } },
      { params: { page: ['walidacja-i-kwalifikacje-w-przemysle', 'kwalifikacja-pomieszczen-czystych'] } },
      { params: { page: ['walidacja-i-kwalifikacje-w-przemysle', 'kwalifikacje-urzadzen-i-systemow-inzynieryjnych'] } },
      { params: { page: ['walidacja-i-kwalifikacje-w-przemysle', 'waidacja-systemow-skomputeryzowanych'] } },
      { params: { page: ['walidacja-i-kwalifikacje-w-przemysle', 'walidacja-czyszczenia-srodki-czyszczace-diversey'] } },
      { params: { page: ['walidacja-i-kwalifikacje-w-przemysle', 'walidacja-procesow-wytwarzania'] } },
      { params: { page: ['walidacja-systemow-skomputeryzowanych', 'walidacja-arkuszy-kalkulacyjnych'] } },
      { params: { page: ['walidacja-systemow-skomputeryzowanych', 'walidacja-systemow-laboratoryjnych'] } },
      { params: { page: ['walidacja-systemow-skomputeryzowanych', 'walidacja-systemow-moitorujaceych-parametry-klimatyczne'] } },
      { params: { page: ['walidacja-systemow-skomputeryzowanych', 'walidacja-systemow-skomputeryzowanych-klasy-erp'] } },
      { params: { page: ['walidacja-systemow-skomputeryzowanych', 'walidacja-systemow-zarzadzania-hurtownia'] } }
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
