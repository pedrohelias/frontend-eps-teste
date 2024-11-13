'use client'

import { Input, Button, Form, Checkbox } from 'antd';
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
          <div className="bg-white p-6 rounded-md shadow-lg max-w-4xl w-full">


            <h2 className="text-lg font-semibold mb-4">Observações Médicas</h2>
              <Form layout="vertical" className="space-y-4">
                {/* Hospital e Telefone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Form.Item label="Hospital" name="hospital">
                    <Input placeholder="Nome do hospital" />
                  </Form.Item>
                  <Form.Item label="Telefone Hospital" name="telefoneHospital">
                    <Input placeholder="Telefone do hospital" />
                  </Form.Item>
                </div>

                {/* Médico e Telefone Médico */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Form.Item label="Médico" name="medico">
                    <Input placeholder="Nome do médico" />
                  </Form.Item>
                  <Form.Item label="Telefone Médico" name="telefoneMedico">
                    <Input placeholder="Telefone do médico" />
                  </Form.Item>
                </div>

                {/* Endereço do Hospital */}
                <Form.Item label="Endereço Hospital" name="enderecoHospital">
                  <Input placeholder="Endereço completo do hospital" />
                </Form.Item>

                {/* Convenio */}
                <Form.Item label="Possui Convênio?" name="possuiConvenio">
                  <Checkbox.Group>
                    <Checkbox value="sim">Sim</Checkbox>
                    <Checkbox value="nao">Não</Checkbox>
                  </Checkbox.Group>
                </Form.Item>

                {/* Alergias */}
                <Form.Item label="Alergias" name="alergias">
                  <Input.TextArea placeholder="Descreva as alergias" />
                </Form.Item>

                {/* Medicamentos em caso de febre */}
                <Form.Item label="Medicamentos em caso de febre" name="medicamentosFebre">
                  <Input.TextArea placeholder="Descreva os medicamentos" />
                </Form.Item>

                {/* Medicamentos em caso de vômito */}
                <Form.Item label="Medicamento em caso de vômito" name="medicamentosVomito">
                  <Input.TextArea placeholder="Descreva os medicamentos" />
                </Form.Item>

                {/* Observações gerais */}
                <Form.Item label="Observações gerais" name="observacoesGerais">
                  <Input.TextArea placeholder="Outras observações" />
                </Form.Item>

                {/* Botão Salvar */}
                <div className="flex justify-end">
                  <Button type="primary" htmlType="submit">
                    Salvar
                  </Button>
                </div>
              </Form>
            <div className="border p-4 rounded-md h-32 bg-gray-200">





              
            </div>
          </div>
        </Form>
      </div>
    </div>
  )
}
