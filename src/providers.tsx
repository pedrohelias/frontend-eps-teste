'use client'
import { store } from '@/store/store'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { Provider } from 'react-redux'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <AntdRegistry>{children}</AntdRegistry>
    </Provider>
  )
}
