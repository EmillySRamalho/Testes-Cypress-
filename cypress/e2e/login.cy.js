describe('Preencher o formulário de teste Cypress', () => {

  beforeEach(() => {
    cy.visit('https://formulario-testes-cypress.vercel.app/')
  })

  it('Preencher o formulário', () => {
    // Preencher o campo de nome 
    cy.get('input[name="nome"]').type('Emilly Ramalho')

    // Preencher o campo de email
    cy.get('input[name="email"]').type('emilly.ramalho@example.com')

    // Preencher o campo de senha
    cy.get('input[name="senha"]').type('SenhaSegura123!')

    // Selecionar campo de idade 
    cy.get('#idade').type('25')

    // Selecionar data desejada 
    cy.get('#data').type('2000-02-25')

   // Preencher campo de telefone 
    cy.get('#telefone').type('11987654321')

    // Preencher campo de URL
    cy.get('#url').type('https://example.com')

   // adicionar imagem, nesse caso você deve ter a imagem "foto.jpg" na pasta cypress/fixtures
    cy.get('#arquivo').attachFile('foto.jpg');


  })

})
