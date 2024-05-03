import Link from 'next/link'
import { styled } from 'styled-components'

export interface TileProps {
  label: string
  link: string
  imageUrl?: string
  color?: string
  size?: 'big' | 'small'
}

export const Tile = ({ label, link, imageUrl, color, size = 'big' }: TileProps) => {
  return (
    <TileContainer $bgi={imageUrl}>
      <TileLink href={link}>
        <TileHeading>{label}</TileHeading>
      </TileLink>
      <TileColor $bgc={color}></TileColor>
    </TileContainer>
  )
}

const TileColor = styled.span<{ $bgc?: string }>`
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.3s;
  width: 100%;
  height: 100%;
  opacity: 0.8;
  background-color: ${(props) => props.$bgc || 'trnasparent'};
`

const TileLink = styled(Link)`
  position: relative;
  z-index: 10;
  align-items: center;
  justify-content: center;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`

const TileHeading = styled.h2`
  width: 100%;
  margin: 0rem;
  padding: 2rem;
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: center;
  color: ${(props) => props.theme.colors.white};
`

const TileContainer = styled.div<{ $bgi?: string }>`
  position: relative;
  width: 100%;
  height: calc((100vw - 2rem) / 1.079);
  margin: 1rem 0;
  overflow: hidden;
  border-radius: 0.5rem;
  box-sizing: border-box;
  background-image: url(${(props) => props.$bgi});
  background-color: ${(props) => props.theme.colors.gray};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: transform 0.5s ease;

  ${(props) =>
    props.theme.minTablet(`
      width: 324px;
      height: 300px;
  `)}

  ${(props) =>
    props.theme.minDesktopSmall(`
      width: 309px;
      height: 286px;
  `)}

  ${(props) =>
    props.theme.minDesktopBig(`
      width: 410px;
      height: 380px;
  `)} 

  
  &:hover {
    transform: scale(1.1);

    ${TileColor} {
      opacity: 0;
    }

    ${TileHeading} {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
`
