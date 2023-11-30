import styled from 'styled-components'

export const Footer = () => (
  <StyledFooter>
    <div className="container">
      <div className="contact-form">
        <h2>Wyślij zapytanie</h2>
        <iframe src="https://modepharm.pl/contact-form/form.php"></iframe>
      </div>
      <div className="contact-details">
        <h2>Dane kontaktowe</h2>
        <p>Modepharm Jacek Modelski</p>
        <p>ul. Plauta 11, 60-461 Poznań,</p>
        <p>tel.: 607143434, 603163901</p>
        <p>email: biuro@modepharm.pl</p>
        <p>NIP: 7811215436</p>
        <br />
        <a href="./Polityka-prywatności-MODEPHARM-Jacek-Modelski.pdf" target="_blank">
          <p>
            <b>Polityka prywatności</b>
          </p>
        </a>
      </div>
    </div>
  </StyledFooter>
)

const StyledFooter = styled.footer`
  background-color: #f6f6f6;
  padding: 2rem 0;

  ${(props) =>
    props.theme.minTablet(`
      padding: 3.5rem 0;
    `)}

  h2 {
    text-transform: uppercase;
    font-size: 1.25rem;
    letter-spacing: 4px;
    font-weight: 700;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
  }

  .contact-form {
    width: 100%;
    ${(props) =>
      props.theme.minTablet(`
        width: 66.6%;
        padding-right: 70px;
        box-sizing: border-box;
    `)}
  }

  .contact-details {
    width: 100%;
    ${(props) =>
      props.theme.minTablet(`
        width: 33.3%;
      `)}

    p {
      margin: 0;
    }
  }

  iframe {
    width: 100%;
    height: 500px;
    border: 0;

    ${(props) =>
      props.theme.minTablet(`
        height: 400px;
    `)}
  }
`
