class Calculadora {
  numeroUm;
  numeroDois;

  Somar() {
    alert(this.numeroUm + this.numeroDois);
  }
  Subtrair() {
    alert(this.numeroUm - this.numeroDois);
  }
  Multiplicar() {
    alert(this.numeroUm * this.numeroDois);
  }
  Dividir() {
    alert(this.numeroUm / this.numeroDois);
  }
}

alert("Bem Vindo a Calculadora");
var calculadora = new Calculadora();
calculadora.numeroUm = Number(prompt("Escolha um Numero:"));
calculadora.numeroDois = Number(prompt("Escolha um Numero: "));

do {
  var choice = Number(
    prompt("1|Somar \n2|Subtrair \n3|Multiplicar \n4|Dividir \n5|Sair")
  );
  switch (choice) {
    case 1:
      calculadora.Somar();
      break;
    case 2:
      calculadora.Subtrair();
      break;
    case 3:
      calculadora.Multiplicar();
      break;
    case 4:
      calculadora.Dividir();
      break;
    case 5:
      alert("Programa Finalizado");
      break;
    default:
      alert("Opção Invalida");
  }
} while (choice == 5);
{
}
