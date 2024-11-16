export type StudentDTO = {
    name: string,
    birthDate: Date,
    rg: string,
    address: string,
    cep: string
}

export type StudentsResponseDTO = {
    id: String,
    nome: String,
    nomeResponsavel: String,
    turma: String,
    disabled: boolean
}