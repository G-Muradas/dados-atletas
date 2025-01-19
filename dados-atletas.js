class Atleta {
    constructor(nome, idade, peso, altura, notas){
      this.nome = nome
      this.idade = idade
      this.peso = peso
      this.altura = altura
      this.notas = notas
    }
    
      calculaCategoria(){
        let idades = this.idade
          if (idades < 9 || idades > 30){
          return "Sem categoria"
        } else if (idades >= 16 || idades <= 30) {
          return "Adulto"
        } else if (idades >= 14) {
          return "Intermediário"
        } else if (idades >= 12){
          return "Juvenil"
        } else if (idades >= 9){
          return "Infantil"
        }  
        "Inválido"
      } // para calcular a categoria do atleta; Infantil: 9 a 11 anos Juvenil: 12 e 13 anos Intermediário: 14 e 15 anos Adulto: 16 a 30 anos Sem categoria: demais idades
      
      calculaIMC(){
        let a = this.peso
        let b = this.altura * this.altura
      return a / b
      }// para calcular o IMC do atleta;
      
      calculaMediaValida(){
        let notas = this.notas.sort(function compararNumeros(a, b) {
      return a - b;
      }) 
      let notasfinais = notas.slice(1, 4)
      let soma = 0
      notasfinais.forEach(function(nota){
     soma = soma + nota
      }) 
       let mediaValida =  soma / notasfinais.length
      
      return mediaValida.toFixed(2)
  
      } // para calcular a média válida do atleta.
      obtemNomeAtleta() {
        return `Nome: ${this.nome}`
      } // que retorna o nome do atleta
      
      obtemIdadeAtleta() {
  
        return `Idade: ${this. idade}`
  
      } // que retorna a idade do atleta
      obtemPesoAtleta() {
  
        return `Peso: ${this. peso}`
  
      }  // que retorna o peso do atleta
      obtemNotasAtleta() {
  
        return `Notas: ${this. notas}`
  
      } // que retorna as notas do atleta
      obtemCategoria()  {
  
        return `Categoria: ${this.calculaCategoria()}`
  
      } // que retorna a categoria do atleta
      obtemIMC() {
  
        return `IMC: ${this.calculaIMC()}`
  
      } // que retorna o IMC do atleta
      obtemMediaValida(){
  
        return `Média válida: ${this.calculaMediaValida()}`
  
      } // que retorna a média válida do atleta
    
      obtemAltura() {
        return `Altura: ${this.altura}`
      }
   
    
  }
  
  const atletas1 = new Atleta ("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88])
  const atletas2 = new Atleta ("Fernando Puntel", 20, 60, 1.60, [8, 10, 10, 7, 9.33])
  const atletas3 = new Atleta ("Daiane Jelinsky", 15, 40, 1.50, [7, 10, 9.5, 9.5, 8])
  const atletas4 = new Atleta ("Bruno Castro", 5, 20, 1.20, [10, 10, 10, 9, 9.5])
  
  let matrizAtletas = [atletas1, atletas2, atletas3, atletas4]
  
  for (let i=0; i < matrizAtletas.length; i++){
  console.log(`${matrizAtletas[i].obtemNomeAtleta()}
  ${matrizAtletas[i].obtemIdadeAtleta()}
  ${matrizAtletas[i].obtemPesoAtleta()}
  ${matrizAtletas[i].obtemAltura()}
  ${matrizAtletas[i].obtemNotasAtleta()}
  ${matrizAtletas[i].obtemCategoria()}
  ${matrizAtletas[i].obtemIMC()}
  ${matrizAtletas[i].obtemMediaValida()}`)
  }