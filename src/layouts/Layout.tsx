import { CookiesBar } from '@/components/CookiesBar/CookiesBar'
import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import styled from 'styled-components'

export const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <StyledContainer>
        <Header />
        {children}
      </StyledContainer>
      <CookiesBar />
      <Footer />
    </>
  )
}

const StyledContainer = styled.section`
  margin: 4rem auto;
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
`
