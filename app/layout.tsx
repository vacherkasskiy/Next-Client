import React from "react";
import './null.css'
import './global.css'

export const metadata = {
  title: 'Next pet project',
  description: 'Description',
}

interface RootLayoutProps {
  children: React.ReactNode,
}

const RootLayout = ({children}: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
