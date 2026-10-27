---
title: "CNSP — Minha experiência com fundamentos de redes e segurança"
date: 2026-10-27 11:20:00 -0300
permalink: /experiencias/cnsp/
categories:
  - exam-experience
tags:
  - CNSP
  - SecOps-Group
  - network-security
  - fundamentos
excerpt: "O que considero importante no CNSP: compreender protocolos, portas, arquitetura, autenticação e interpretação de cenários sob pressão de tempo."
toc: true
toc_label: "Neste relato"
toc_sticky: true
---

## Minha visão sobre o CNSP

O **CNSP (Certified Network Security Practitioner), da The SecOps Group**, está entre as certificações mais tranquilas que realizei quando comparado a avaliações práticas como eCPPT, CPTS e CAPen.

A razão é principalmente o **formato do exame**. Em vez de conduzir uma exploração completa em um ambiente disponibilizado para isso, você responde a perguntas conceituais e situacionais que testam seu conhecimento de segurança de redes.

Mas não interprete isso como ausência de análise técnica. É possível ter um cenário, uma configuração, uma captura ou uma descrição de tráfego e precisar **reconhecer o que está acontecendo**, mesmo sem interagir diretamente com a máquina.

O CNSP me lembra que um bom profissional precisa dominar as bases de redes e não apenas saber executar ferramentas.

## Uma hora de atenção

Minha referência para a prova foi **60 questões em 60 minutos**: na prática, uma média de **um minuto por questão**. A SecOps confirma a duração oficial de uma hora para o CNSP; a quantidade de questões deve ser conferida nas condições da versão que você realizará.

O desafio não é apenas o conteúdo, mas o ritmo. Uma questão que parecia simples pode consumir tempo quando envolve mais de uma camada de rede, um detalhe de configuração ou alternativas muito parecidas.

Gosto de uma estratégia simples:

- Entender primeiro **qual é a pergunta central**.
- Identificar o protocolo, componente ou controle descrito.
- Distinguir o comportamento normal da configuração insegura.
- Eliminar interpretações que não correspondem ao cenário.
- Se houver dúvida persistente, avançar e retomar depois, quando isso for permitido.

Um minuto não é muito tempo. Por isso, **não deixe a leitura cuidadosa apenas para o fim do exame**.

## Não existe máquina? Ainda existe investigação

Quem associa pentest apenas a exploração de hosts pode estranhar uma certificação baseada em questões. Eu vejo de outra forma.

Se você encontra uma descrição de comunicação entre sistemas, o objetivo pode ser reconhecer **que protocolo está envolvido e por que aquele comportamento importa**. Se o cenário mencionar usuários, grupos ou recursos compartilhados, você precisa compreender **o papel das permissões e da autenticação**.

O mesmo vale para respostas de serviços e configurações de segurança. Em um trabalho profissional, boa parte das conclusões começa com a interpretação de evidências — e é exatamente esse raciocínio que considero importante desenvolver.

## O que eu estudaria para o CNSP

Recomendo prestar atenção aos fundamentos que aparecem no **syllabus oficial**:

| Área | Fundamentos prioritários |
|---|---|
| **Modelos OSI e TCP/IP** | Papel das camadas, encapsulamento e funções dos principais protocolos |
| **IP, TCP, UDP e ICMP** | Endereçamento, comunicação, estados, mensagens e interpretações de respostas |
| **Portas e serviços** | Associação entre serviços, portas usuais e o motivo da exposição |
| **DNS e descoberta de redes** | Resolução de nomes, inventário, identificação e mapeamento |
| **Switches, roteadores e segmentação** | Fluxo de tráfego, redes distintas e limites de acesso |
| **Windows, Linux e Active Directory** | Identidades, serviços, permissões, políticas e superfícies administrativas |
| **Criptografia, TLS e senhas** | Conceitos de proteção de dados, certificados, armazenamento e autenticação |
| **Web, bancos de dados e configurações** | Noções de serviços expostos, controles básicos e falhas comuns |
| **Malware, engenharia social e OSINT** | Identificação de riscos, vetores e medidas defensivas |
| **Ferramentas de análise** | Entender o que uma varredura ou uma captura de pacotes realmente demonstra |

Esses temas não precisam ser estudados com a profundidade de uma certificação avançada de pentest, mas **devem fazer sentido entre si**.

Conhecer uma porta famosa não basta: pergunte qual serviço pode estar por trás dela, qual protocolo é utilizado e como o resultado seria interpretado em uma rede real.

## Uma metodologia de leitura de cenários

A estrutura que eu usaria para estudar é:

**Componente → protocolo → fluxo esperado → evidência observada → configuração ou falha provável → consequência.**

Por exemplo, quando um cenário envolve DNS, minha prioridade é entender o papel de cada sistema e a sequência de resolução de nomes. Quando envolve permissões, procuro diferenciar identidade, grupo e direito efetivo.

Essa forma de pensar ajuda tanto em questões conceituais quanto em um pentest real. No meu blog, aprofundo esses assuntos nas trilhas de [Enumeração Geral]({{ '/metodologias/geral/' | relative_url }}), [Windows]({{ '/metodologias/windows/' | relative_url }}), [Linux]({{ '/metodologias/linux/' | relative_url }}) e [Active Directory]({{ '/metodologias/active-directory/' | relative_url }}).

## Preparação sem uma trilha oficial passo a passo

Assim como no CAP, eu priorizaria o **syllabus da SecOps**, materiais independentes e exercícios de interpretação.

Os **mock exams oficiais** são úteis para se acostumar ao estilo das perguntas e testar seu ritmo. A SecOps oferece mocks curtos para a categoria Essentials.

Eu recomendo ainda buscar exemplos didáticos de tráfego de rede, compreender o resultado de ferramentas como analisadores de pacotes e revisar os conceitos por trás de protocolos e serviços. A intenção não é decorar uma coleção de respostas: é conseguir explicar **por que uma alternativa é tecnicamente correta**.

## O que eu faria antes da prova

- Revisaria conceitos de rede e serviços com os quais tenho menos contato.
- Treinaria perguntas sobre protocolos, portas e interpretação de cenários.
- Praticaria a distinção entre vulnerabilidade, configuração fraca e comportamento esperado.
- Simularia um limite de tempo para evitar ficar preso a uma única questão.
- Verificaria o syllabus e as regras atuais da versão do exame.

## Considerações finais

Considero o CNSP uma certificação de entrada bastante acessível para quem está construindo ou revisando fundamentos de redes. Comparada a provas práticas, sua estrutura pode parecer mais simples, mas ela cobra algo importante: **a capacidade de interpretar tecnologia com clareza e rapidez**.

Se você está montando uma trilha de estudos, recomendo combinar o CNSP com o [CAPv2]({{ '/experiencias/capv2/' | relative_url }}) para trabalhar fundamentos de redes e aplicações antes de avançar para desafios mais práticos.

**Referências:** [CNSP — página oficial e syllabus](https://pentestingexams.com/certifications/essentials/certified-network-security-practitioner/) · [Mocks da SecOps](https://pentestingexams.com/mock-pentesting-exams/).
