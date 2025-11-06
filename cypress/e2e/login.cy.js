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

    // Selecionar o gênero desejado.
    cy.get('input[name="genero"]').check('F');

    cy.get('input[name="genero"]').check('M');

    // Selecionar as opções de interesse
    cy.get('input[name="interesse"]').check(['esporte', 'música', 'tecnologia']);

    // Selecionar o país desejado
    cy.get('select[name="pais"]').select('Brasil');

    cy.get('select[name="pais"]').select('Estados Unidos');

    // Comentário

   cy.get('textarea[name="comentario"]').type(`Este é um comentário de teste para o formulário Cypress.`);

   cy.get(`textarea[name="comentario"]`).clear();
   
   cy.get('textarea[name="comentario"]').type(`Este é apenas um texto genérico usado para testes automatizados. O objetivo é verificar se o campo aceita entradas válidas e se o comportamento do formulário está conforme o esperado`);

    // Ajustar o nível de satisfação
    cy.get('#satisfacao').invoke('val', 5).trigger('input');

    

    cy.get('#termos').check();
  })

});
