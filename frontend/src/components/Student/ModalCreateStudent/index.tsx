'use client'

import { createStudent, fetchStudents } from '@/store/slices/studentSlice'
import { AppDispatch, RootState } from '@/store/store'
import { CreateStudentType } from '@/types/Students'
import { Button, Form, Input, InputNumber, Modal, Select } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

type Props = {
  isModalOpen: boolean
  setIsModalOpen: (state: boolean) => void
}

const optsPeriod = [
  {
    value: 'Integral',
    label: 'Integral'
  },
  {
    value: 'Parcial',
    label: 'Parcial'
  }
]

const turnType = [
  {
    value: 'Matutino',
    label: 'Matutino'
  },
  {
    value: 'Verspertino',
    label: 'Vespertino'
  }
]

const classType = [
  {
    value: 'Berçário',
    label: 'Berçário'
  },
  {
    value: 'Creche',
    label: 'Creche'
  },
  {
    value: 'Escola',
    label: 'Escola'
  },
  {
    value: 'Reforço',
    label: 'Reforço'
  }
  
]

export default function ModalCreateStudent({
  isModalOpen,
  setIsModalOpen
}: Props) {
  const [form] = Form.useForm<CreateStudentType>()

  const handleCancel = () => {
    form.resetFields()
    setIsModalOpen(false)
  }

  const dispatch = useDispatch<AppDispatch>()
  const { loading } = useSelector((state: RootState) => state.student)

  const handleCreateStudent = async () => {
    try {
      const values = await form.validateFields()
      const action = await dispatch(createStudent(values))

      if (createStudent.rejected.match(action)) {
        toast.error(
          `Erro ao criar Aluno: ${action.payload || 'Erro ao criar Aluno'}`
        )
      } else {
        setIsModalOpen(false)
        dispatch(fetchStudents());
        toast.success(`Aluno criado com sucesso`)
        form.resetFields()
      }
    } catch (error) {
      console.log('Erro ao validar o formulário:', error)
    }
  }

  return (
    <Modal
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
      className='rounded-lg'
      destroyOnClose={true}
    >
      <Form
        form={form}
        layout='vertical'
        onFinish={handleCreateStudent}
        className='space-y-4'
      >
        <Form.Item
          name='name'
          label='Nome do Aluno'
          rules={[
            { required: true, message: 'Por favor, insira o nome do Aluno' }
          ]}
        >
          <Input placeholder='Nome do Aluno' />
        </Form.Item>

        <Form.Item
          name='turno'
          label='Turno'
          rules={[
            {
              required: true,
              message: 'Por favor, insira um turno válido'
            }
          ]}
        >
          <Select placeholder='Turno do Aluno'
            options={turnType}
          />
        </Form.Item>

        <Form.Item
          name='Periodo'
          label='Periodo'
          rules={[
            {
              required: true,
              message: 'Por favor, insira um periodo válido'
            },
          ]}
        >
          <Select placeholder='Periodo do Aluno'
            options={optsPeriod}
          />
        </Form.Item>

        <Form.Item
          name='Turma'
          label='Turma'
          rules={[
            {
              required: true,
              message: 'Por favor, insira uma Turma válida'
            },
          ]}
        >
          <Select placeholder='Turma do Aluno'
            options={classType}
          />
        </Form.Item>


        <div className='flex justify-end'>
          <Button onClick={handleCancel} className='mr-2'>
            Cancelar
          </Button>
          <Button
            type='primary'
            htmlType='submit'
            loading={loading}
            className='bg-blue-500 hover:bg-blue-600'
          >
            Cadastrar
          </Button>
        </div>
      </Form>
    </Modal>
  )
}
