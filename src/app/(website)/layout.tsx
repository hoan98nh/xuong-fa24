import React from 'react'

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
    <aside>Aside</aside>
    <main>{children}</main>
    </>
  )
}

export default Layout