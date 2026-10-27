---
title: "eJPT — Minha experiência, preparação e dicas para quem está começando"
date: 2026-10-27 09:00:00 -0300
permalink: /experiencias/ejpt/
categories:
  - exam-experience
tags:
  - eJPT
  - INE
  - pentest
  - metodologia
excerpt: "Por que considero o eJPT uma boa primeira certificação prática e como a atenção às perguntas, aos serviços e à enumeração faz diferença."
toc: true
toc_label: "Neste relato"
toc_sticky: true
---

## Minha visão sobre o eJPT

O **eJPT (eLearnSecurity Junior Penetration Tester), da INE**, foi uma das certificações que fizeram parte da minha trajetória em segurança ofensiva. Já não me lembro de cada detalhe do exame, mas há recomendações que continuo considerando importantes para quem está começando.

Na minha experiência, o eJPT é **bem mais tranquilo do que certificações como o CPTS**. Não digo isso para desvalorizar a prova; é justamente o contrário. Acho que ele cumpre muito bem o papel de apresentar uma avaliação prática a quem está construindo a base em pentest.

Para mim, **o conteúdo do próprio curso da INE já fornece uma preparação suficiente**, desde que você realmente entenda o que está fazendo nos laboratórios. Não vejo necessidade de transformar a preparação em uma corrida por dezenas de materiais adicionais.

## Entenda o alvo — e leia as perguntas com atenção

Uma das dicas mais importantes que posso deixar é: **entenda o contexto antes de começar a testar tudo o que encontra**.

As perguntas podem ajudar a organizar o raciocínio. Às vezes, o próprio enunciado chama a atenção para uma informação, um serviço ou uma relação entre sistemas que merece investigação. Ler com cuidado pode evitar que você passe muito tempo explorando uma hipótese que não faz sentido naquele momento.

Isso não significa tentar descobrir respostas apenas interpretando frases. Significa **cruzar as informações fornecidas com o que você observa no ambiente**.

Antes de avançar, eu procuraria responder:

- Qual ativo ou serviço estou analisando?
- O que já sei sobre suas portas, seus protocolos e sua função?
- Existem nomes, usuários ou aplicações relevantes para o contexto?
- Que informações ainda preciso confirmar?
- Qual próximo passo realmente acrescentará algo à investigação?

O importante é sair do piloto automático.

## Enumeração é mais do que encontrar uma porta aberta

Saber reconhecer **protocolos, portas e informações relacionadas a usuários** é fundamental. Um serviço identificado é apenas o começo: você ainda precisa entender o que ele oferece e quais verificações fazem sentido.

Em uma aplicação web, por exemplo, não basta descobrir que existe uma página de login. Vale entender a estrutura da aplicação, as rotas acessíveis, os caminhos relevantes, os endpoints, os usuários e as diferentes funcionalidades disponíveis.

Da mesma forma, identificar uma máquina e conseguir algum nível de acesso não encerra automaticamente o trabalho de enumeração. É importante saber **o que foi observado, o que ficou pendente e se você compreendeu a superfície do ativo**.

Uma porta aberta não é necessariamente uma vulnerabilidade. Um usuário descoberto não significa privilégio. Cada observação deve ajudar a formular a próxima hipótese.

## Não foque somente nas respostas finais

Outra questão que considero importante é a maneira de encarar a avaliação. **Minha compreensão da proposta do eJPT é que o desempenho prático nas atividades também importa, e não apenas preencher respostas.**

Por isso, eu não estudaria apenas para encontrar uma resposta específica. Procuraria realizar a enumeração de forma consistente e cobrir os objetivos relevantes — inclusive aqueles que podem parecer menos interessantes porque não oferecem uma resposta imediata.

Por exemplo: se você localizou uma aplicação, mas não explorou suas funcionalidades e os recursos pertinentes ao escopo, pode acabar deixando uma parte importante do trabalho incompleta.

Os critérios de pontuação podem variar conforme a versão do exame, então vale sempre consultar os requisitos oficiais atuais da INE. O conselho que permanece válido é: **estude para saber conduzir a atividade, não apenas para preencher o questionário**.

## A metodologia que eu usaria

Para organizar os estudos, gosto de seguir uma linha de raciocínio simples:

**Escopo → ativos → portas e protocolos → serviços → DNS e VHOSTs (quando aplicáveis) → aplicações e usuários → hipóteses → validação → revisão do que ficou pendente.**

Mais importante do que seguir essa sequência mecanicamente é saber **quando voltar a uma etapa anterior**. Uma nova informação sobre um serviço ou uma aplicação pode mudar o significado do que você já havia encontrado.

Desenvolvi um conjunto de páginas que detalham esse processo:

- [Metodologia geral de enumeração]({{ '/metodologias/geral/' | relative_url }})
- [Enumeração Web]({{ '/metodologias/web/' | relative_url }})
- [Enumeração Windows]({{ '/metodologias/windows/' | relative_url }}) e [Linux]({{ '/metodologias/linux/' | relative_url }})

Essas trilhas também são úteis fora do eJPT, porque ajudam a criar uma rotina de trabalho que você poderá amadurecer com outras certificações.

## O que eu recomendaria a quem vai fazer o eJPT

**Faça bem o curso oficial.** Não basta assistir às aulas ou reproduzir uma sequência de passos. Tente explicar para si mesmo o motivo de cada descoberta.

**Entenda o que está sendo perguntado.** Leia as questões, identifique o contexto e compare com suas anotações.

**Aprenda serviços e protocolos.** Reconhecer o papel de uma porta e saber o que investigar no serviço faz mais diferença do que decorar resultados.

**Não pule a enumeração.** Organize o que já verificou, registre o que encontrou e revise possíveis lacunas.

**Pense no processo inteiro.** Sua evolução vem de aprender a conduzir uma investigação, não apenas de chegar à resposta final.

## Considerações finais

Considero o eJPT uma **excelente porta de entrada para certificações práticas de pentest**. Com dedicação ao curso da INE e uma boa base de enumeração, acredito que é uma avaliação bastante acessível.

Se eu pudesse resumir meu principal conselho em uma frase, seria: **entenda o ambiente e as perguntas antes de sair procurando respostas**.

Para quem quer continuar evoluindo depois dessa etapa, compartilhei também minha [experiência com o eCPPT]({{ '/experiencias/ecppt/' | relative_url }}) e com o [CPTS]({{ '/experiencias/cpts/' | relative_url }}).
