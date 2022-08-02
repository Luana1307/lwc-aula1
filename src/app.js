import { LightningElement } from "lwc";

export default class App extends LightningElement {
  title = "Welcome to Lightning Web Components!";
// colocando valores 
nome = "Luana";
telefone = "(81)99884455";
cpf = "987.987.465.45";
idade = 24;

email = "srfloweers@gmail.com";
instagram = "https://www.instagram.com";
linkedIn = "";

visible = true;
  
//Uso de variável da Classe, dentro dos nossos métodos
//Trocar valor de visible de true para false
//Utilizamos uma variavel fora e aplicamento dentro de um metodo

// trocarDiv(){

//   this.visible = false;
// }

alterarValores(){
  this.nome = "Lilo";
  this.telefone = "8855";
  this.cpf = "010.021.312.32";
  this.idade = 30;
  this.email = "@25";
  this.instagram = "lulu.com";
  this.linkedIn = "lilo.com";
 
}

}
/**
 * Exercicio em classe
 * Criar um metódo chamado de alterar valores
 * vai mudar o valor do nome, telefone, cpf, idade, e-mail, instagram e likedIN
 * 
 * No html criar um novo botão chamado 'Altera Valor' que ative a função
 * 
 */
