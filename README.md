# ![image](https://github.com/user-attachments/assets/3d17c376-aee1-46cc-b344-d50249b56fbd)
Esse repositório foi desenvolvido para aprender a como gerar ums action que pode ser enviada para o Github Marketplace.

## Desenvolvimento
É necessário a criação de um arquivo `action.yml` na raíz do seu projeto que define os metadados que você vai usar e definir no seu workflow
```yml
name: 'Action name'
author: 'Author, e.g. @lucasgianine'
description: 'Action description'
inputs:
  input:
    description: 'Input action description'
    required: true
  input-2:
    description: 'Input-2 action description'
    required: false
outputs:
  greeting:
    description: 'Output action description'
runs:
  using: 'node16' # Interpretador usado
  main: 'src/index.js' # localização da sua função
```

Após a configuração, você pode criar uma função para sua action, seja ela `Javascript`, `Python`, `Java`, etc.
Com isso, aplique sua action em forma de teste em um `.github/workflows/test.yml` e com tudo funcionando publique no Marketplace.
