'use client'

import { Input, Button, Form, Radio, Table } from 'antd';

export default function FormularioMatricula() {

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
          </div>

          {/* Dados da Mãe */}
          <div className="border p-4 rounded-md shadow-sm bg-white mb-6">
            <h2 className="text-lg font-semibold">Dados da Mãe</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Form.Item label="Nome" name="nomeMae">
                <Input placeholder="Nome da mãe" />
              </Form.Item>
              <Form.Item label="Telefone" name="telefoneMae">
                <Input placeholder="Telefone" />
              </Form.Item>
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

          {/* Dados do Pai */}
          <div className="border p-4 rounded-md shadow-sm bg-white mb-6">
            <h2 className="text-lg font-semibold">Dados do Pai</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Form.Item label="Nome" name="nomePai">
                <Input placeholder="Nome do pai" />
              </Form.Item>
              <Form.Item label="Telefone" name="telefonePai">
                <Input placeholder="Telefone" />
              </Form.Item>
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
                <Input placeholder="Telefone" />
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
                <Input placeholder="Telefone do hospital" />
              </Form.Item>
              <Form.Item label="Médico" name="medico">
                <Input placeholder="Nome do médico" />
              </Form.Item>
              <Form.Item label="Telefone Médico" name="telefoneMedico">
                <Input placeholder="Telefone do médico" />
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
