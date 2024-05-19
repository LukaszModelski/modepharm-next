import styled from 'styled-components'
import { IconHamburger } from '../Icons/IconHamburger'
import { IconClose } from '../Icons/IconClose'
import React, { Dispatch, SetStateAction, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ModepharmType } from '@/helpers/zod'
import { zIndexes } from '@/styles/zIndexes'

interface MenuProps {
  data: ModepharmType['menu']
  isMenuOpen: boolean
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>
}

interface NavigationProps {
  data: ModepharmType['menu']
  secondary?: boolean
}

export const Menu = ({ data, isMenuOpen, setIsMenuOpen }: MenuProps) => {
  const { asPath } = useRouter()

  // closing menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [asPath])

  const Navigation = ({ data, secondary }: NavigationProps) => {
    return Object.values(data).map((item, index, array) => {
      const LinkComponent = secondary ? StyledSecondaryLink : StyledNavLinkPrimary
      const hasChildLinks = !!item['child-pages']
      const childPages = item['child-pages']

      return (
        <React.Fragment key={item.title}>
          <LinkComponent href={item.full_slug} $lastItem={index === array.length - 1}>
            {item.title}
          </LinkComponent>
          {hasChildLinks && <Navigation secondary={true} data={childPages!} />}
        </React.Fragment>
      )
    })
  }

  return (
    <NavContainer $isopen={isMenuOpen}>
      <IconContainerDesktop onClick={() => setIsMenuOpen((prev) => !prev)}>
        {isMenuOpen ? <IconCloseDesktop /> : <IconHamburger />}
      </IconContainerDesktop>
      <IconContainerMobile>
        {isMenuOpen && <IconClosedMobile onClick={() => setIsMenuOpen(false)} />}
      </IconContainerMobile>
      <Nav>
        <StyledNavLinkPrimary href={'/'} $noBorder={true}>
          Strona główna
        </StyledNavLinkPrimary>
        <Navigation data={data} />
      </Nav>
    </NavContainer>
  )
}

const NavContainer = styled.div<{ $isopen: boolean }>`
  position: fixed;
  z-index: ${zIndexes.menu};
  top: 0;
  right: ${(props) => (props.$isopen ? '0' : '-300')}px;
  width: 300px;
  max-width: 100%;
  transition: right 0.3s ease-in;

  ${(props) =>
    props.theme.minTablet(`
        right: ${props.$isopen ? '0' : '-400'}px;
        width: 400px;
    `)}
`

const Nav = styled.nav`
  height: 100vh;
  max-width: 100%;
  background-color: ${(props) => props.theme.colors.gray};
  padding: 15px 30px;
  box-sizing: border-box;
  overflow-y: auto;

  ${(props) =>
    props.theme.minTablet(`
      padding: 30px;
    `)}
`

const StyledNavLinkPrimary = styled(Link)<{ $lastItem?: boolean; $noBorder?: boolean }>`
  position: relative;
  display: block;
  padding: 15px 20px 15px 0;
  ${(props) => !props.$noBorder && 'border-top: 1px solid rgba(255, 255, 255, 0.15);'}
  color: ${(props) => props.theme.colors.white};
  font-size: 15px;
  font-weight: 700;

  &:hover {
    color: ${(props) => props.theme.colors.pink};
  }
`

const StyledSecondaryLink = styled(StyledNavLinkPrimary)<{ $lastItem?: boolean; $noBorder?: boolean }>`
  margin-left: 20px;
  padding: 3px 20px 3px 10px;
  border-top: 0;
  font-weight: 400;
  ${(props) => props.$lastItem && 'padding-bottom: 15px;'}

  &::before {
    content: '•';
    position: absolute;
    display: block;
    width: 1px;
    height: 1px;
    left: -10px;
    top: 4px;
  }
`

const IconContainerDesktop = styled.div`
  position: absolute;
  top: 0;
  left: -60px;
  width: 28px;
  height: 40px;
  padding: 15px;
  cursor: pointer;
`
const IconCloseDesktop = styled(IconClose)`
  display: none;

  ${(props) =>
    props.theme.minTablet(`
        display: block;
    `)}
`

const IconContainerMobile = styled(IconContainerDesktop)`
  left: unset;
  right: 8px;
  width: 22px;
`

const IconClosedMobile = styled(IconClose)`
  display: block;

  ${(props) =>
    props.theme.minTablet(`
        display: none;
    `)}

  path {
    fill: ${(props) => props.theme.colors.white};
  }
`
