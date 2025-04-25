export class Uf {
  id?: string;
  sigla?: string;
  nome?: string;
  constructor(id: string, sigla: string, nome: string) {
    this.id = id;
    this.sigla = sigla;
    this.nome = nome;
  }
}