import Link from 'next/link'
import { styled } from 'styled-components'

export default function Custom404() {
  return (
    <StyledSection>
      <h2>Nie mogliśmy znaleźć takiej strony</h2>
      <p>Sprawdź, czy wpisałeś właściwy adres. Jeśli tak to strona, której szukasz już nie istnieje.</p>
      <Link href="/">Powrót na stronę główną</Link>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  margin-top: 64px;
  text-align: center;
`
