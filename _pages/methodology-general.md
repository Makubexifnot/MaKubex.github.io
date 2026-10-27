---
permalink: /metodologias/geral/
title: "Metodologia Geral — Reconhecimento e Enumeração"
excerpt: "Portas → DNS → VHOSTs → serviços → hipóteses → validação → relatório."
toc: true
toc_label: "Etapas"
toc_sticky: true
---

[← Índice das metodologias]({{ '/metodologias/' | relative_url }})

## 0. Escopo e condições de execução

Antes de qualquer verificação, defina ativos autorizados, janelas, exclusões, contas de teste disponíveis, limitações de tráfego e critérios de interrupção. Separe **fatos observados**, **hipóteses** e **achados confirmados** no caderno de trabalho.

**Saída esperada:** uma lista de ativos e restrições que permita justificar cada próxima ação.

## 1. Descoberta de hosts e portas

**Objetivo:** descobrir quais hosts e serviços oferecem superfície de ataque dentro do escopo.

- Identifique hosts acessíveis e diferencie ausência de resposta de indisponibilidade real; mecanismos de filtragem podem ocultar respostas.
- Observe portas TCP e, quando permitido e pertinente, UDP, sem tomar um único resultado como definitivo.
- Registre porta, protocolo, estado, serviço aparente, versão quando observável, exposição e confiança da identificação.
- Agrupe os serviços por função: web, nomes, acesso remoto, compartilhamento, diretório, banco de dados, administração e infraestrutura.
- Revise superfícies de portas não usuais com a mesma atenção que as portas conhecidas; serviço e número da porta não são equivalentes.

**Decisão:** serviços web levam à trilha HTTP; DNS leva à enumeração de nomes; SMB/LDAP/Kerberos sugerem Windows ou AD; SSH/NFS/RPC podem indicar uma trilha Linux.

**Evidência:** inventário de serviços, resposta observada e indicação clara de quais sistemas necessitam confirmação.

## 2. Enumeração de DNS

**Objetivo:** transformar nomes e relações do domínio em pistas sobre a arquitetura e os próximos ativos a examinar.

- Identifique nomes conhecidos, resolvedores disponíveis, autoridade da zona e dados de configuração observáveis.
- Avalie registros relevantes, como A/AAAA, CNAME, NS, MX, TXT e SRV, de acordo com o escopo.
- Verifique se hosts e serviços descobertos por registros DNS pertencem à avaliação antes de prosseguir.
- Trate transferências de zona apenas como **verificação autorizada** de configuração, nunca como pressuposto de que todo domínio permite esse teste.
- Diferencie DNS interno, externo, resultados antigos e respostas inconsistentes; confirme a resolução quando houver dúvida.

**Decisão:** nomes ligados a serviços HTTP são candidatos à descoberta de VHOSTs; registros de diretório e autenticação podem orientar o mapeamento de AD.

**Evidência:** nome consultado, tipo de registro, resposta, fonte e ativo correspondente.

## 3. Descoberta de VHOSTs

**Objetivo:** entender se um endereço IP ou serviço HTTP apresenta aplicações diferentes conforme o nome de host e o contexto de TLS.

- Correlacione nomes obtidos em DNS, inventário fornecido, certificados e redirecionamentos.
- Observe a aplicação retornada conforme o nome de host esperado; confirme diferenças reais de comportamento, conteúdo e autenticação.
- Compare páginas padrão, redirecionamentos, códigos HTTP, comprimentos de respostas e títulos sem considerar uma diferença isolada como prova suficiente.
- Distinga virtual hosts reais de páginas genéricas, respostas curinga e bloqueios de segurança.
- Mantenha somente nomes e aplicações pertencentes ao escopo.

**Decisão:** cada aplicação confirmada passa a ter inventário próprio de rotas, funcionalidades, autenticação e tecnologia.

**Evidência:** host, aplicação identificada, redirecionamentos, comportamento distintivo e condição de acesso.

## 4. Demais enumerações orientadas por serviço

Evite executar verificações indiscriminadas. Priorize a análise de acordo com o que foi descoberto.

| Evidência | Direção de investigação |
|---|---|
| HTTP/HTTPS | Rotas, aplicações, APIs, autenticação, autorização, sessões e lógica de negócio |
| SMB/RPC/WinRM | Identidades, compartilhamentos, informações expostas e controles administrativos |
| LDAP/Kerberos/DNS de domínio | Estrutura do diretório, usuários, grupos, computadores e políticas |
| SSH/NFS | Acesso configurado, exportações, permissões e dependências entre sistemas |
| Bancos de dados | Exposição, configuração e fronteiras de autenticação, respeitando a política de testes |
| SMTP/SNMP/outros serviços | Identificação, divulgação de informações e superfícies permitidas pelo escopo |

**Saída:** um mapa de serviços com pistas verificadas, prioridade e referências cruzadas entre hosts.

## 5. Hipóteses e priorização

Para cada observação, responda:

1. **O que sei?** Por exemplo, um serviço é acessível ou uma aplicação expõe determinada funcionalidade.
2. **O que suspeito?** Exemplo genérico: um controle pode variar de acordo com o perfil autenticado.
3. **Como validar com segurança?** Compare estados e comportamentos com contas e dados de teste autorizados.
4. **Qual o impacto plausível?** Diferencie informação exposta, falha de autenticação, privilégio indevido e configuração fraca.
5. **Que resultado muda meu próximo passo?** Confirmar, descartar, aprofundar ou retornar à enumeração.

Priorize evidências com boa combinação de impacto, probabilidade, escopo e esforço. **Scanner produz pistas; uma conclusão exige contexto e validação.**

## 6. Reenumeração e encadeamento de descobertas

Sempre que surgirem novas informações autorizadas — nome, credencial de teste, identidade, acesso, host ou aplicação — reavalie o inventário. O que era inacessível antes pode passar a ter um caminho legítimo de análise. Preserve uma linha do tempo das decisões e não confunda possibilidade teórica com caminho validado.

## 7. Documentação e encerramento

Para cada achado confirmado, registre título, ativo, pré-condições, impacto, gravidade justificada, evidência contextualizada, reprodução de alto nível e correção. Separe a **narrativa da investigação** do **resumo executivo**. Vincule cada evidência ao ponto da análise em que ela sustenta uma afirmação.

### Critérios para avançar

- [ ] O inventário de hosts e portas tem cobertura compatível com o escopo.
- [ ] DNS e VHOSTs foram avaliados quando aplicáveis.
- [ ] Serviços expostos foram categorizados e priorizados.
- [ ] Hipóteses pendentes estão claramente separadas de achados.
- [ ] Cada descoberta relevante gerou uma decisão explícita.
- [ ] O relatório é compreensível sem depender da memória do operador.

**Trilhas seguintes:** [Windows]({{ '/metodologias/windows/' | relative_url }}) · [Linux]({{ '/metodologias/linux/' | relative_url }}) · [Active Directory]({{ '/metodologias/active-directory/' | relative_url }}) · [Web]({{ '/metodologias/web/' | relative_url }}).
