import{ v4 as uuidv4 } from 'uuid';
import { Injectable } from '@angular/core';

export class Cliente {
    id?: string;
    nome?: string;
    email?: string;
    telefone?: string;

    constructor(id: string, nome: string, email: string, telefone: string) {
        this.id = uuidv4(); // Gera um UUID único para o cliente
        // this.id = id; // Se você quiser usar um ID numérico, descomente esta linha
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }
}