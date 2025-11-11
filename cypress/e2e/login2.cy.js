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

    // Selecionar campo de idade, esses valores de idade são gerados aleatoriamente entre 15 e 75 anos. o bom para ter uma variação maior de idades.
    const idade = Math.floor(Math.random() * 60) + 15
    cy.get('#idade').type(idade.toString())

    // Selecionar data desejada, aqui tera uma diversidade na geração de datas aleatórias entre os anos 1970 e 1999.
    const ano = Math.floor(Math.random() * 40) + 1970
    const mes = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')
    const dia = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')
    const data = `${ano}-${mes}-${dia}`
    cy.get('#data').type(data)

    // Preencher campo de telefone
    const telefone = `11-9${Math.floor(1000 + Math.random() * 9000)}-${Math.floor(1000 + Math.random() * 9000)}`
    cy.get('#telefone').type(telefone)

    // Preencher campo de URL
    const url = `https://www.${nome.toLowerCase().replace(/ /g, '')}.com`
    cy.get('#url').type(url)

    // adicionar imagem, nesse caso você deve ter a imagem "foto.jpg" na pasta cypress/fixtures
    cy.get('#arquivo').attachFile('foto.jpg');

    

})
});