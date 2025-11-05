describe('Preencher o formulário de teste Cypress', () => {

  beforeEach(() => {
    cy.visit('https://formulario-testes-cypress.vercel.app/')
  })

  it('Preencher o formulário', () => {
    // Preencher o campo de nome 
    cy.get('input[name="nome"]').type('Emilly Ramalho')

    
    cy.get('input[name="email"]').type('emilly.ramalho@example.com')
    cy.get('input[name="senha"]').type('SenhaSegura123!')
    cy.get('#idade').type('25')
    cy.get('#data').type('2000-02-25')
    cy.get('#telefone').type('11987654321')
    cy.get('#url').type('https://example.com')

   // adicionar imagem, nesse caso você deve ter a imagem "foto.jpg" na pasta cypress/fixtures
    cy.get('#arquivo').attachFile('foto.jpg');


  })

})
