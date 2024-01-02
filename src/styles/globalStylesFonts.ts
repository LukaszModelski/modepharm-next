import { createGlobalStyle } from 'styled-components'

export const GlobalStylesFonts = createGlobalStyle`
  /* source-sans-pro-300 - latin_latin-ext */
  @font-face {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 300;
    src: url('./fonts/source-sans-pro-v12-latin_latin-ext-300.eot'); /* IE9 Compat Modes */
    src: local('Source Sans Pro Light'), local('SourceSansPro-Light'),
         url('./fonts/source-sans-pro-v12-latin_latin-ext-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('./fonts/source-sans-pro-v12-latin_latin-ext-300.woff2') format('woff2'), /* Super Modern Browsers */
         url('./fonts/source-sans-pro-v12-latin_latin-ext-300.woff') format('woff'), /* Modern Browsers */
         url('./fonts/source-sans-pro-v12-latin_latin-ext-300.ttf') format('truetype'), /* Safari, Android, iOS */
         url('./fonts/source-sans-pro-v12-latin_latin-ext-300.svg#SourceSansPro') format('svg'); /* Legacy iOS */
  }
  /* source-sans-pro-regular - latin_latin-ext */
  @font-face {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    src: url('./fonts/source-sans-pro-v12-latin_latin-ext-regular.eot'); /* IE9 Compat Modes */
    src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'),
         url('./fonts/source-sans-pro-v12-latin_latin-ext-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('./fonts/source-sans-pro-v12-latin_latin-ext-regular.woff2') format('woff2'), /* Super Modern Browsers */
         url('./fonts/source-sans-pro-v12-latin_latin-ext-regular.woff') format('woff'), /* Modern Browsers */
         url('./fonts/source-sans-pro-v12-latin_latin-ext-regular.ttf') format('truetype'), /* Safari, Android, iOS */
         url('./fonts/source-sans-pro-v12-latin_latin-ext-regular.svg#SourceSansPro') format('svg'); /* Legacy iOS */
  }
  /* source-sans-pro-700 - latin_latin-ext */
  @font-face {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 700;
    src: url('./fonts/source-sans-pro-v12-latin_latin-ext-700.eot'); /* IE9 Compat Modes */
    src: local('Source Sans Pro Bold'), local('SourceSansPro-Bold'),
         url('./fonts/source-sans-pro-v12-latin_latin-ext-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('./fonts/source-sans-pro-v12-latin_latin-ext-700.woff2') format('woff2'), /* Super Modern Browsers */
         url('./fonts/source-sans-pro-v12-latin_latin-ext-700.woff') format('woff'), /* Modern Browsers */
         url('./fonts/source-sans-pro-v12-latin_latin-ext-700.ttf') format('truetype'), /* Safari, Android, iOS */
         url('./fonts/source-sans-pro-v12-latin_latin-ext-700.svg#SourceSansPro') format('svg'); /* Legacy iOS */
  }
`
