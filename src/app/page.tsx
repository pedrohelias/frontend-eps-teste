'use client'

import {
  decrement,
  increment,
  selectedValue
} from '@/store/slices/counterSlice'
import { Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'

export default function Home() {
  const count = useSelector(selectedValue)
  const dispatch = useDispatch()

  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4'>
      <div className='w-full max-w-md rounded-lg bg-white p-8 text-center shadow-lg'>
        <h1 className='mb-4 text-2xl font-semibold'>
          Teste TailwindCSS + Ant Design + Redux
        </h1>
        <h2 className='mb-6 text-lg'>
          O valor da contagem é{' '}
          <span className='font-bold text-blue-600'>{count}</span>
        </h2>

        <div className='flex gap-4'>
          <Button onClick={() => dispatch(increment())} className='w-full'>
            Aumentar
          </Button>
          <Button
            type='primary'
            onClick={() => dispatch(decrement())}
            className='w-full'
          >
            Diminuir
          </Button>
        </div>
      </div>
    </div>
  )
}
