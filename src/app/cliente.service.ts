import { Injectable } from '@angular/core';
import { Cliente } from './components/cadastro/cliente';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private readonly STORAGE_KEY = 'clientes';

  constructor() {}

  salvar(cliente: Cliente): void {
    // Recupera os clientes existentes do Local Storage
    const clientes = this.obterStorage();
    // Adiciona o novo cliente à lista
    clientes.push(cliente);
    // Salva a lista atualizada no Local Storage
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(clientes));
    console.log('Cliente salvo:', cliente);
  }

  atualizar(cliente: Cliente): void {
    // Recupera os clientes existentes do Local Storage
    const clientes = this.obterStorage();
    // Encontra o índice do cliente a ser atualizado
    const index = clientes.findIndex((c) => c.id === cliente.id);
    if (index !== -1) {
      // Atualiza o cliente na lista
      clientes[index] = cliente;
      // Salva a lista atualizada no Local Storage
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(clientes));
      console.log('Cliente atualizado:', cliente);
    } else {
      console.error(`Cliente com ID ${cliente.id} não encontrado para atualização.`);
    }
  }
  remover(id: string): void {
    // Recupera os clientes existentes do Local Storage
    const clientes = this.obterStorage();
    // Filtra a lista para remover o cliente especificado
    const clientesAtualizados = clientes.filter((c) => c.id !== id);
    // Salva a lista atualizada no Local Storage
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(clientesAtualizados));
    console.log('Cliente removido:', clientesAtualizados);
  }

  obterStorage(): Cliente[] {
    // Recupera os dados do Local Storage
    const clientes = localStorage.getItem(this.STORAGE_KEY);
    // Retorna a lista de clientes ou uma lista vazia se não houver dados
    return clientes ? JSON.parse(clientes) : [];
  }

  obterClientePorId(id: string): Cliente {
    const clientesString = localStorage.getItem('clientes'); // Assumindo uma chave
    const clientes: Cliente[] = clientesString
      ? JSON.parse(clientesString)
      : [];
    // console.log("Clientes recuperados do Storage:", clientes); // Para debug
    // Encontra o cliente pelo ID (usando igualdade estrita e garantindo que ambos sejam strings)
    const cliente = clientes.find((cliente) => String(cliente.id) === id);
    // console.log("ID procurado:", id); // Para debug
    // console.log("Cliente encontrado:", cliente); // Para debug
    if (!cliente) {
      throw new Error(`Cliente com ID ${id} não encontrado.`);
    }
    return cliente;
  }
}
