# 🧮 Calculadora Web

Calculadora desenvolvida em **JavaScript puro**, com suporte a teclado, mouse, áudio e recursos extras como copiar e colar.  
Projeto voltado à prática de lógica, eventos e manipulação do DOM.

---

## 🚀 Como executar

```bash
git clone https://github.com/jaumrosa/calculadora.git
cd calculadora
````

Abra o arquivo `index.html` no navegador.

> Nenhuma dependência necessária

---

## ✨ Funcionalidades

### 🔢 Operações

* Soma
* Subtração
* Multiplicação
* Divisão
* Porcentagem

### 🖱️ Interação

* Suporte a mouse e teclado
* Feedback visual nos botões
* Experiência similar a calculadoras físicas

### ⌨️ Atalhos de teclado

| Tecla          | Ação            |
| -------------- | --------------- |
| 0–9            | Inserir números |
| /, * , -, +, % | Operadores      |
| Enter / =      | Calcular        |
| Backspace      | CE              |
| Esc            | AC              |
| . ou ,         | Decimal         |

### ⚙️ Extras

* Copiar (`Ctrl + C`) e colar (`Ctrl + V`)
* Som dos botões (toggle com duplo clique em **AC**)
* Suporte a números decimais (validação de múltiplos pontos)
* Tratamento de erros (`Error` para operações inválidas)
* Data e hora em tempo real (`pt-BR`)

---

## 🧠 Arquitetura (resumo)

* Estrutura baseada em classe JavaScript
* Operações armazenadas em um array (`_operation`)
* Manipulação dinâmica do DOM
* Eventos centralizados (teclado + mouse)
* Uso de `try/catch` para tratamento de erros

---

## 📁 Estrutura do projeto

```
/calculadora
├── index.html
├── style.css
└── script.js
```

---

## 👨‍💻 Objetivo

Projeto criado para consolidar fundamentos de JavaScript e simular um cenário real de aplicação interativa.