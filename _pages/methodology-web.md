---
permalink: /metodologias/web/
title: "Metodologia de Enumeração — Web"
excerpt: "VHOSTs, endpoints, APIs, autenticação, autorização e lógica de negócio."
toc: true
toc_label: "Etapas"
toc_sticky: true
---

[← Metodologias]({{ '/metodologias/' | relative_url }}) · [Fluxo geral]({{ '/metodologias/geral/' | relative_url }})

## 1. Descobrir a superfície web

Comece pelo inventário de portas e pelo reconhecimento de DNS e VHOSTs. Para cada aplicação acessível, registre domínio, URL base, redirecionamentos, tecnologia aparente, mecanismos de sessão e perfis de teste disponíveis.

Não presuma que um IP e um domínio atendam à mesma aplicação; confira diferenças de comportamento e eventuais respostas padrão.

## 2. Mapear funcionalidades e caminhos

Organize a aplicação por **funcionalidades**, não só por URLs:

- Páginas públicas e fluxos autenticados.
- Interfaces administrativas e painéis de gestão.
- Endpoints e parâmetros observáveis, incluindo entradas de formulário e arquivos.
- Métodos HTTP aceitos e padrões de resposta.
- Arquivos estáticos, documentação pública, roteamento e mensagens de erro.
- Integrações entre front-end, API, autenticação e serviços externos.

**Entregável:** mapa de recursos com finalidade de cada fluxo e pré-condições de acesso.

## 3. Descoberta de APIs

Em APIs REST, acompanhe recursos, operações, parâmetros, identidades e mudanças de estado. Em GraphQL, documente operações e tipos disponibilizados legitimamente, inclusive os metadados de esquema quando habilitados.

Questões centrais:

- A operação é uma consulta ou modifica dados?
- Quais perfis são autorizados?
- Quais objetos pertencem ao usuário autenticado?
- O servidor verifica permissões a cada operação ou depende apenas da interface?
- Como erros e respostas mudam entre contas de teste?

A existência de um endpoint, mutation ou tipo de objeto não é uma vulnerabilidade.

## 4. Autenticação, sessão e autorização

Com contas e dados próprios de teste, avalie fluxos como login, recuperação de acesso, encerramento de sessão e separação de privilégios.

Dê atenção à **autorização horizontal** (acesso indevido a objeto de outra identidade) e **vertical** (função administrativa acessível a perfil comum). Compare permissões pelo comportamento do servidor e não somente pela presença de um botão na interface.

Registre contexto da identidade, objeto, ação pretendida, resposta e resultado verificável.

## 5. Entradas e lógica de negócio

Classifique entradas por uso e origem: texto, parâmetros de rota, identificadores, filtros, consultas, cabeçalhos, uploads e dados enviados à API. Desenvolva hipóteses sobre validação, isolamento de dados e transições de estado, evitando testes destrutivos.

Observe também regras de negócio: sequência de etapas, aprovação, alteração de permissões, fluxos de cadastro, limites e operações sensíveis. Uma falha de lógica pode ter impacto mesmo sem uma mensagem de erro característica.

## 6. Validação de achados

Para cada suspeita, diferencie um comportamento legítimo de um desvio de segurança. Documente o mínimo de evidência necessário, use objetos de teste, comprove permissões e evite copiar dados de terceiros.

**Scanner e automação auxiliam o reconhecimento; a confirmação depende de interpretação manual, controle experimental e impacto demonstrado.**

## 7. Correlação e reenumeração

Uma nova funcionalidade ou perfil autenticado pede revisão do mapa de rotas, endpoints e controles. Separe endpoints públicos, autenticados e administrativos. Ao encontrar um novo VHOST, retorne ao inventário web para não perder funcionalidades.

## 8. Checklist

- [ ] Portas web, DNS e VHOSTs associados.
- [ ] Inventário de rotas, funcionalidades, parâmetros e APIs.
- [ ] Fluxos de sessão e perfis de acesso compreendidos.
- [ ] Limites entre objetos de usuários e funções administrativas verificados.
- [ ] Entradas e mudanças de estado classificadas.
- [ ] Hipóteses validadas com dados de teste e evidências proporcionais.
- [ ] Impacto, correção e reteste claramente documentados.

**Entregável:** mapa da aplicação, matriz de autorização e registro dos achados por fluxo de negócio.
