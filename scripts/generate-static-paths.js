const fs = require('fs/promises')
const path = require('path')

const fetchModepharmData = async () => {
  const response = await fetch('https://www.modepharm.pl/cms/wp-json/modepharm/all')
  const modepharmData = await response.json()
  return modepharmData
}

const generateStaticPaths = async () => {
  const modepharmData = await fetchModepharmData()
  const { pages } = modepharmData
  const pagesArray = Object.keys(pages).sort()
  const categoryPages = pagesArray.filter((p) => !p.includes('/'))
  const commonPages = pagesArray.filter((p) => p.includes('/'))

  console.log(pagesArray)

  fs.writeFile(
    path.resolve('scripts/static-paths-category.js'),
    `
    export const getStaticPaths = async () => {
      return {
        paths: [
          ${categoryPages.map((p) => `{params: { category: '${p}' }}`)}
        ],
        fallback: false
      } 
    }
    `
  )

  fs.writeFile(
    path.resolve('scripts/static-paths-page.js'),
    `export const getStaticPaths = async () => {
      return {
        paths: [
          ${commonPages.map((p) => `{params: { page: ['${p.split('/')[0]}','${p.split('/')[1]}'] }}`)}
        ],
        fallback: false
      } 
    }
  `
  )
}

generateStaticPaths()
