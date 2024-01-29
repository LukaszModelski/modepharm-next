import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'

export const Header = () => {
  const { pathname } = useRouter()

  if (pathname !== '/') {
    return (
      <Link href={'/'}>
        <StyledHeader>modepharm</StyledHeader>
      </Link>
    )
  }

  return <StyledHeader>modepharm</StyledHeader>
}

const StyledHeader = styled.header`
  margin: 0 0 26px;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.modepharm};
  font-size: 2rem;
  font-weight: 700;
  padding: 2px 10px;
  text-align: right;
  font-family: 'Arial';
`
