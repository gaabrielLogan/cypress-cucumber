# Como Rodar o Projeto na Sua Máquina 💻:

### 1. Clonar o Repositório:
```bash
git clone https://github.com/gaabrielLogan/cypress-cucumber.git
```

### 2. Instalação das Dependências:
Execute o seguinte comando para instalar as dependências, incluindo o Cypress:
```bash
npm install cypress
```
Isso irá baixar o Node.js e as dependências necessárias para o Cypress.



### 3. Explicando o Projeto:

O projeto tem como objetivo realizar testes na aplicação "Seu Barriga" utilizando o Cypress, uma ferramenta de teste de front-end. A abordagem adotada para os testes segue a metodologia Behavior-Driven Development (BDD) com a linguagem Gherkin, utilizando o Cucumber.

O Gherkin é uma linguagem de descrição de comportamento compreensível tanto por desenvolvedores quanto por não desenvolvedores. Ele permite expressar a lógica do teste em um formato fácil de entender, promovendo a colaboração entre diferentes partes interessadas.

Dentro desse contexto, o Cypress é utilizado para automatizar e executar os testes escritos em Gherkin. Isso proporciona uma abordagem eficaz para validar o comportamento da aplicação "Seu Barriga" de maneira automatizada e reproduzível.

## Configurações do Ambiente

Este projeto utiliza o Cypress para testes e possui um arquivo de exemplo chamado `cypress.example.json`, o qual contém configurações fictícias ou ausentes. Este arquivo é fornecido como uma referência para as configurações necessárias e não contém informações confidenciais.

Antes de rodar o projeto na sua máquina, crie um arquivo chamado `cypress.env.json` seguindo o mesmo formato do `cypress.example.json`, mas com valores reais e sensíveis preenchidos. Este arquivo `cypress.env.json` é necessário para a execução correta do projeto e deve conter as informações específicas do ambiente, como chaves de API, senhas, e-mails, etc.

Certifique-se de nunca adicionar ou compartilhar o arquivo `cypress.env.json` no repositório, mantendo-o fora do controle de versão para proteger suas credenciais e informações sensíveis.

## Estrutura de Diretórios

- **cypress/**
  - Contém os arquivos de configuração e scripts de teste do Cypress.
  
- **cypress/e2e/**
  - **step_definitions/**
   - **login.feature**: Arquivo de especificação Gherkin para o teste de login.
    - **register.feature**: Arquivo de especificação Gherkin para o teste de registro.
    - **login/**
      - **login.steps.js**: Arquivo contendo os passos do teste de login.
      - **loginInvalid.steps.js**: Arquivo contendo os passos para cenários de login inválido.
    - **register/**
      - **register.steps.js**: Arquivo contendo os passos do teste de registro.
  
- **cypress/support/**
  - Pode incluir utilitários ou funções de suporte para os testes.

- **cypress/fixtures/**
  - Contém dados de exemplo ou mocks para os testes.


- **node_modules/**
  - Contém as dependências do projeto, geradas pelo Node.js.

A sua documentação já está bastante completa! Se desejar, pode adicionar uma seção sobre como executar os testes, e também informações sobre comandos úteis para facilitar a execução do projeto. Aqui está um exemplo:


## Execução dos Testes

Para executar os testes, utilize o seguinte comando na linha de comando:

```bash
npm test
```

Este comando iniciará a execução dos testes utilizando o Cypress. Certifique-se de que o ambiente está configurado corretamente, incluindo o preenchimento do arquivo `cypress.env.json` conforme as instruções anteriores.

## Comandos Úteis

**Abrir o Cypress para Execução Manual:**
  ```bash
  npx cypress open
  ```
  Isso abrirá a interface do Cypress, permitindo que você execute testes manualmente e visualize as interações.

**Executar Testes com Relatório de Saída:**
  ```bash
  npx cypress run --reporter mochawesome
  ```
  Este comando executa os testes em modo headless (sem interface gráfica) e gera relatórios utilizando o Mochawesome.
Claro, aqui está a adição dos comandos para tablets ao seu documento existente:

```markdown
## Execução dos Testes

Para executar todos os testes, utilize o seguinte comando na linha de comando:

```bash
npm test
```

Este comando iniciará a execução dos testes utilizando o Cypress. Certifique-se de que o ambiente está configurado corretamente, incluindo o preenchimento do arquivo `cypress.env.json` conforme as instruções anteriores.

Para executar testes específicos para tablets, você pode usar os seguintes comandos:

```bash
npm run cy:open:tablet
```

Isso abrirá a interface do Cypress, permitindo que você execute testes manualmente e visualize as interações no modo específico para tablets.

E para executar testes de tablets no modo headless com relatório de saída, você pode usar:

```bash
npm run test:tablet
```

Este comando executa os testes em modo headless (sem interface gráfica).

## Contatos

Se você tiver dúvidas, sugestões ou quiser contribuir para este projeto, fique à vontade para entrar em contato conosco. Estamos aqui para ajudar!

- **Email:** [gabriellogancontato@gmail.com](mailto:seu-email@example.com)
- **LinkedIn:** [Gabriel Logan](https://www.linkedin.com/in/gabriel-logan-6079a2240/)
- **Issues no GitHub:** [https://github.com/gaabrielLogan/cypress-cucumber/issues](https://github.com/gaabrielLogan/cypress-cucumber/issues)

Esperamos que você aproveite trabalhar com este projeto tanto quanto nós! 😊
