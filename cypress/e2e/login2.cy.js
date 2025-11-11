describe('Preencher o formulário de teste Cypress', () => {

  beforeEach(() => {
    cy.visit('https://formulario-testes-cypress.vercel.app/')
  })

  // Teste para preencher e enviar o formulário com dados variados, nesse caso ele pega esses nomes que estão disponíveis em um array e escolhe um aleatoriamente.

 it('Preenche e envia o formulário com sucesso', () => {
    const nomes = ['Ana Souza', 'Lucas Almeida', 'Mariana Costa', 'Pedro Silva', 'Carla Ribeiro', 'João Santos', 'Beatriz Fernandes', 'Rafael Oliveira', 'Juliana Lima', 'Gabriel Pereira', 'Camila Gomes', 'Felipe Rodrigues', 'Larissa Martins', 'Bruno Carvalho', 'Amanda Dias', 'Thiago Mendes', 'Sofia Araújo', 'Gustavo Nunes', 'Isabela Rocha', 'Diego Cunha']
    const nome = nomes[Math.floor(Math.random() * nomes.length)]
    cy.get('#nome').type(nome)

    // Gerar email baseado no nome selecionado, substituindo espaços por pontos, tudo em minúsculo.
    const email = nome.toLowerCase().replace(/ /g, '.') + '@example.com'
    cy.get('#email').type(email)

    // Preencher o campo de senha
     const senha = `senha${Math.floor(Math.random() * 1000)}`
    cy.get('#senha').type(senha)


})
});