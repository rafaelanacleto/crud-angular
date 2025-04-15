import { Injectable } from '@angular/core';
import { Cliente } from './components/cadastro/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private readonly STORAGE_KEY = 'clientes';

  constructor() { }

  salvar(cliente: Cliente): void {
    // Recupera os clientes existentes do Local Storage
    const clientes = this.obterStorage();
    // Adiciona o novo cliente à lista
    clientes.push(cliente);
    // Salva a lista atualizada no Local Storage
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(clientes));
    console.log('Cliente salvo:', cliente);
  }

  obterStorage(): Cliente[] {
    // Recupera os dados do Local Storage
    const clientes = localStorage.getItem(this.STORAGE_KEY);
    // Retorna a lista de clientes ou uma lista vazia se não houver dados
    return clientes ? JSON.parse(clientes) : [];
  }
}
