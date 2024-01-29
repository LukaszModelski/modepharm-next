import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  //layout
  .container {
    margin: 0 auto;
    box-sizing: border-box;
    padding: 0 1rem;

    ${(props) =>
      props.theme.minTablet(`
      max-width: ${props.theme.endpoints.tablet}px;
      padding: 0 2rem;
    `)}

    ${(props) =>
      props.theme.minDesktopSmall(`
      max-width: ${props.theme.endpoints.desktopSmall}px;
    `)}
    
    ${(props) =>
      props.theme.minDesktopBig(`
      max-width: ${props.theme.endpoints.desktopBig}px;
      padding: 0 4rem;
    `)}
  }

  // typography
  body {
    font-family: '__Source_Sans_3_eb3c34';
    box-sizing: border-box;
    font-weight: 300;
    position: absolute;
    overflow-x: hidden;
    margin: 0;
    box-sizing: border-box;
    width: 100%;

  }

  h1 {
    margin-top: 0;
    margin-bottom: 30px;
    font-size: 2rem;
    font-weight: 700;

    ${(props) =>
      props.theme.minTablet(`
      font-size: 3rem;
    `)}
  }

  h2.company-name {
    font-size: 2rem;
    font-weight: 700;
    padding: 2px 10px;
    background-color: ${(props) => props.theme.colors.modepharm};
    color: #fff;
    text-align: right;
    font-family: "Arial";
  }

  h1, h2, h3, h4, h5 {
    color: ${(props) => props.theme.colors.grayLight};
  }

  p {
    font-size: 1.0rem;
    line-height: 1.8rem;
    font-weight: 300;

    ${(props) =>
      props.theme.minTablet(`
      font-size: 1.15rem;
    `)}
  }

  a {
    text-decoration: none;
    color: unset;
    font-weight: 400;
  }

  li {
    font-size: 1.0rem;
    line-height: 1.8rem;
    margin-bottom: 5px;

    ${(props) =>
      props.theme.minTablet(`
      font-size: 1.15rem;
    `)}
  }

  .wyswyg-content {
    margin: 50px 0;
  }
`
