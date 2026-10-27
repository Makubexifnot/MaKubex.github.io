---
title: "CPTS — Minha experiência, metodologia e lições sobre documentação"
date: 2026-10-27 08:00:00 -0300
permalink: /experiencias/cpts/
categories:
  - exam-experience
tags:
  - CPTS
  - Hack-The-Box
  - metodologia
  - relatorios
excerpt: "O que minha jornada com o CPTS me ensinou sobre raciocínio, enumeração, organização das evidências e qualidade do relatório — sem spoilers."
toc: true
toc_label: "Neste relato"
toc_sticky: true
---

> **Sobre este relato:** esta é uma versão inicial construída a partir de fatos já compartilhados sobre minha preparação e sobre o feedback do meu relatório. Não é um walkthrough e não revela informações sobre alvos, credenciais, flags, soluções ou infraestrutura do exame.

## Meu contexto

Eu já vinha estudando e trabalhando com segurança ofensiva, com experiências em aplicações web, sistemas Windows e Linux e ambientes Active Directory. Depois de certificações anteriores, encarei o **CPTS (Certified Penetration Testing Specialist), da Hack The Box**, como mais uma oportunidade de aprofundar a metodologia e aprimorar minha capacidade de documentar uma avaliação prática. Alguns de vocês devem se perguntar **"Porque CPTS?"**, mas prefiro que vocês se perguntem **"Porque não CPTS?"**.

Consegui realizar o exame em exatamente 1 dia e 16horas com apenas 4 horas de descanso, porém meu maior trabalho não foi o exame e sim a documentação. Levem a documentação bem a sério! 

Uma das principais lições desse processo foi que nem tudo é realmente importante, haverá diversas informações ou credenciais que te levaram a nada.

Uma outra dica muito importante é IMAGINE o funcionamento do ambiente! Antes de realizar qualquer certificação sempre imagino o que posso encontrar e me preparo antes desde a confiugração do meu garuda a scripts pré-configurados como msfvenom/burp-suite, bloodhound ligado pronto para receber seu import, e qualquer similar, comandos pré-configurados como 

*nmap -sC -Pn --min-rate=5000 <alvo> -oN scan_1k_<alvo>*

e sites como para descriptografia de hashes, criação de revshells, etc.

*https://md5decrypt.net/, https://www.revshells.com/*

Antes de eu iniciar o exame eu já sábia como ele deveria ser e acredito que o modúlo **Attacking Enterprise Networks** ajuda bastante nisso, quero dizer pelo menos na fase inicial. Então imagine, será que vou começar em um alvo externo, terei que comprometer uma aplicação web, terei que realizar algum tipo de credential hunting, descobrir outros vhosts e a partir daí irá começar meu verdadeiro trabalho? Será que existirá uma aplicação php? Será que a aplicação php possa ser vulnerável a um LFI/PHP Wrappers ou ataques semelhantes? Será que a aplicação web será vulnerável a um SQLI? Se sim, que campo seria? De login? De e-mail para recuperação de senha? E daí você vai montando sua metodologia própria!


## O papel da metodologia

A organização do trabalho se tornou um tema central para mim. Em avaliações práticas, é fácil focar excessivamente na próxima tentativa e perder de vista as informações já coletadas.

A estrutura que considero mais útil para manter o raciocínio é:

**Portas → DNS → VHOSTs → serviços → hipótese → Rede interna → Privecsc/Pivoting → Identificação de ativos → Enumeração → Credential Hunting → Movimentação lateral → validação → reenumeração → evidências e relatório.**

Essa é uma metodologia **geral e transferível**, não a sequência exata dos sistemas da prova. Documentei o processo em uma seção separada do blog:

- [Fluxo geral de reconhecimento e enumeração]({{ '/metodologias/geral/' | relative_url }})
- [Windows]({{ '/metodologias/windows/' | relative_url }}) e [Linux]({{ '/metodologias/linux/' | relative_url }})
- [Active Directory]({{ '/metodologias/active-directory/' | relative_url }})
- [Web e APIs]({{ '/metodologias/web/' | relative_url }})

Meu objetivo ao compartilhar isso é ajudar outro estudante a desenvolver um **processo de decisão**, em vez de memorizar comandos.

## O dia da avaliação: o que vale compartilhar

Sem entrar em conteúdo específico do exame, a recomendação que levo dessa experiência é registrar evidências **durante** a investigação, e não confiar que será possível reconstruir tudo ao final.

Para cada descoberta relevante, vale preservar o contexto: de onde surgiu a pista, o que foi observado, por que ela mereceu atenção, o que foi confirmado e como aquela informação influenciou o próximo passo.

Outra prática importante é separar o caderno pessoal de investigação do material que realmente deve entrar no relatório. Nem toda tentativa precisa ser uma evidência; uma conclusão relevante, porém, deve ser sustentada por evidência suficiente.

## Minha maior dificuldade: o relatório

Uma dificuldade concreta da minha jornada com o CPTS foi a **apresentação profissional do relatório**. Recebi feedback solicitando melhorias substanciais na estrutura e na forma de demonstrar os achados (por mais de estarem já bem definidos).

Os pontos mais importantes que precisei revisar foram:

- **Sumário e navegação:** índice com páginas corretas e organização consistente.
- **Visão executiva:** resumo de achados claro, com severidades identificáveis e ordenadas.
- **Evidências no contexto:** imagens acompanhando a explicação, com legenda útil, em vez de um conjunto solto de capturas.
- **Reprodutibilidade:** sequência narrativa coerente, com pré-condições e conclusão por etapa.
- **Consistência:** títulos, classificação de risco, referências e informações técnicas alinhados entre as seções.
- **Acabamento:** eliminação de placeholders, revisão da linguagem e padronização da apresentação.

Foi uma lição importante: **o relatório faz parte da entrega técnica, e não é um detalhe administrativo que vem depois.**

## O que eu faria diferente

Se eu estivesse organizando uma nova avaliação prática, daria atenção especial a quatro cuidados:

1. Criar desde o início uma estrutura de notas baseada em ativos, hipóteses e evidências.
2. Registrar a conclusão e o impacto de cada achado enquanto o contexto ainda está claro.
3. Reservar uma etapa específica para revisar coerência entre resumo, detalhes técnicos e recomendações.
4. Entender mais o fluxo de como as máquinas estão conectadas e quais máquinas realmente estão conectadas.
6. Ler o relatório como se fosse alguém que não acompanhou a investigação e precisa entender o que aconteceu sem fazer suposições.

Esses cuidados servem tanto para certificações quanto para trabalhos profissionais de pentest.

## Dicas para futuros estudantes

**Não substitua raciocínio por listas de comandos.** Entenda o serviço, formule hipóteses e documente por que escolheu a próxima verificação.

**Reenumere sempre que o contexto mudar.** Uma nova informação pode alterar prioridades ou esclarecer resultados anteriores.

**Trate evidência como parte do processo.** Capturas e observações devem estar associadas às conclusões que sustentam.

**Pratique escrita técnica e revisão.** Um relatório pode conter descobertas importantes e, ainda assim, precisar de melhorias para atender a um padrão profissional.

**Respeite as regras do exame.** É possível compartilhar aprendizados sem divulgar detalhes confidenciais, respostas ou procedimentos específicos de uma avaliação.

## Considerações finais

Minha experiência com o CPTS reforçou a importância de unir **metodologia, raciocínio e comunicação técnica**. Este artigo é o ponto de partida: pretendo complementá-lo com detalhes pessoais que possam ser compartilhados com segurança, mantendo a confidencialidade da avaliação.

Para aprofundar o processo aplicável a diferentes ambientes, comece pelo [índice de metodologias]({{ '/metodologias/' | relative_url }}).
