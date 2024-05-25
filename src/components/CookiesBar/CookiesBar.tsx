import Link from 'next/link'
import styled from 'styled-components'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'

const cookiesAcceptedName = 'cookiesAccepted'

export const CookiesBar = () => {
  const [showCookieBar, setShowCookieBar] = useState(false)

  useEffect(() => {
    const cookiesAccepted = Cookies.get(cookiesAcceptedName)
    setShowCookieBar(!cookiesAccepted)
  }, [])

  if (!showCookieBar) {
    return <></>
  }

  return (
    <StyledCookies>
      <StyledText>
        Informacje na temat polityki prywatności zamieszczone są
        <Link href="./Polityka-prywatności-MODEPHARM-Jacek-Modelski.pdf" target="_blank">
          <b> tutaj</b>
        </Link>
      </StyledText>
      <AcceptButton
        onClick={() => {
          setShowCookieBar(false)
          Cookies.set(cookiesAcceptedName, 'whatever', { expires: 100 })
        }}
      >
        Akceptuję
      </AcceptButton>
    </StyledCookies>
  )
}

const StyledCookies = styled.div`
  position: fixed;
  z-index: 9999;
  left: 0;
  bottom: 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 20px 50px;
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.modepharm};
  font-size: 13px;

  ${(props) =>
    props.theme.minTablet(`
      flex-wrap: nowrap;
    `)}
`

const StyledText = styled.p`
  margin: 0;
  font-size: 14px;
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
  line-height: initial;

  ${(props) =>
    props.theme.minTablet(`
      width: auto;
      margin-bottom: 0;
      font-size: 16px;
    `)}
`

const AcceptButton = styled.button`
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.grayLight};
  width: auto;
  height: 40px;
  margin: 0 20px;
  padding: 0 25px;
  border-radius: 4px;
  border-width: 0;
  font-size: 14px;
  font-weight: bold;
  transition: all 0.3s;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    background: ${(props) => props.theme.colors.grayHover};
  }
`
