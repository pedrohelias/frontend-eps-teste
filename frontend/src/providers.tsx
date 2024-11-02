'use client'
import { store } from '@/store/store'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { ConfigProvider } from 'antd'
import { Provider } from 'react-redux'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#22c55e',
          }
        }}
      >
        <AntdRegistry>{children}</AntdRegistry>
      </ConfigProvider>
    </Provider>
  )
}
