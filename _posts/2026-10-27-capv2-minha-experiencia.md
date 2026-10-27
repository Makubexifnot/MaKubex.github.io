---
title: "CAPv2 (CAP) — Minha experiência com os fundamentos de AppSec"
date: 2026-10-27 11:15:00 -0300
permalink: /experiencias/capv2/
categories:
  - exam-experience
tags:
  - CAP
  - CAPv2
  - SecOps-Group
  - AppSec
  - fundamentos
excerpt: "Uma hora para interpretar cenários, reconhecer falhas em códigos e cabeçalhos e demonstrar domínio dos fundamentos de segurança de aplicações."
toc: true
toc_label: "Neste relato"
toc_sticky: true
---

## Minha visão sobre o CAPv2

Entre as certificações que realizei, o **CAPv2 — Certified AppSec Practitioner (CAP), da The SecOps Group** — está entre as mais acessíveis. Isso não significa que seja uma prova irrelevante: ela exige uma boa compreensão dos fundamentos de segurança de aplicações e a capacidade de reconhecer problemas mesmo quando não existe uma aplicação disponível para explorar.

Acho importante esclarecer essa diferença. Em avaliações práticas, como o [CAPen]({{ '/experiencias/capen/' | relative_url }}), você investiga uma aplicação e desenvolve suas próprias hipóteses. No CAP, o formato é baseado em **questões de múltipla escolha**, com cenários e evidências apresentados diretamente nos enunciados.

Na minha avaliação, o desafio foi menos explorar um sistema e mais **reconhecer o significado técnico das informações apresentadas**. Afinal, nem sempre você precisa ter acesso à máquina para identificar uma possível fragilidade.

*Observação sobre o nome:* utilizo **CAPv2** para me referir à versão que conheci. A certificação é anunciada atualmente pela SecOps como **Certified AppSec Practitioner (CAP)**; confira a versão e as regras no momento da inscrição.

## Não ter uma máquina não significa não ter um alvo

Uma lição que gosto de reforçar é: **não é porque não existe uma VM ou um aplicativo interativo que você deixa de ter algo para analisar**.

Um cenário pode exigir que você leia uma imagem, observe uma resposta HTTP, interprete um trecho de código ou identifique uma configuração insegura. O alvo, nesse contexto, é **a evidência descrita pela questão**.

O desafio está em identificar o que o material realmente demonstra, em vez de escolher uma alternativa apenas porque reconhece o nome de uma vulnerabilidade.

Para mim, as perguntas fazem mais sentido quando começo pelo contexto: qual componente está em análise, que comportamento foi demonstrado, qual controle deveria existir e qual consequência aquela falha poderia causar?

## O relógio: um minuto por questão

**Na minha experiência, trabalhei com a referência de 60 questões em uma hora.** Isso significa, em média, **um minuto por questão**. A duração oficial divulgada atualmente é de 60 minutos; a quantidade de perguntas e os detalhes do formato devem ser confirmados na versão vigente.

Esse ritmo exige atenção. Não adianta conhecer um assunto e perder cinco minutos tentando encontrar uma explicação perfeita para uma única pergunta.

Minha recomendação é:

1. Leia primeiro o que a questão quer identificar.
2. Examine o cenário e procure a evidência relevante.
3. Diferencie as alternativas pela causa técnica, não só pelo vocabulário.
4. Se permanecer em dúvida e a plataforma permitir, avance e retorne ao final.
5. Reserve os últimos minutos para revisar respostas e enunciados que possam ter sido interpretados rapidamente demais.

**Leve cada minuto a sério**, mas evite que a pressão faça você pular a leitura dos detalhes. Uma palavra sobre o contexto ou uma configuração específica pode mudar completamente a interpretação.

## O que considero essencial estudar

O CAP avalia os fundamentos de **Application Security**. Antes de realizar o exame, eu revisaria:

| Tema | O que é importante compreender |
|---|---|
| **HTTP e cabeçalhos de segurança** | Papel de cabeçalhos, políticas de navegador e riscos de configurações ausentes ou inadequadas |
| **Autenticação e sessões** | Diferenças entre identificar um usuário, controlar uma sessão e autorizar operações |
| **Autorização e IDOR** | Controle de acesso a objetos, permissões e fronteiras entre perfis |
| **XSS e injeções** | Causa da falha, contexto da entrada e impacto esperado |
| **SQL Injection e XXE** | Quando dados ou documentos são processados de forma insegura |
| **CSRF** | Relação entre ações autenticadas, estado da aplicação e controles de proteção |
| **Uploads e traversal** | Validação de arquivos, caminhos, armazenamento e exposição indevida |
| **TLS, hashing e criptografia** | Para que servem os controles e por que não são intercambiáveis |
| **Falhas de configuração e lógica** | Como decisões de implementação podem enfraquecer a segurança |

Isso não é uma lista de questões da minha prova: é a organização dos **conceitos presentes no domínio de estudo**.

## Como eu estudaria sem depender de um curso único

Ao contrário do caminho guiado que encontrei na INE, para o CAP eu recomendo construir a preparação a partir do **syllabus oficial**, que enumera os assuntos esperados. Não partiria do pressuposto de que há um curso completo que resolverá toda a preparação.

Meu plano seria:

- Ler os tópicos oficiais e avaliar quais eu realmente consigo explicar.
- Revisar os princípios por trás de cada classe de falha.
- Estudar exemplos públicos de código, cabeçalhos HTTP e configurações.
- Praticar leitura de cenários, em vez de apenas decorar definições.
- Fazer o **mock exam da SecOps** e usar o resultado para identificar lacunas.

Vale conhecer as referências da [OWASP](https://owasp.org/www-project-top-ten/) e os materiais públicos da [PortSwigger Web Security Academy](https://portswigger.net/web-security/). Mesmo para uma prova de múltipla escolha, uma boa base prática ajuda a entender por que algo está errado.

## Minha metodologia para interpretar questões técnicas

É possível adaptar o raciocínio de pentest para uma questão de múltipla escolha:

**Contexto → evidência → controle esperado → falha provável → impacto → alternativa mais coerente.**

Se o enunciado apresentar um trecho de código, começo tentando entender **o que a função faz com a entrada**. Se apresentar uma resposta HTTP, procuro compreender **o que o navegador ou o servidor fará com aqueles cabeçalhos**. Se descrever permissões, pergunto **qual identidade deveria acessar qual recurso**.

Também procuro não confundir uma **pista** com uma prova definitiva. Um cabeçalho ausente pode justificar uma recomendação de hardening, mas a relevância do risco depende do contexto.

Essa forma de análise conversa com minha [Metodologia de Enumeração Web]({{ '/metodologias/web/' | relative_url }}), principalmente nos tópicos de autenticação, autorização e comportamento de aplicações.

## O que eu recomendaria para quem vai prestar o CAP

**Não subestime uma prova teórica.** Entender os fundamentos de verdade é diferente de reconhecer palavras familiares.

**Saiba interpretar imagens, configurações e código.** Uma pergunta pode apresentar evidências suficientes para avaliar um risco sem acesso ao sistema.

**Domine o funcionamento das proteções.** Não basta saber o nome de um cabeçalho ou de uma vulnerabilidade; entenda o que aquele controle protege e quais são seus limites.

**Treine o tempo.** Com cerca de um minuto por questão na experiência que tive, organização e atenção são tão importantes quanto conhecimento.

**Use os objetivos da certificadora.** O syllabus e o mock oficial são referências mais produtivas do que tentar adivinhar a prova.

## Considerações finais

Para mim, o CAPv2 é uma boa avaliação inicial para quem quer verificar sua compreensão de **AppSec**. Ele é mais acessível do que o CAPen, mas me lembra que o trabalho de segurança começa muito antes da exploração: **é preciso saber ler, interpretar e reconhecer comportamentos inseguros**.

Se você quer aprofundar essa trajetória, leia também minha [experiência com o CAPen]({{ '/experiencias/capen/' | relative_url }}) e o relato do [CNSP]({{ '/experiencias/cnsp/' | relative_url }}).

**Referências:** [CAP — página oficial e syllabus](https://pentestingexams.com/certifications/essentials/certified-application-security-practitioner/) · [Mocks da SecOps](https://pentestingexams.com/mock-pentesting-exams/).
