---
title: "CAPen — Minha experiência: uma prova surpreendente e quatro horas de pressão"
date: 2026-10-27 10:40:00 -0300
permalink: /experiencias/capen/
categories:
  - exam-experience
tags:
  - CAPen
  - SecOps-Group
  - AppSec
  - web-pentest
  - metodologia
  - gestao-do-tempo
excerpt: "O CAPen me surpreendeu pela variedade de técnicas, pela autonomia exigida e, principalmente, pelo desafio de administrar quatro horas de exame."
toc: true
toc_label: "Neste relato"
toc_sticky: true
---

## Uma certificação que me surpreendeu

Quando decidi realizar o **CAPen (Certified AppSec Pentester), da The SecOps Group**, confesso que esperava menos da dificuldade. Mas a certificação me surpreendeu pela quantidade de técnicas de segurança de aplicações que você precisa compreender e pela autonomia necessária para conduzir os testes.

Não é apenas conhecer conceitos do OWASP Top 10 ou identificar uma falha isolada. É preciso interpretar o contexto, enumerar funcionalidades, testar hipóteses e **correlacionar informações** para decidir o que fazer em seguida. Para mim, essa é uma das partes mais interessantes do CAPen.

A maior diferença em relação a outras certificações que realizei não foi somente o conteúdo: foi a sensação de estar diante de um desafio em que **sou eu quem precisa construir o próprio caminho**, como faria em um trabalho profissional.

## Diferente do eJPT e eCPPT: aqui não há um curso oficial que te conduza

Uma característica importante do CAPen é a **ausência de um curso oficial estruturado pela certificadora para preparar o candidato passo a passo**. A SecOps disponibiliza um syllabus e recomenda materiais de estudo independentes, mas a preparação técnica depende muito mais da bagagem que você já construiu.

Isso muda bastante minha forma de encarar a certificação.

Enquanto no [eJPT]({{ '/experiencias/ejpt/' | relative_url }}) e no [eCPPT]({{ '/experiencias/ecppt/' | relative_url }}) considero os cursos da INE uma ótima base para a prova, no CAPen eu recomendo estudar como alguém que já precisa saber **conduzir um pentest Web com autonomia**.

Não significa que você precise conhecer todas as vulnerabilidades do mundo. Significa que deve conseguir identificar um comportamento estranho, levantar hipóteses, testá-las com método e decidir rapidamente se o caminho merece mais atenção.

Na minha visão, o CAPen é um teste interessante para avaliar sua maturidade prática em AppSec, inclusive se você já atua na área.

## Minha maior dificuldade: o tempo

Se eu tivesse que escolher um único obstáculo, seria **a gestão do tempo**.

A prova tem **quatro horas**. Considero essa duração suficiente para uma avaliação objetiva, mas é desafiador tentar concluir **100% das atividades** dentro dela — especialmente quando você quer compreender a aplicação e validar completamente cada hipótese.

**No meu exame, recebi 17 questões.** Cada uma exigia seu próprio nível de interpretação e investigação. Esse foi o formato da minha experiência; não parto do princípio de que todos os candidatos receberão a mesma quantidade.

A pressão aparece quando uma hipótese parece promissora, mas começa a consumir minutos sem trazer uma confirmação. É fácil continuar insistindo porque você acredita estar perto da solução.

Meu conselho é simples: **não fique preso a uma única flag ou questão**. Se uma investigação já consumiu aproximadamente **30 minutos** e você não está conseguindo avançar de maneira objetiva, registre o que descobriu e passe para a próxima.

Isso não é desistir. É administrar o exame com inteligência. Depois, com outras questões resolvidas e mais contexto, você poderá retornar ao ponto em que ficou.

### Crie uma cronometragem por vulnerabilidade antes da prova

Eu recomendo **fortemente realizar os [mock exams da SecOps](https://pentestingexams.com/mock-pentesting-exams/)** antes de iniciar o CAPen. A plataforma disponibiliza um mock prático gratuito de CAPen com duração indicada de uma hora.

Mas não use o mock apenas para verificar se consegue chegar ao resultado. **Use um cronômetro e observe seu próprio comportamento**:

- Quanto tempo leva para compreender a aplicação antes dos primeiros testes?
- Quanto tempo você gasta identificando entradas, funcionalidades e controles de acesso?
- Quando começa a repetir uma hipótese sem obter novas informações?
- Consegue identificar rapidamente se vale continuar ou voltar depois?
- Quanto tempo reserva para revisar o que ficou pendente?

Esse treino ajuda a criar uma **referência pessoal de tempo por classe de vulnerabilidade**. Não existe uma duração ideal universal para XSS, SQLi, IDOR ou File Upload. O importante é conhecer o próprio ritmo e reconhecer quando uma tentativa deixou de ser produtiva.

## Técnicas que recomendo dominar

Minha recomendação é chegar ao CAPen com uma boa base de segurança Web. Eu estudaria, especialmente, os seguintes assuntos:

| Tema | O que eu procuraria dominar |
|---|---|
| **XSS** | Identificar contextos de entrada e saída, interpretar reflexão e armazenamento e avaliar impacto. |
| **IDOR / BOLA** | Distinguir autenticação de autorização e entender o acesso a objetos conforme o perfil e a identidade. |
| **XXE** | Reconhecer processamento de XML e compreender os riscos de configurações inseguras de parsers. |
| **Blind SQL Injection** | Entender como diferenças de comportamento ou tempo podem indicar uma hipótese de injeção mesmo sem mensagens explícitas. |
| **CSRF** | Compreender sessões, ações que alteram estado e mecanismos de proteção contra requisições indevidas. |
| **File Upload** | Avaliar validações, processamento, armazenamento, permissões e a relação entre upload e outros componentes. |
| **Autenticação e sessões** | Entender fluxos de login, recuperação de conta, autorização e mudanças de privilégios. |
| **Lógica de negócio** | Compreender a sequência de operações e identificar diferenças entre a intenção da aplicação e o comportamento observado. |

Esses são os temas que **recomendo priorizar**, não uma sequência de questões da minha prova. Para ampliar a preparação, consulte o [syllabus oficial do CAPen](https://pentestingexams.com/certifications/professional/certified-appsec-pentester/), que também contempla tópicos como **SSRF, directory traversal, OSINT, TLS, falhas de configuração, divulgação de informações e segurança de serviços cloud, incluindo S3**.

Eu também investiria em laboratórios práticos da [PortSwigger Web Security Academy](https://portswigger.net/web-security/). Sua documentação e os exercícios ajudam a desenvolver a capacidade de observar a aplicação e entender as causas de uma vulnerabilidade.

## Correlação de informações: o detalhe que faz diferença

Uma das dicas que considero mais importantes é: **não analise cada funcionalidade isoladamente**.

Um comportamento aparentemente simples pode ganhar outro significado quando você entende como a aplicação foi construída.

Isso vale especialmente para **File Upload**. Em vez de olhar apenas para a extensão permitida, tente compreender a funcionalidade como um fluxo completo:

1. Qual recurso aceita arquivos e para que ele existe?
2. Quais formatos, tipos e validações são previstos?
3. O que a aplicação faz com o arquivo depois de recebê-lo?
4. Como o conteúdo é armazenado, processado e disponibilizado?
5. Existem funções relacionadas que utilizam ou transformam esse conteúdo?
6. Os controles e permissões são consistentes entre essas etapas?

A mesma lógica de correlação vale para APIs, autenticação, controles de acesso e regras de negócio.

**Enumerar bem é conectar pontos.** Quanto mais você compreende a relação entre funcionalidades, menor a chance de ignorar um detalhe útil.

## Minha metodologia de AppSec para avaliações curtas

Eu organizaria uma avaliação prática de aplicações Web usando o seguinte fluxo:

**Reconhecimento → mapeamento da aplicação → autenticação e perfis → endpoints e parâmetros → hipóteses por classe de falha → validação → correlação → revisão das pendências.**

### 1. Reconheça a superfície

Entenda o escopo, os serviços Web disponíveis, os nomes e VHOSTs relevantes quando aplicáveis, as tecnologias aparentes e o que cada aplicação oferece.

### 2. Mapeie funcionalidades antes de sair testando

Identifique os fluxos principais: cadastro, login, recuperação de senha, perfis, uploads, pesquisas, operações de API, painéis e funcionalidades administrativas. Observe o comportamento com contas e dados de teste.

### 3. Organize hipóteses

Em vez de disparar testes desconectados, registre qual comportamento você quer verificar, por que a hipótese faz sentido e qual resultado a confirmaria ou descartaria.

### 4. Priorize e controle o tempo

Dê preferência às hipóteses mais claras e às verificações que oferecem boa relação entre esforço e informação obtida. Se um caminho travar, marque como pendente e avance para outra questão.

### 5. Reenumere quando descobrir uma relação

Uma nova rota, um comportamento de autenticação ou uma funcionalidade de upload pode mudar o significado de informações que você já tinha. Volte ao mapa da aplicação e conecte os pontos.

### 6. Revise antes de encerrar

Confira o que foi concluído, o que ficou parcialmente analisado e as questões para as quais ainda existe uma hipótese promissora. **Não deixe os últimos minutos serem consumidos por uma única tentativa sem progresso.**

Para aprofundar cada etapa, mantenho uma [Metodologia de Enumeração Web]({{ '/metodologias/web/' | relative_url }}) com foco em endpoints, APIs, autenticação, autorização e lógica de negócio.

## Outras recomendações que considero úteis

**Prepare o ambiente antes.** Tenha o navegador, proxy de interceptação, anotações e ferramentas de análise já organizados. Ajustes de configuração durante uma prova curta podem consumir tempo precioso.

**Não dependa só de scanners.** Ferramentas automatizadas ajudam no reconhecimento, mas não substituem o entendimento de autenticação, regras de negócio e comportamento de uma aplicação.

**Leia respostas, não apenas códigos de status.** Uma mudança no fluxo, em uma mensagem ou na forma de processar entradas pode ser mais importante do que uma resposta aparentemente diferente.

**Observe o código cliente quando fizer sentido.** Scripts e recursos acessíveis podem ajudar a compreender rotas, integrações e funcionalidades públicas da aplicação.

**Estude o syllabus inteiro, mas saiba priorizar.** O objetivo é reconhecer as classes de problemas e decidir o que examinar, não decorar uma coleção de testes.

**Mantenha a calma.** Sob pressão, é comum repetir tentativas sem mudar a hipótese. Quando isso acontecer, faça uma revisão rápida das evidências ou passe para outra atividade.

## CAPen versus outras certificações que realizei

O CAPen me surpreendeu justamente porque não parecia, à primeira vista, tão exigente quanto algumas outras avaliações da minha trajetória.

No [eJPT]({{ '/experiencias/ejpt/' | relative_url }}) e no [eCPPT]({{ '/experiencias/ecppt/' | relative_url }}), os materiais e laboratórios oficiais ajudam a construir uma preparação mais direcionada. No [CPTS]({{ '/experiencias/cpts/' | relative_url }}), a profundidade técnica e a documentação foram os grandes desafios da minha experiência.

No **CAPen**, destaco outra combinação: **autonomia técnica, variedade de conceitos de AppSec e pressão do relógio**.

Não tentaria transformá-lo em um ranking universal de dificuldade. O que posso dizer é que **subestimei a certificação e saí com mais respeito pelo desafio que ela propõe**.

## Considerações finais

O CAPen foi uma certificação que me surpreendeu positivamente. Embora quatro horas sejam suficientes para uma avaliação com objetivos definidos, senti como é difícil tentar investigar tudo com profundidade e ainda buscar 100% das questões dentro desse período.

Minha recomendação para quem pretende fazê-la é **praticar bastante, especialmente com os mock exams da SecOps, fortalecer os fundamentos de AppSec e treinar decisões sob limite de tempo**.

Acima de tudo, **não se prenda a uma única questão**. Faça uma boa enumeração, correlacione as informações e mantenha uma visão do exame como um todo.

Para mim, essa é uma das lições mais valiosas do CAPen: **não basta conhecer técnicas — você precisa saber quando, por que e por quanto tempo vale aplicá-las**.

---

### Recursos para preparação

- [CAPen — descrição, syllabus e informações oficiais](https://pentestingexams.com/certifications/professional/certified-appsec-pentester/)
- [SecOps — mock exams](https://pentestingexams.com/mock-pentesting-exams/)
- [PortSwigger Web Security Academy](https://portswigger.net/web-security/)
- [Minha metodologia Web]({{ '/metodologias/web/' | relative_url }})
