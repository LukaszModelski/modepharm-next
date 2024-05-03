import { styled } from 'styled-components'
import { Tile, TileProps } from './Tile'

interface GridTilesProps {
  tiles: TileProps[]
  size: 'big' | 'small'
}

export const GridTiles = ({ tiles, size }: GridTilesProps) => {
  return (
    <StyledSection>
      {tiles.map((tile) => (
        <Tile key={tile.label} color="red" {...tile} />
      ))}
    </StyledSection>
  )
}

const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
