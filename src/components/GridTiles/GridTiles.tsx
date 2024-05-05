import { styled } from 'styled-components'
import { Tile, TileProps } from './Tile'
import { tilesColors } from '@/styles/tilesColors'

interface GridTilesProps {
  tiles: TileProps[]
  size: 'big' | 'small'
}

export const GridTiles = ({ tiles, size }: GridTilesProps) => {
  return (
    <StyledSection $size={size}>
      {tiles.map((tile, index) => (
        <Tile key={tile.label} size={size} {...tile} color={tilesColors[index]} />
      ))}
    </StyledSection>
  )
}

const StyledSection = styled.section<{ $size: GridTilesProps['size'] }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${(props) => (props.$size === 'big' ? 'space-between' : 'flex-start')};
`
