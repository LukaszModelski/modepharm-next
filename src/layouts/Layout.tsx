import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import { Menu } from '@/components/Menu/Menu'
import styled from 'styled-components'

export const Layout = ({ children, className }: { children: JSX.Element; className: string }) => {
  return (
    <>
      <Menu data={children.props.modepharmData.menu} />
      <StyledContainer>
        <Header />
        {children}
      </StyledContainer>
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
