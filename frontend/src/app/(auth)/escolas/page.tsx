'use client'

import type { TableProps } from 'antd'
import { Button, Table } from 'antd'
import { useRouter } from 'next/navigation'

interface DataType {
  key: string
  name: string
  director: string
  numberStudents: number
}

export default function Schools() {
  const router = useRouter()

  const columns: TableProps<DataType>['columns'] = [
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
      render: text => <strong>{text}</strong>
    },
    {
      title: 'Diretor',
      dataIndex: 'director',
      key: 'director'
    },
    {
      title: 'Quantidade de alunos',
      dataIndex: 'numberStudents',
      key: 'numberStudents'
    }
  ]

  const data: DataType[] = [
    {
      key: '1',
      name: 'Encantare 1',
      director: 'Lucas',
      numberStudents: 200
    },
    {
      key: '2',
      name: 'Encantare 2',
      director: 'Lopes',
      numberStudents: 400
    },
    {
      key: '3',
      name: 'Encantare 3',
      director: 'Frazão',
      numberStudents: 800
    }
  ]

  const handleRowClick = (record: DataType) => {
    router.push(`/escolas/${record.key}`) // Redireciona para a página da escola
  }

  return (
    <div className='mx-6 rounded-lg bg-white p-6 shadow-lg'>
      <div className='mb-4 flex items-center justify-between'>
        <h2 className='text-lg font-semibold'>Gerenciamento de escolas</h2>
        <Button type='primary'>Adicionar escola</Button>
      </div>
      <Table<DataType>
        columns={columns}
        dataSource={data}
        pagination={false}
        onRow={record => ({
          onClick: () => handleRowClick(record)
        })}
        rowClassName='hover:bg-gray-100 transition duration-200 cursor-pointer'
        bordered
      />
    </div>
  )
}
