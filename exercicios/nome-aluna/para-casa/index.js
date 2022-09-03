let clienteLilit = {
  pagamento: 'pix',
  carrinho: [
    {produto: 'Bolsa pequena', valor: 49.0}, 
    {produto: 'Cinto preto', valor: 62.0}, 
    {produto: 'Jaqueta Jeans', valor: 350.0}, 
    {produto: 'Calça preta', valor: 290.0}, 
    {produto: 'Blusa simples', valor: 35.0}, 
    {produto: 'Calça jeans clara', valor: 130.0}, 
    {produto: 'Blusa preta gola alta', valor: 60.0}, 
    {produto: 'Short verde canelado', valor: 80.0}, 
    {produto: 'Salto agulha 39', valor: 250.0}, 
    {produto: 'Tênis casual preto', valor: 120.0}, 
    {produto: 'meia calça transparente', valor: 80.0}
  ]
}

const calcularCompras = (compra) => {
  let valorTotal = 0
  let descontoAplicado = 0
  let valorFinal = 0
  let quantidadeDeProdutos = compra.carrinho.length

  for(let item of compra.carrinho) {
    valorTotal += item.valor
    if(item.valor >= 200.0) {
      // console.log('%200', item.produto, item.valor)
      let desconto = item.valor * 0.5
      descontoAplicado += desconto
      valorFinal += item.valor - desconto
    } else if(item.valor >= 100.0) {
      // console.log('%100', item.produto, item.valor)
      let desconto = item.valor * 0.2
      descontoAplicado += desconto
      valorFinal += item.valor - desconto
    } else if(item.valor >= 60.0) {
      // console.log('%60', item.produto, item.valor)
      let desconto = item.valor * 0.1
      descontoAplicado += desconto
      valorFinal += item.valor - desconto
    } else {
      // console.log('sem desconto', item.produto, item.valor)
      valorFinal += item.valor
    }
  }

  // console.log(quantidadeDeProdutos, valorTotal, descontoAplicado, valorFinal)

  if(compra.pagamento == "pix" || compra.pagamento == "a vista") {
    let desconto = valorFinal * 0.05
    // console.log("DESCONTO DE 5%", desconto)
    valorFinal -= desconto
    descontoAplicado += desconto
    // console.log("VALOR FINAL PARA PIX/AVISTA", valorFinal)
  }

  // console.log(quantidadeDeProdutos, valorTotal, descontoAplicado, valorFinal)

  let notaFiscal = {
    'Valor Total': valorTotal,
    'Desconto Aplicado': descontoAplicado,
    'Valor à pagar': valorFinal
  }

  if(quantidadeDeProdutos > 10 || valorFinal > 800.0) {
    notaFiscal['Bônus'] = 'Você ganhou um CUPOM de R$50,00 para sua próxima compra'
  }

  console.table(notaFiscal)
}

calcularCompras(clienteLilit)
