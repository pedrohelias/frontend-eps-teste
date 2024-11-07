'use client'

import { createSchool, fetchSchools } from '@/store/slices/schoolSlice'
import { AppDispatch, RootState } from '@/store/store'
import { CreateSchoolType } from '@/types/Schools'
import { Button, Form, Input, InputNumber, Modal } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

type Props = {
  isModalOpen: boolean
  setIsModalOpen: (state: boolean) => void
}

export default function ModalCreateSchool({
  isModalOpen,
  setIsModalOpen
}: Props) {
  const [form] = Form.useForm<CreateSchoolType>()

  const handleCancel = () => {
    form.resetFields()
    setIsModalOpen(false)
  }

  const dispatch = useDispatch<AppDispatch>()
  const { loading } = useSelector((state: RootState) => state.school)

  const handleCreateSchool = async () => {
    try {
      const values = await form.validateFields()
      const action = await dispatch(createSchool(values))

      if (createSchool.rejected.match(action)) {
        toast.error(
          `Erro ao criar escola: ${action.payload || 'Erro ao criar escola'}`
        )
      } else {
        setIsModalOpen(false)
        dispatch(fetchSchools());
        toast.success(`Escola criada com sucesso`)
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
        onFinish={handleCreateSchool}
        className='space-y-4'
      >
        <Form.Item
          name='name'
          label='Nome da Escola'
          rules={[
            { required: true, message: 'Por favor, insira o nome da escola' }
          ]}
        >
          <Input placeholder='Nome da Escola' />
        </Form.Item>

        <Form.Item
          name='directorEmail'
          label='E-mail do Diretor'
          rules={[
            {
              required: true,
              message: 'Por favor, insira o e-mail do diretor'
            },
            { type: 'email', message: 'Por favor, insira um e-mail válido' }
          ]}
        >
          <Input placeholder='E-mail do Diretor' />
        </Form.Item>

        <Form.Item
          name='numberStudents'
          label='Quantidade de alunos'
          rules={[
            {
              required: true,
              message: 'Por favor, insira a quantidade de alunos'
            }
          ]}
        >
          <InputNumber min={1} className='w-full' />
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
