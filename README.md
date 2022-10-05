# ![icon-site](https://user-images.githubusercontent.com/45273884/194178175-496bcd6e-12cb-4108-9871-0ac49ee5d98f.png) Coffee Delivery

![chrome_K34Wji2TWt](https://user-images.githubusercontent.com/45273884/194182829-a36e1620-70e0-42a4-8fe8-325f4dfeddf7.gif)

## Descrição

Este é Coffee Delivery, você pode acessá-lo por este [link](https://coffee-delivery.masamasa.vercel.app/), ele é um projeto desafio feito após finalizar o segundo módulo do curso Ignite React da Rocketseat visando usar, fixar e avaliar todos os conhecimentos do segundo módulo sobre estados, ContextAPI, LocalStorage, imutabilidade de estado, listas e chaves, props e componentização.

### Algumas funcionalidades deveriam serem atingidas nesse projeto como:

 - Listar produtos (cafés) disponíveis para compra;
 - Adicionar uma quantidade específicas de itens no carrinho;
 - Aumentar ou remover a quantidade de itens no carrinho;
 - Ter um formulário para o usuário preencher;
 - Exibir o total de itens no carrinho no Header;
 - Exibir o valor total da soma de itens no carrinho multiplicados pelo valor.

### Além do que foi exigido, decidi adicionar mais algumas pequenas funcionalidades como:

 - Pedir o CEP do usuário na primeira visita no site para mostrar sua localização no header;
 - Uso da api ViaCEP para buscar dados da localidade e disponibilizar no formulário facilitando a experiência do usuário;
 - Máscaras para o input de CEP.

## Como iniciar o projeto

Instale as dependências do projeto com:
```
npm i
```

Para iniciar a aplicação use:
```
npm run dev
```

Para buildar a aplicação use:
```
npm run build
```

## Tecnologias usadas

 - O projeto foi escrito usando Typescript;
 - React com Vite;
 - Usando as apis próprias do react fiz um contexto, reducers e actions, junto com a biblioteca immer para poder escrever um código simples e não sacrificar os conceitos de imutabilidade;
 - Foi usado styled-components com polished para usar css in js.
 - Ícones com Phosphor;
 - Componentes primitivos usando Radix Ui;
 - Axios para chamadas de apis e o consumo da api ViaCEP para leitura de ceps e recebimento de informações de localizações;
 - Formulário usando react-hook-forms com validação da biblioteca zod.

## Possíveis problemas

  Não foi detectado nenhum até o momento.

## Possíveis melhorias

 - Usar os dados do endereço pegos pelo cep inputado no modal e disponibilizá-los na página de checkout para facilitar a vida do user;
 - Não senti necessidade mas é possível modificar o contexto para que a home também conte a quantidade de cafés no checkou em vez de sempre manter 0;
 - Adicionar algumas media queries para quebrar grids ou containers melhorando a visualização em telas menores;
 - O botão de confirmar o CEP faz a tela piscar como se o funcionalidade de fechar o modal rolasse duas vezes;
 - De resto sinto que está bom o suficiente e trabalho a mais no projeto seria algo além do necessário para um projeto de estudos.

## Autor

Marcelo "Masa" Alves
- <img src="https://user-images.githubusercontent.com/45273884/192056758-d7c1995b-4459-4acf-bb20-c4e19ee5daf3.svg" alt="twitter-logo" style="width: 20px; height: 20px;"> [@masamarux](https://twitter.com/masamarux)
- <img src="https://user-images.githubusercontent.com/45273884/192056770-fa5b48e0-a216-4f55-86fc-83cc6dd3590a.svg" alt="linkedin-logo" style="width: 20px; height: 20px;"> [Marcelo Alves](https://www.linkedin.com/in/marceloalves-/)


## Histórico de versões
* 1.0 - (05/10/2022)
    * Lançamento inicial
