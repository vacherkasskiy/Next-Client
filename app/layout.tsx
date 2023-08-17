'use client'

import React from "react";
import './null.css'
import './global.css'
import {Provider} from "react-redux";
import setupStore from "@/store/store";

interface RootLayoutProps {
  children: React.ReactNode,
}

const store = setupStore()

const RootLayout = ({children}: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout
