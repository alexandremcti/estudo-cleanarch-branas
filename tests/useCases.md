# Purchase Order

## Testes

1 - Não deve fazer um pedido com cpf inválido
2 - Deve fazer um pedido com 3 itens (com descrição, preço e quantidade)
3 - Deve fazer um pedido com cupom de desconto (percentual sobre o total do pedido)

4 - Não deve aplicar cupom de desconto expirado
5 - Deve calcular o valor do frete com base nas dimensões (altura, largura e profundidade em cm) e o peso dos produtos (em kg)
6 - Deve retornar o preço mínimo de frete caso ele seja superior ao valor calculado