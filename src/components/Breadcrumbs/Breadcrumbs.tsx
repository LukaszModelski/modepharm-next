import Link from 'next/link'
import { styled } from 'styled-components'

interface BreadcrumbsProps {
  items: {
    label: string
    link?: string
  }[]
}

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <StyledBreadcrumbs>
      {items.map((item, index) =>
        item?.link ? (
          <Link href={item.link} key={item.label}>
            <StyledSpan $first={index === 0}>{item.label}</StyledSpan>
          </Link>
        ) : (
          <StyledSpan $first={index === 0} key={item.label}>
            {item.label}
          </StyledSpan>
        )
      )}
    </StyledBreadcrumbs>
  )
}

const StyledBreadcrumbs = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 5px;
  border-top: 1px solid #d3d3d3;
  border-bottom: 1px solid #d3d3d3;
`

const StyledSpan = styled.span<{ $first: boolean }>`
  display: block;
  padding: 5px 10px;
  font-size: 1.15rem;

  &:before {
    content: '/';
    position: relative;
    right: 10px;
  }

  ${(props) =>
    props.$first &&
    `
      &:before {
        content: none;
      }
  `}
`
