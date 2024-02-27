// produtosPage.js

// Defina a função adicionarProdutoAoCarrinho
function adicionarProdutoAoCarrinho(produto, tamanho, cor, quantidade) {
    cy.get(`.post-${produto} > .product-block > .caption > .meta > .infor > .name`).click();
    cy.get(`.button-variable-item-${tamanho}`).click();
    cy.get(`.button-variable-item-${cor}`).click();
    cy.get('.input-text').clear().type(4); // Inserir quantidade aqui   
    cy.get('.single_add_to_cart_button').click();
}

// Exporte a função para que ela possa ser acessada em outros arquivos
module.exports = {
    adicionarProdutoAoCarrinho
};