'use client'

import { Input, Button, Form, Radio, Table } from 'antd';
import InputMask from 'react-input-mask';

export default function FormularioMatricula() {

  // Colunas para Observações sobre o Aluno
  const columnsObservacoes = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Ações',
      key: 'actions',
      align: 'right' as const,
      render: () => (
        <>
          <a>Visualizar</a> | <a>Baixar</a> | <a>Deletar</a>
        </>
      ),
    },
  ];

  // Colunas para Atividades do Aluno
  const columnsAtividades = [
    {
      title: 'Title',
      dataIndex: 'title1',
      key: 'title1',
    },
    {
      title: 'Title',
      dataIndex: 'title2',
      key: 'title2',
    },
    {
      title: 'Data',
      dataIndex: 'data',
      key: 'data',
    },
    {
      title: 'Ações',
      key: 'actions',
      align: 'right' as const,
      render: () => (
        <>
          <a>Visualizar</a> | <a>Baixar</a> | <a>Deletar</a>
        </>
      ),
    },
  ];

  // Dados de exemplo para as tabelas
  const dataObservacoes = [
    { key: '1', title: 'Observação 1' },
    { key: '2', title: 'Observação 2' },
  ];

  const dataAtividades = [
    { key: '1', title1: 'Atividade 1', title2: 'Detalhe 1', data: '20/10/2024' },
    { key: '2', title1: 'Atividade 2', title2: 'Detalhe 2', data: '21/10/2024' },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-md shadow-lg max-w-4xl w-full border">
        <Form layout="vertical" className="space-y-6">

          {/* Dados do Aluno */}
          <div className="border p-4 rounded-md shadow-sm bg-white mb-6">
            <h2 className="text-lg font-semibold mb-4">Dados do Aluno</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-1 flex flex-col items-center justify-center border p-4 rounded-md">
                <div className="w-32 h-32 bg-gray-200 rounded-full mb-4"></div>
                <p>Foto do Aluno</p>
              </div>
              <div className="md:col-span-2 space-y-4">
                <Form.Item label="Nome do Aluno" name="nomeAluno">
                  <Input placeholder="Nome do aluno" />
                </Form.Item>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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

          {/* Observações Médicas */}
          <div className="border p-4 rounded-md shadow-sm bg-white mb-6">
            <h2 className="text-lg font-semibold mb-4">Observações Médicas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item label="Hospital" name="hospital">
                <Input placeholder="Nome do hospital" />
              </Form.Item>
              <Form.Item label="Telefone Hospital" name="telefoneHospital">
                <InputMask mask="(99) 99999-9999">
                  {(inputProps) => <Input {...inputProps} placeholder="Telefone do hospital" />}
                </InputMask>
              </Form.Item>
              <Form.Item label="Médico" name="medico">
                <Input placeholder="Nome do médico" />
              </Form.Item>
              <Form.Item label="Telefone Médico" name="telefoneMedico">
                <InputMask mask="(99) 99999-9999">
                  {(inputProps) => <Input {...inputProps} placeholder="Telefone do médico" />}
                </InputMask>
              </Form.Item>
              <Form.Item label="Endereço Hospital" name="enderecoHospital">
                <Input placeholder="Endereço completo do hospital" />
              </Form.Item>
              <Form.Item label="Possui Convênio?" name="possuiConvenio">
                <Radio.Group>
                  <Radio value="sim">Sim</Radio>
                  <Radio value="nao">Não</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="Alergias" name="alergias">
                <Input.TextArea placeholder="Descreva as alergias" />
              </Form.Item>
              <Form.Item label="Medicamentos em Caso de Febre" name="medicamentosFebre">
                <Input.TextArea placeholder="Descreva os medicamentos" />
              </Form.Item>
              <Form.Item label="Medicamentos em Caso de Vômito" name="medicamentosVomito">
                <Input.TextArea placeholder="Descreva os medicamentos" />
              </Form.Item>
              <Form.Item label="Observações Gerais" name="observacoesGerais">
                <Input.TextArea placeholder="Outras observações" />
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

          {/* Atividades do Aluno */}
          <div className="border p-4 rounded-md shadow-sm bg-white">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Atividades do Aluno</h2>
              <Button type="primary">+ Adicionar</Button>
            </div>
            <Table columns={columnsAtividades} dataSource={dataAtividades} pagination={{ pageSize: 5 }} />
          </div>

          {/* Botão Salvar */}
          <div className="flex justify-center mt-4">
            <Button type="primary" htmlType="submit">
              Salvar
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
