# Validador de Número de Conta

Este projeto implementa um sistema de validação para números de conta em TypeScript, garantindo que sigam formatos e regras específicas.

## ✨ Funcionalidades

* Validação de formato de número de conta.
* Verificação do número de dígitos (ex: seis dígitos).
* Tratamento de erros para números de conta inválidos (ex: `NegocioErro`).

## 🚀 Tecnologias Utilizadas

* **TypeScript:** Linguagem principal do projeto, adicionando tipagem estática ao JavaScript.
* **Jest:** Framework de testes para garantir a qualidade e o correto funcionamento do código.
* **Node.js:** Ambiente de execução para o projeto.

## 🔧 Pré-requisitos

Antes de começar, você precisará ter as seguintes ferramentas instaladas em sua máquina:

* [Node.js](https://nodejs.org/) (que inclui o npm ou yarn)
* [Git](https://git-scm.com/)

## ⚙️ Instalação e Configuração

Siga os passos abaixo para configurar o ambiente de desenvolvimento:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/ThaVieiras/testeseautomacao.git](https://github.com/ThaVieiras/testeseautomacao.git) 
    ```
2.  **Acesse a pasta do projeto:**
    ```bash
    cd testeseautomacao 
    ```
3.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    # yarn install
    ```
4.  **(Opcional) Compile o projeto (se aplicável):**
    Se você precisar compilar o TypeScript para JavaScript (por exemplo, para usar em um ambiente que não suporte TS diretamente ou para distribuir uma versão JS), você pode ter um script para isso:
    ```bash
    npm run build
    ```

## 🚀 Como Usar (Exemplos)

Para utilizar o validador em seu projeto TypeScript/JavaScript:

1.  **Importe a classe ou função necessária:**
    ```typescript
    // Exemplo (adapte conforme a estrutura do seu projeto e o nome da sua classe/função principal)
    import { NumeroConta } from './src/model/NumeroConta'; // ou o caminho para o arquivo compilado em 'dist/'
    import { NegocioErro } from './src/error/NegocioErro';

    try {
        const minhaConta = new NumeroConta("123456"); // Supondo que o construtor já valida
        console.log("Número de conta válido!");

        // Exemplo de uso de um método de validação explícito, se houver
        // minhaConta.validar("12345"); // Isso poderia lançar um erro

        const contaInvalida = new NumeroConta("123");
    } catch (error) {
        if (error instanceof NegocioErro) {
            console.error("Erro de validação:", error.message);
        } else {
            console.error("Ocorreu um erro inesperado:", error);
        }
    }
    ```
    
## 🧪 Rodando os Testes

Para executar os testes automatizados do projeto, utilize os seguintes comandos:

* **Executar todos os testes:**
    ```bash
    npx jest
    ```
    ou
    ```bash
    npm test
    ```
    ou (se você usa Yarn)
    ```bash
    yarn test
    ```

* **Gerar relatório de cobertura de testes:**
    ```bash
    npx jest --coverage
    ```
    Os relatórios serão gerados na pasta `coverage/`.

## 📁 Estrutura do Projeto

A estrutura de pastas do projeto é organizada da seguinte forma:
```
├── coverage/        # Relatórios de cobertura de testes
├── node_modules/    # Dependências do projeto
├── src/             # Código fonte da aplicação
│   ├── model/       # Modelos de dados (ex: Conta.ts, NumeroConta.ts)
│   └── error/       # Definições de erros customizados (ex: NegocioErro.ts)
├── tests/           # Arquivos de teste
│   └── model/       # Testes para os modelos (ex: Conta.test.ts, NumeroConta.test.ts)
├── .gitignore       # Arquivos e pastas ignorados pelo Git
├── jest.config.js   # Configurações do Jest
├── package-lock.json # Lockfile das dependências (npm)
├── package.json     # Metadados do projeto e dependências
└── tsconfig.json    # Configurações do compilador TypeScript
```

## Licença

Este projeto foi desenvolvido como parte do curso Automação de testes de Software ministrado pela instituição Impacta.


## 👤 Autor

* **Thaís Vieira**
* GitHub: [@ThaVieiras](https://github.com/ThaVieiras)
* LinkedIn: [Thaís Vieiras](https://www.linkedin.com/in/thaisvieiras) ---
Made with ❤️ by Thaís Vieira.
