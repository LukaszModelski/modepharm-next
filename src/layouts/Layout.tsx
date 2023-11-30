import { Footer } from '@/components/Footer/Footer'

export const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  )
}
