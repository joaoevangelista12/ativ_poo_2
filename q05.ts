let quadrado = new Quadrado(5);
let triangulo = new Triangulo(4, 6);

figuras.push(quadrado);
figuras.push(triangulo);

/* 
Podemos criar instâncias das classes concretas e armazená-las em um array. 
Essa abordagem é útil quando desejamos formar uma coleção de objetos que sigam a estrutura da classe abstrata, 
enquanto as instâncias reais pertencem a classes derivadas específicas. 
Isso proporciona flexibilidade ao gerenciar diferentes implementações dentro de uma estrutura unificada.
*/