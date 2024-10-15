import { ThemeProvider } from '@/components/common/ThemProvider'
import Sidebar from '@/components/layout/Sidebar'
import React, { Children } from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="wrappe grid grid-cols-[300px,minmax(0,1fr)] h-screen">
      <Sidebar />
      <main className='p-5'> 
          {children} 
      </main>
    </div>
  )
}

export default layout