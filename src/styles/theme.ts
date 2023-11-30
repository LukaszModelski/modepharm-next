const endpoints = {
  tablet: 767,
  desktopSmall: 1100,
  desktopBig: 1468
}

export const colors = {
  gray: '#363636',
  grayLight: '#585858',
  white: '#fff',
  pink: '#f2849e',
  modepharm: '#007cb0'
}

export const theme = {
  endpoints,
  colors,
  minTablet: (styles: string) => `
      @media screen and (min-width: ${endpoints.tablet}px) {
        ${styles}
      }
    `,
  minDesktopSmall: (styles: string) => `
    @media screen and (min-width: ${endpoints.desktopSmall}px) {
      ${styles}
    }
  `,
  minDesktopBig: (styles: string) => `
    @media screen and (min-width: ${endpoints.desktopBig}px) {
      ${styles}
    }
  `
}
