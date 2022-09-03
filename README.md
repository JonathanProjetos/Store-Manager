# Store-Manager

# Contexto
API RESTful utilizando arquitetura MSC. A pessoa usuária, independente de cadastro, deve conseguir, adicionar, ler, deletar e atualizar produtos. Enviar vendas para o sistema e essas vendas devem validar se o produto em questão existe, também é possível ler, deletar e atualizar vendas;

## Detalhes de endereços Products

>Verbo GET : http://localhost:3000/products

### Esperado
    ```json
      [
        {
          "id": 1,
          "name": "Martelo de Thor",
        },
        {
          "id": 2,
          "name": "Traje de encolhimento",
        }
        /* ... */
      ]
    ```
>Verbo Post : http://localhost:3000/products

### Esperado
    ```json
    
        {
          "name": "Smartphone",
        }
 
    ```
>Verbo Get : http://localhost:3000/products/search?q="palavra-Chave-aqui"

### Esperado
```
A rota espera fragmentos de palavras ou a palavra que vincule com o nome de algum produto existente no banco, caso compatível ele retornará o dado do banco.

```

>Verbo Get : http://localhost:3000/products/2

### Esperado

```
A rota espera receber id para a busca de um produto vinculado a este id.
   json
       {
          "id": 2,
          "name": "Traje de encolhimento",
       }

```

## Técnologias usadas

Back-end:
> Desenvolvido usando: Docker, Docker-compose

## Instalando Dependências

> Docker
```bash
cd api/ 
npm install
``` 
## Aviso Importante 
Para roda a aplicação e necessário esta com o docker instalado  no dispositivo, caso não esteja instalado você pode encontra como instalar neste [link](https://docs.docker.com/engine/install/ubuntu/) site oficial 

## Executando Testes

* Para rodar todos os testes:

> Test
```bash
cd src/ 
npm test
``` 




# 🚧 README em construção 🚧

<!-- Olá, Tryber!

Esse é apenas um arquivo inicial para o README do seu projeto.

É essencial que você preencha esse documento por conta própria, ok?

Não deixe de usar nossas dicas de escrita de README de projetos, e deixe sua criatividade brilhar!

⚠️ IMPORTANTE: você precisa deixar nítido:
- quais arquivos/pastas foram desenvolvidos por você; 
- quais arquivos/pastas foram desenvolvidos por outra pessoa estudante;
- quais arquivos/pastas foram desenvolvidos pela Trybe.

-->
