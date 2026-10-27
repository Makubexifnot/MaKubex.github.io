---
permalink: /metodologias/windows/
title: "Metodologia de Enumeração — Windows"
excerpt: "Serviços, contas, compartilhamentos, privilégios e configurações em ambientes Windows."
toc: true
toc_label: "Etapas"
toc_sticky: true
---

[← Metodologias]({{ '/metodologias/' | relative_url }}) · [Fluxo geral]({{ '/metodologias/geral/' | relative_url }})

## 1. Identificar o papel do host

Comece pelo levantamento de portas e serviços da metodologia geral. Determine, quando possível, se o equipamento é estação de trabalho, servidor de arquivos, servidor de aplicação, membro de domínio ou controlador de domínio. Uma identificação inicial incompleta é normal: confirme em etapas posteriores.

**Registre:** serviços, protocolos, nomes do host, contexto de rede, autenticação necessária e fontes de evidência.

## 2. Enumeração externa de serviços

- **SMB e serviços de arquivos:** superfície de compartilhamentos, autenticação exigida, políticas de acesso e exposição desnecessária de informações.
- **RPC e serviços administrativos:** informações de sistema e serviços acessíveis segundo as permissões de teste.
- **RDP/WinRM:** presença de administração remota, restrições de origem e controles de acesso observáveis.
- **HTTP/HTTPS ou aplicações de terceiros:** trate cada aplicação como uma trilha Web e relacione-a ao host.
- **DNS e serviços de identidade:** investigue se o sistema pertence a um domínio, sem presumir a existência de privilégios.

**Ponto de decisão:** serviços administrativos expostos não representam, por si só, acesso indevido. É necessário verificar controles e contexto.

## 3. Identidades e autenticação

Em ambientes com contas de teste autorizadas, diferencie permissões de usuário local, usuário de domínio, conta de serviço e grupos. Registre fronteiras entre acesso autenticado e não autenticado. Avalie políticas de senha e mecanismos de autenticação somente nas modalidades permitidas pelo escopo.

## 4. Configurações locais após acesso autorizado

Se o escopo permitir uma inspeção autenticada, observe:

- Versão e atualização do sistema; funcionalidades instaladas.
- Usuário efetivo, grupos, privilégios e integridade da sessão.
- Serviços, tarefas agendadas, permissões de arquivos e diretórios relevantes.
- Instalações de software, configurações de aplicações e caminhos de execução.
- Proteções do sistema, regras de acesso e segregação de funções.
- Relações entre credenciais de serviço, recursos de rede e permissões.

**Interpretação:** uma configuração só vira achado quando suas pré-condições e consequências são demonstradas dentro das regras do teste.

## 5. Relação com Active Directory

Caso o sistema pertença a um domínio, correlacione hostname, identidade, grupos e recursos acessíveis com a [metodologia de AD]({{ '/metodologias/active-directory/' | relative_url }}). Identidades diferentes podem revelar fronteiras distintas de privilégio; **reenumere ao mudar o contexto de autenticação**.

## 6. Evidências e checklist

- [ ] Host e papel classificados com nível de confiança.
- [ ] Serviços e compartilhamentos mapeados.
- [ ] Requisitos de autenticação diferenciados por serviço.
- [ ] Grupos, privilégios e configurações locais descritos quando autorizados.
- [ ] Relação com domínio documentada, se aplicável.
- [ ] Achados separados de hipóteses e com mitigação associada.

**Entregável:** mapa do host com superfície exposta, identidades, controles e pontos de atenção, sem copiar dados sensíveis.
