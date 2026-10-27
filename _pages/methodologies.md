---
permalink: /metodologias/
title: "Metodologias de Enumeração"
excerpt: "Um fluxo estruturado de reconhecimento, enumeração, validação e documentação."
toc: true
toc_label: "Nesta seção"
toc_sticky: true
---

O principal propósito desta seção é responder à pergunta: **o que examinar agora, por quê, e qual informação deve orientar a próxima decisão?** Não é uma lista de ferramentas ou comandos. É uma base de raciocínio que pode ser adaptada a laboratórios, estudos e avaliações de segurança **com autorização e escopo definidos**.

## Comece pelo fluxo geral

**[Metodologia geral de enumeração]({{ '/metodologias/geral/' | relative_url }})**

A linha de base recomendada é:

1. Escopo e inventário inicial
2. Descoberta de hosts e enumeração de portas
3. Enumeração de DNS
4. Descoberta de VHOSTs e aplicações associadas
5. Enumeração direcionada por serviço e sistema
6. Formulação e validação de hipóteses
7. Mapeamento de caminhos de ataque autorizados
8. Reenumeração após cada nova informação
9. Evidências, impacto, recomendações e relatório

> A ordem é uma referência, não uma regra rígida. Se um host não expõe HTTP, a etapa de VHOSTs pode não se aplicar. Se o escopo já fornece um domínio, dados de DNS podem aparecer também antes dos demais levantamentos.

## Trilhas especializadas

| Trilha | Quando utilizar | Principal pergunta |
|---|---|---|
| **[Windows]({{ '/metodologias/windows/' | relative_url }})** | Hosts Windows e serviços associados | Quais serviços, identidades, permissões e superfícies administrativas existem? |
| **[Linux]({{ '/metodologias/linux/' | relative_url }})** | Hosts Linux e serviços Unix | Que aplicações, identidades, configurações e relações de confiança estão presentes? |
| **[Active Directory]({{ '/metodologias/active-directory/' | relative_url }})** | Ambientes com domínio e identidades centralizadas | Como os objetos, privilégios e relações de confiança se conectam? |
| **[Web]({{ '/metodologias/web/' | relative_url }})** | Sites, APIs e aplicações web | Onde estão as entradas, os estados, as funções e os controles de acesso? |

## Como ler as metodologias

Cada trilha apresenta **objetivo → verificações → interpretação → próximo passo → evidências**. O foco é identificar decisões sustentadas por observações. Uma porta aberta, um nome de domínio ou um comportamento inesperado é uma pista, não uma vulnerabilidade comprovada.

## Modelo de anotação

Em cada etapa, registre:

- **Ativo e contexto:** qual sistema, aplicação ou identidade está em análise e qual é seu escopo.
- **Observação:** comportamento verificável, horário aproximado e condição de acesso.
- **Hipótese:** o que o indício pode significar e que informação faltaria para confirmá-lo.
- **Validação:** testes permitidos e não destrutivos suficientes para sustentar a conclusão.
- **Resultado:** confirmado, descartado, inconclusivo ou pendente.
- **Próxima decisão:** por que essa evidência muda a prioridade.
- **Risco e correção:** possível impacto, mitigação e evidência de reteste, quando aplicável.

## Compromisso com exames

Este conteúdo é uma **metodologia geral de pentest**, não uma solução de laboratório ou exame. Não inclui comandos, flags, senhas, alvos, instruções de prova ou informações confidenciais. Para a dimensão pessoal, consulte [Experiências de exames]({{ '/experiencias/' | relative_url }}) e a [política anti-spoilers]({{ '/sem-spoilers/' | relative_url }}).
