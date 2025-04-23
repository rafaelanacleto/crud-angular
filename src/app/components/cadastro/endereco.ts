import { v4 as uuidv4 } from 'uuid';

export class Endereco {
  id?: string;
  cep?: string;
  logradouro?: string;
  complemento?: string;
  unidade?: string;
  bairro?: string;
  localidade?: string;
  uf?: string;
  estado?: string;
  regiao?: string;
  ibge?: string;
  gia?: string;
  ddd?: string;
  siafi?: string;
  numero?: string;

  constructor(
    id: string,
    cep: string,
    logradouro: string,
    complemento: string,
    unidade: string,
    bairro: string,
    localidade: string,
    uf: string,
    estado: string,
    regiao: string,
    ibge: string,
    gia: string,
    ddd: string,
    siafi: string,
    numero: string
  ) {
    this.id = uuidv4(); // Gera um UUID único para o cliente
    // this.id = id; // Se você quiser usar um ID numérico, descomente esta linha
    this.cep = cep;
    this.logradouro = logradouro;
    this.complemento = complemento;
    this.unidade = unidade;
    this.bairro = bairro;
    this.localidade = localidade;
    this.uf = uf;
    this.estado = estado;
    this.regiao = regiao;
    this.ibge = ibge;
    this.gia = gia;
    this.ddd = ddd;
    this.siafi = siafi;
    this.numero = numero;
  }
}
