'use client'

import { DeleteOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Radio, Table } from 'antd';
import Image from 'next/image';
import { useState } from 'react';
import InputMask from 'react-input-mask';
import ModalObservacao from '../../components/Matricula/ModalObservacao/index';
import ModalResponsavel from '../../components/Matricula/ModalResponsavel';

// Tipo para observações
type Observacao = {
  key: string;
  titulo: string;
  descricao: string;
};

// Tipo para responsáveis
type Responsavel = {
  key: string;
  nome: string;
  parentesco: string;
  telefone: string;
};

export default function FormularioMatricula() {
  const [isModalObservacaoVisible, setIsModalObservacaoVisible] = useState(false);
  const [isModalResponsavelVisible, setIsModalResponsavelVisible] = useState(false);
  const [observacoes, setObservacoes] = useState<Observacao[]>([]);
  const [responsaveis, setResponsaveis] = useState<Responsavel[]>([]);
  const [form] = Form.useForm();

  // Colunas para Observações sobre o Aluno
  const columnsObservacoes = [
    {
      title: 'Título',
      dataIndex: 'titulo',
      key: 'titulo',
    },
    {
      title: 'Ações',
      key: 'actions',
      align: 'right' as const,
      render: (_: any, record: Observacao) => (
        <Button
          type="text"
          icon={<DeleteOutlined style={{ color: 'red' }} />}
          onClick={() => handleDeleteObservacao(record.key)}
        />
      ),
    },
  ];

  // Colunas para Responsáveis por Buscar
  const columnsResponsaveis = [
    {
      title: 'Nome',
      dataIndex: 'nome',
      key: 'nome',
    },
    {
      title: 'Parentesco',
      dataIndex: 'parentesco',
      key: 'parentesco',
    },
    {
      title: 'Telefone',
      dataIndex: 'telefone',
      key: 'telefone',
    },
    {
      title: 'Ações',
      key: 'actions',
      align: 'right' as const,
      render: (_: any, record: Responsavel) => (
        <Button
          type="text"
          icon={<DeleteOutlined style={{ color: 'red' }} />}
          onClick={() => handleDeleteResponsavel(record.key)}
        />
      ),
    },
  ];
// Adicionar uma nova observação
const handleAddObservacao = (titulo: string, descricao: string) => {
  setObservacoes((prev) => [
    ...prev,
    { key: `${prev.length + 1}`, titulo, descricao },
  ]);
};
  // Remover uma observação
  const handleDeleteObservacao = (key: string) => {
    setObservacoes((prev) => prev.filter((item) => item.key !== key));
  };

  const handleAddResponsavel = (nome: string, parentesco: string, telefone: string) => {
    const telefoneFormatado = telefone.replace(/_/g, '').trim(); // Remove os sublinhados e espaços extras
    setResponsaveis((prev) => [
      ...prev,
      { key: `${prev.length + 1}`, nome, parentesco, telefone: telefoneFormatado },
    ]);
  };
  

  // Remover um responsável
  const handleDeleteResponsavel = (key: string) => {
    setResponsaveis((prev) => prev.filter((item) => item.key !== key));
  };

  // Envio do formulário
  const handleSubmit = () => {
    form.validateFields(['aceiteResponsabilidade', 'autorizacaoImagens'])
      .then(() => {
        console.log('Termos aceitos! Dados enviados.');
      })
      .catch(() => {
        console.error('Por favor, aceite os termos obrigatórios.');
      });
  };

  return (
  <div className="flex items-center justify-center min-h-screen">
  <div className="bg-white p-6 rounded-md shadow-lg max-w-4xl w-full border">
  <div className="flex justify-center mb-6">
    <Image src="/img/logo.svg" alt="Logo" width={80} height={80}/>
  </div>
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
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Responsável por Buscar</h2>
              <Button type="primary" onClick={() => setIsModalResponsavelVisible(true)}>
                + Adicionar
              </Button>
            </div>
            <Table columns={columnsResponsaveis} dataSource={responsaveis} pagination={false} locale={{ emptyText: '' }} />
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
              <Button type="primary" onClick={() => setIsModalObservacaoVisible(true)}>
                + Adicionar
              </Button>
            </div>
            <Table columns={columnsObservacoes} dataSource={observacoes} pagination={false} locale={{ emptyText: '' }} />
          </div>

          {/* Termos de Aceite */}
          <div className="border p-4 rounded-md shadow-sm bg-white mb-6">
            <h2 className="text-lg font-semibold">Termos de Aceite</h2>
            <Form.Item
              name="aceiteResponsabilidade"
              valuePropName="checked"
              rules={[{ required: true, message: 'Você precisa aceitar os termos para continuar.' }]}
            >
              <Checkbox>
                Assumo inteira responsabilidade pelas informações e pelo pagamento.
              </Checkbox>
            </Form.Item>
            <Form.Item
              name="autorizacaoImagens"
              valuePropName="checked"
              rules={[{ required: true, message: 'Você precisa autorizar para continuar.' }]}
            >
              <Checkbox>
                Autorizo que fotos e filmagens que incluam meu/minha filho(a) sejam feitas e utilizadas pela equipe da escola para fins pedagógicos, para publicação no site/da escola/da turma, e para fins de divulgação nas redes sociais. Estou ciente de que as imagens serão usadas apenas para fins pedagógicos e não comerciais, resguardadas as limitações legais e jurídicas.
              </Checkbox>
            </Form.Item>
          </div>

          {/* Botão Salvar */}
          <div className="flex justify-center mt-4">
            <Button type="primary" htmlType="submit">
              Mandar Dados para Matrícula
            </Button>
          </div>
        </Form>
      </div>

      {/* Modal Adicionar Responsável */}
      <ModalResponsavel
        isVisible={isModalResponsavelVisible}
        onClose={() => setIsModalResponsavelVisible(false)}
        onSave={handleAddResponsavel}
      />

      {/* Modal Adicionar Observação */}
      <ModalObservacao
        isVisible={isModalObservacaoVisible}
        onClose={() => setIsModalObservacaoVisible(false)}
        onSave={handleAddObservacao}
      />
    </div>
  );
}
