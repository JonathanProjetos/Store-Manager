# Store-Manager

# Contexto
API RESTful utilizando arquitetura MSC. A pessoa usuária, independente de cadastro, deve conseguir, adicionar, ler, deletar e atualizar produtos. Enviar vendas para o sistema e essas vendas devem validar se o produto em questão existe, também é possível ler, deletar e atualizar vendas;

## Detalhes de endereços da rota Products

#### Verbo GET : http://localhost:3000/products

##### Esperado

 ```
A rota traz todos os produtos cadastrados no banco.

    json
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
    
#### Verbo Post : http://localhost:3000/products

##### Esperado
    ```json
    
        {
          "name": "Smartphone",
        }
 
    ```
    
#### Verbo Get : http://localhost:3000/products/search?q="palavra-Chave-aqui"

##### Esperado
```
A rota espera fragmentos de palavras ou a palavra que vincule com o nome de algum produto existente no banco, caso compatível ele retornará o dado do banco.

```


#### Verbo Get : http://localhost:3000/products/2

##### Esperado

```
A rota espera receber id para a busca de um produto vinculado a este id.
   json
       {
          "id": 2,
          "name": "Traje de encolhimento",
       }

```

#### Verbo Put : http://localhost:3000/products/2

##### Esperado
```
O verbo put espera rebeber um id do produto existente no banco e um body, com os valores para edição de um produto existente no banco.
    json
        
       {
          "name": "Smartphone",
       }

```

#### Verbo Delete : http://localhost:3000/products/2

##### Esperado
```
A rota espera receber um id que seja compatível com um id de um produto existente no banco.

```
## Detalhes de endereços da rota Sales

#### Verbo GET : http://localhost:3000/sales

##### Esperado
```
A rota traz todas as vendas cadastrados no banco.
 json
  [
     {
	"saleId": 1,
	"date": "2022-08-14T10:08:20.000Z",
	"productId": 1,
	"quantity": 5
     },
     {
	"saleId": 2,
	"date": "2022-08-14T10:08:20.000Z",
	"productId": 3,
	"quantity": 15
     }
    */ ...../*
  ]

```

#### verbo Post : http://localhost:3000/sales

##### Esperado
```
A rota post espera um body com este formato para cadastrar uma venda 
 json
  [
    {
      "productId": 1,
      "quantity":1
    },
    {
      "productId": 1,
      "quantity":2
    }
  ]
  
A rota responde, caso bem sucedido um objeto neste formato:

 json
     {
	"id": 3,
    "itemsSold": [
	  {
    	     "productId": 1,
	     "quantity": 1
	  },
	  {
	     "productId": 1,
	     "quantity": 2
	  }
    	]
      }
```
#### Verbo Get : http://localhost:3000/sales/1

##### Esperado

```
A rota espera receber um id para a busca de todas as vendas vinculado a este id.
   json
      [
	{
  	   "date": "2022-08-14T10:08:20.000Z",
	   "productId": 1,
	   "quantity": 5
	}
      ]

```
#### Verbo Put : http://localhost:3000/sales/1

##### Esperado
```
O verbo put espera rebeber um id de uma venda existente no banco e um body com os valores para edição de um produto existente no banco.
 json     
  [
    {
      "productId": 1,
      "quantity":10
    },
    {
      "productId": 2,
      "quantity":50
    }
  ]
  
 A rota responde, caso bem sucedido um objeto neste formato:
 
      {
	"id": 3,
    "itemsSold": [
	  {
    	     "productId": 1,
	     "quantity": 1
	  },
	  {
	     "productId": 1,
	     "quantity": 2
	  }
    	]
      }
```
#### Verbo Delete : http://localhost:3000/sales/1

##### Esperado

```
A rota espera receber um id para exclusão de uma venda caso ela exista.
  
```

## Técnologias usadas

> Desenvolvido em nodejs.

> Drive : Mysql

> Framework utilizado: Express.

> Libs: Joi, nodemon, express-async-errors, mysql2, eslint, sinon, mocha, chai, dotenv, body-parser

## Instalando Dependências

> Node
```bash
cd Store-Manager/
npm install
``` 
> Docker
```
cd Store-Manager/
npm install
docker-compose up -d
```
## Rodando a aplicação
```
bash
cd Store-Manager/
npm run debug
```

## Aviso Importante 
Caso queira roda a aplicação via docker deverá ter o docker instalado no dispositivo, caso não esteja instalado você pode encontra como instalar neste [link](https://docs.docker.com/engine/install/ubuntu/) site oficial 

## Executando Testes

* Para rodar todos os testes:

> Test
```bash
cd src/ 
npm test
``` 
