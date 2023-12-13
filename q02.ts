abstract class ClasseAbstrata {
    abstract imprimir_algo(): void;
  }
  
  class ClasseConcreta extends ClasseAbstrata {
    imprimir_algo(): void {
      console.log("Implementação do método imprimaAlgo na ClasseConcreta");
    }
  }

/*
A ClasseConcreta fornece a implementação necessária para o método abstrato imprimaAlgo() 
definido na ClasseAbstrata. Agora, a compilação ocorrerá sem erros.
*/