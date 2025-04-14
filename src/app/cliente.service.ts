import { Injectable } from '@angular/core';
import { Cliente } from './components/cadastro/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  salvar(cliente: Cliente): void {
    // Aqui você pode implementar a lógica para salvar o cliente, como enviar os dados para um servidor ou armazená-los localmente.
    console.log('Cliente :', cliente); 
  }
}
