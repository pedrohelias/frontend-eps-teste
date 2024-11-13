'use client'

import { Input, Button, Form } from 'antd';
export default function FormularioMatricula() {

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-md shadow-lg max-w-4xl w-full">
        <Form layout="vertical" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Quadrado 1: Foto e Dados do Aluno */}
            <div className="md:col-span-1 flex flex-col items-center justify-center border p-4 rounded-md">
              <div className="w-32 h-32 bg-gray-200 rounded-full mb-4"></div>
              <p>Foto do Aluno</p>
            </div>

            <div className="md:col-span-2 space-y-4">
              <h2 className="text-lg font-semibold">Dados do Aluno</h2>
              <Form.Item label="Nome do Aluno" name="nomeAluno">
                <Input placeholder="Nome do aluno" />
              </Form.Item>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Form.Item label="Data de Nascimento" name="dataNascimento">
                  <Input placeholder="DD/MM/AAAA" />
                </Form.Item>
                <Form.Item label="Naturalidade" name="naturalidadeAluno">
                  <Input placeholder="Naturalidade" />
                </Form.Item>
              </div>
              <Form.Item label="Endereço" name="endereco">
                <Input placeholder="Endereço completo" />
              </Form.Item>
              <Form.Item label="CEP" name="cep">
                <Input placeholder="CEP" />
              </Form.Item>
            </div>
          </div>

          {/* Dados Mãe */}
          <div>
            <h2 className="text-lg font-semibold">Dados da Mãe</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Form.Item label="Nome" name="nomeMae">
                <Input placeholder="Nome da mãe" />
              </Form.Item>
              <Form.Item label="Telefone" name="telefoneMae">
                <Input placeholder="Telefone" />
              </Form.Item>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Form.Item label="RG" name="rgMae">
                <Input placeholder="RG" />
              </Form.Item>
              <Form.Item label="CPF" name="cpfMae">
                <Input placeholder="CPF" />
              </Form.Item>
              <Form.Item label="Naturalidade" name="naturalidadeMae">
                <Input placeholder="Naturalidade" />
              </Form.Item>
            </div>
          </div>

          {/* Dados Pai */}
          <div>
            <h2 className="text-lg font-semibold">Dados do Pai</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Form.Item label="Nome" name="nomePai">
                <Input placeholder="Nome do pai" />
              </Form.Item>
              <Form.Item label="Telefone" name="telefonePai">
                <Input placeholder="Telefone" />
              </Form.Item>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Form.Item label="RG" name="rgPai">
                <Input placeholder="RG" />
              </Form.Item>
              <Form.Item label="CPF" name="cpfPai">
                <Input placeholder="CPF" />
              </Form.Item>
              <Form.Item label="Naturalidade" name="naturalidadePai">
                <Input placeholder="Naturalidade" />
              </Form.Item>
            </div>
          </div>

          {/* Responsável por buscar */}
          <div>
            <h2 className="text-lg font-semibold">Responsável por buscar</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Form.Item label="Nome" name="nomeResponsavel">
                <Input placeholder="Nome do responsável" />
              </Form.Item>
              <Form.Item label="Parentesco" name="parentescoResponsavel">
                <Input placeholder="Parentesco" />
              </Form.Item>
              <Form.Item label="Telefone" name="telefoneResponsavel">
                <Input placeholder="Telefone" />
              </Form.Item>
            </div>
          </div>

          {/* Botão Salvar */}
          <div className="flex justify-end">
            <Button type="primary" htmlType="submit">
              Salvar
            </Button>
          </div>

          {/* Outros quadrados */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border p-4 rounded-md h-32 bg-gray-200"></div>
            <div className="border p-4 rounded-md h-32 bg-gray-200"></div>
          </div>
        </Form>
      </div>
    </div>
  )
}
