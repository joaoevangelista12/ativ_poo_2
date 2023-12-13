abstract class Animal {
    abstract fazer_barulho(): void;
}

// Isso resultará em um erro de compilação
// const animal = new Animal(); -> Erro: Não é possível criar uma instância de uma classe abstrata.

class cachorro extends Animal {
    fazer_barulho() {
        console.log("AU! AU!");
    }
}

const dog = new cachorro(); // Isso é válido, pois cachorro implementa fazer_barulho.
dog.fazer_barulho(); // Saída: AU! AU!


