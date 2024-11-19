'use client'

import { Input, Button, Form, Radio, Table } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import InputMask from 'react-input-mask';

export default function FormularioMatricula() {

  // Colunas para Observações sobre o Aluno
  const columnsObservacoes = [
    {
      title: 'Observações',
      dataIndex: 'observacao',
      key: 'observacao',
    },
    {
      title: 'Ações',
      key: 'actions',
      align: 'right' as const,
      render: () => (
        <Button
          type="text"
          icon={<DeleteOutlined style={{ color: 'red' }} />}
        />
      ),
    },
  ];
  
  // Dados de exemplo para as tabelas
  const dataObservacoes = [
    { key: '1', observacao: 'Observação 1' },
    { key: '2', observacao: 'Observação 2' },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-md shadow-lg max-w-4xl w-full border">
        <Form layout="vertical" className="space-y-6">

          {/* Dados do Aluno */}
          <div className="border p-8 rounded-md shadow-sm bg-white mb-6 text-center">
            <h2 className="text-2xl font-semibold mb-6">Dados para Matrícula do Aluno</h2>
            <div className="md:col-span-2 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Form.Item label="Data de Nascimento" name="dataNascimento">
                  <InputMask mask="99/99/9999">
                    {(inputProps) => <Input {...inputProps} placeholder="DD/MM/AAAA" />}
                  </InputMask>
                </Form.Item>
                <Form.Item label="Naturalidade" name="naturalidadeAluno">
                  <Input placeholder="Naturalidade" />
                </Form.Item>
              </div>
              <Form.Item label="Endereço" name="endereco">
                <Input placeholder="Endereço completo" />
              </Form.Item>
              <Form.Item label="CEP" name="cep">
                <InputMask mask="99999-999">
                  {(inputProps) => <Input {...inputProps} placeholder="CEP" />}
                </InputMask>
              </Form.Item>
            </div>
          </div>

          {/* Dados da Mãe */}
          <div className="border p-4 rounded-md shadow-sm bg-white mb-6">
            <h2 className="text-lg font-semibold">Dados da Mãe</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Form.Item label="Nome" name="nomeMae">
                <Input placeholder="Nome da mãe" />
              </Form.Item>
              <Form.Item label="Telefone" name="telefoneMae">
                <InputMask mask="(99) 99999-9999">
                  {(inputProps) => <Input {...inputProps} placeholder="Telefone" />}
                </InputMask>
              </Form.Item>
              <Form.Item label="RG" name="rgMae">
                <Input placeholder="RG" />
              </Form.Item>
              <Form.Item label="CPF" name="cpfMae">
                <InputMask mask="999.999.999-99">
                  {(inputProps) => <Input {...inputProps} placeholder="CPF" />}
                </InputMask>
              </Form.Item>
              <Form.Item label="Naturalidade" name="naturalidadeMae">
                <Input placeholder="Naturalidade" />
              </Form.Item>
            </div>
          </div>

          {/* Dados do Pai */}
          <div className="border p-4 rounded-md shadow-sm bg-white mb-6">
            <h2 className="text-lg font-semibold">Dados do Pai</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Form.Item label="Nome" name="nomePai">
                <Input placeholder="Nome do pai" />
              </Form.Item>
              <Form.Item label="Telefone" name="telefonePai">
                <InputMask mask="(99) 99999-9999">
                  {(inputProps) => <Input {...inputProps} placeholder="Telefone" />}
                </InputMask>
              </Form.Item>
              <Form.Item label="RG" name="rgPai">
                <Input placeholder="RG" />
              </Form.Item>
              <Form.Item label="CPF" name="cpfPai">
                <InputMask mask="999.999.999-99">
                  {(inputProps) => <Input {...inputProps} placeholder="CPF" />}
                </InputMask>
              </Form.Item>
              <Form.Item label="Naturalidade" name="naturalidadePai">
                <Input placeholder="Naturalidade" />
              </Form.Item>
            </div>
          </div>

          {/* Responsável por Buscar */}
          <div className="border p-4 rounded-md shadow-sm bg-white mb-6">
            <h2 className="text-lg font-semibold">Responsável por Buscar</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Form.Item label="Nome" name="nomeResponsavel">
                <Input placeholder="Nome do responsável" />
              </Form.Item>
              <Form.Item label="Parentesco" name="parentescoResponsavel">
                <Input placeholder="Parentesco" />
              </Form.Item>
              <Form.Item label="Telefone" name="telefoneResponsavel">
                <InputMask mask="(99) 99999-9999">
                  {(inputProps) => <Input {...inputProps} placeholder="Telefone" />}
                </InputMask>
              </Form.Item>
            </div>
          </div>

          {/* Observações sobre o Aluno */}
          <div className="border p-4 rounded-md shadow-sm bg-white mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Observações sobre o Aluno</h2>
              <Button type="primary">+ Adicionar</Button>
            </div>
            <Table columns={columnsObservacoes} dataSource={dataObservacoes} pagination={{ pageSize: 5 }} />
          </div>

          {/* Botão Salvar */}
          <div className="flex justify-center mt-4">
            <Button type="primary" htmlType="submit">
              Mandar Dados para Matrícula
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
