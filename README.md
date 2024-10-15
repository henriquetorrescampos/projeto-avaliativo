# Guarda-Chuva Farmácias - Sistema de Movimentação de Produtos

<img src="assets/logo.jpeg" alt="logo" width="200"/>
![Alt text](assets/logo.jpeg)

## Descrição do Projeto

A **Multinacional Guarda-Chuva Farmácias** está desenvolvendo um aplicativo interno para gerenciar as movimentações de produtos entre as filiais da organização. Este projeto visa facilitar o acompanhamento de entregas e movimentações de estoque com uma interface interativa, incluindo funcionalidades específicas para motoristas e gestores de filiais.

### Funcionalidades do Sistema

- **Tela de Login:** Validação de credenciais e navegação para a tela Home.
- **Tela Home:** Acesso rápido às funcionalidades de listagem de produtos e gerenciamento de usuários.
- **Listagem de Usuários:** Exibe o nome, tipo e status de usuários, com controle para ativar/desativar.
- **Cadastro de Usuários:** Formulário completo para adicionar novos usuários (motorista ou filial).
- **Listagem de Produtos:** Exibição de produtos com filtro de pesquisa por nome ou filial.
- **Movimentação de Produtos:** Gestão de transferências entre filiais, incluindo cadastro de novas movimentações e acompanhamento de status.
- **Funcionalidades para Motoristas:** Gestão de entregas com captura de fotos via câmera e atualizações de status.

### Requisitos do Projeto

#### Requisito 1 - Tela de Login (1 ponto)

- Campos: Email e Senha
- Validação via requisição POST para `/sessions`
- Redirecionamento para a **Tela Home** após login bem-sucedido
- Armazenamento do nome e perfil do usuário no `localStorage`

#### Requisito 2 - Tela Home (0,5 ponto)

- Componentização do Header com exibição do nome e perfil do usuário
- Botões para navegação à tela de listagem de produtos e gerenciamento de usuários

#### Requisito 3 - Listagem de Usuários (1 ponto)

- Requisição GET para `/users` ao carregar a tela
- Exibição de nome e tipo do usuário em Cards, com status visual (borda verde = ativado, fundo vermelho = desativado)
- Switch para ativar/desativar usuários via requisição PUT para `/users/:id/status`
- Botão para adicionar novo usuário

#### Requisito 4 - Cadastro de Usuários (1 ponto)

- Formulário de cadastro com os seguintes campos:
  - Picker para selecionar se é Motorista ou Filial
  - Nome completo
  - CPF/CNPJ
  - Endereço completo
  - Email
  - Senha
- Validação e envio dos dados via POST para `/users`

#### Requisito 5 - Listagem de Produtos (1 ponto)

- Exibição dos produtos com imagem, nome, filial e quantidade
- Requisição GET para `/products` ao carregar a tela
- Campo de pesquisa para filtrar produtos por nome ou filial

#### Requisito 6 - Listagem de Movimentações (0,5 ponto)

- Exibição de movimentações em Cards com informações de origem, destino, produto e status
- Requisição GET para `/movement`
- Botão para adicionar nova movimentação

#### Requisito 7 - Cadastro de Movimentação (1 ponto)

- Formulário para cadastrar movimentações com os seguintes campos:
  - Picker para filial de origem e destino
  - Picker para produto
  - Campo de quantidade (numérico)
  - Campo de observações (multiline)
- Requisição POST para `/movement`

#### Requisito 8 - Movimentações para Motorista (1 ponto)

- Exibição de movimentações com status "Aguardando Coleta", "Em Trânsito" e "Coleta Finalizada"
- Funcionalidade de captura de foto via câmera e atualização de status através de requisições PUT para `/moviment/:id`
- Opção de visualização de mapa para mostrar o trajeto da entrega

### Tecnologias Utilizadas

- **Front-end:** React Native
- **Back-end:** Node.js (para endpoints)
- **Armazenamento Local:** `localStorage` para gerenciamento de estado do usuário

### Instruções de Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/henriquetorrescampos/projeto-avaliativo
   ```
