abstract class Animals {
    abstract fazer_som(): void;
}

class gato extends Animals {
    // Não implementa o método fazer_som
}

// Isso resultará em um erro de compilação:
// Class 'gato' incorrectly implements class 'Animals'. 
// Property 'fazer_som' is abstract in 'Animal' but not marked abstract in 'Cat'.
