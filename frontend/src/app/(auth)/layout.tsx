'use client'

import Sidebar from "@/components/Sidebar"

type Props = {
  children: React.ReactNode
}

export default function AuthLayout({ children }: Props) {
  // TODO: autenticação

  return (
    <div className='flex min-h-screen'>
      <Sidebar />
      <div className='flex flex-1 items-center justify-center p-6'>
        {children}
      </div>
    </div>
  )
}
