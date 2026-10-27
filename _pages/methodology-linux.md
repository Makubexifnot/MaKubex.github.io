---
permalink: /metodologias/linux/
title: "Metodologia de Enumeração — Linux"
excerpt: "Serviços, usuários, permissões, configurações e dependências entre aplicações."
toc: true
toc_label: "Etapas"
toc_sticky: true
---

[← Metodologias]({{ '/metodologias/' | relative_url }}) · [Fluxo geral]({{ '/metodologias/geral/' | relative_url }})

## 1. Reconhecimento do host

A partir das portas, identifique funções prováveis: web, SSH, compartilhamento, banco de dados, serviço interno ou infraestrutura. Verifique se o sistema expõe múltiplas aplicações com diferentes fronteiras de acesso.

**Registre:** serviço, versão quando verificável, nome do host, disponibilidade, necessidade de autenticação e relação com outros ativos.

## 2. Enumeração externa orientada por serviço

- **SSH:** superfície de autenticação, políticas de acesso e exposição administrativa.
- **HTTP/HTTPS:** aplicações, VHOSTs, APIs, tecnologia, rotas e controles de acesso — consulte a [trilha Web]({{ '/metodologias/web/' | relative_url }}).
- **NFS/SMB:** recursos compartilhados, escopo da exposição e permissões observáveis.
- **RPC, serviços de impressão e administração:** interfaces acessíveis e restrições de rede.
- **Bancos de dados, DNS e serviços customizados:** versões, configurações e divulgações de informação que justifiquem investigação adicional.

Priorize serviços coerentes com o propósito do host. Evite interpretar um banner como inventário completo.

## 3. Após acesso autenticado autorizado

Quando a avaliação prevê inspeção local, procure compreender o contexto de execução:

- Usuário e grupos efetivos, permissões e contas de serviço.
- Versão do sistema, distribuição, atualizações e aplicações instaladas.
- Serviços e processos, tarefas programadas e dependências de aplicação.
- Permissões de arquivos e diretórios, mecanismos de elevação delegada e políticas de execução.
- Configurações de rede, interfaces, rotas, montagens e arquivos de configuração.
- Contêineres e orquestração, quando utilizados, com atenção às fronteiras entre host e carga de trabalho.
- Registros e segredos de aplicação apenas na extensão mínima permitida pelo escopo, evitando coletar valores desnecessários.

## 4. Avaliar relações de confiança

Relacione contas de serviço, aplicações, sistemas de arquivos e dependências externas. Identifique se a mesma identidade tem privilégios distintos em componentes diferentes. **Uma nova informação muda o contexto: retorne ao inventário, não avance no escuro.**

## 5. Validação e impacto

Diferencie permissões intencionais de configurações inseguras. A comprovação deve ser proporcional ao objetivo e evitar interrupções. Registre causa raiz, pré-condições, consequência prática e controle recomendado.

## 6. Checklist

- [ ] Serviços externos catalogados.
- [ ] Aplicações e compartilhamentos correlacionados.
- [ ] Contexto de identidade e permissões analisado, quando autorizado.
- [ ] Configurações e dependências relevantes identificadas.
- [ ] Possíveis falhas de configuração verificadas e classificadas.
- [ ] Evidências ligadas às decisões e recomendações.

**Entregável:** mapa do host e de suas dependências, priorizando explicações reproduzíveis em vez de listas de ferramentas.
