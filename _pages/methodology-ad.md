---
permalink: /metodologias/active-directory/
title: "Metodologia de Enumeração — Active Directory"
excerpt: "Domínios, identidades, grupos, relações de confiança, ACLs e caminhos de privilégio."
toc: true
toc_label: "Etapas"
toc_sticky: true
---

[← Metodologias]({{ '/metodologias/' | relative_url }}) · [Fluxo geral]({{ '/metodologias/geral/' | relative_url }})

## 1. Reconhecer a estrutura do domínio

Comece correlacionando a [enumeração de portas, DNS e serviços]({{ '/metodologias/geral/' | relative_url }}). Busque compreender a existência de serviços de diretório e autenticação, nomes de domínio, controladores identificados e limites de rede.

- DNS de domínio e registros relacionados a diretório e serviços.
- LDAP/LDAPS, Kerberos, SMB e demais protocolos observáveis.
- Domínios, possíveis relações de confiança e segmentação entre unidades organizacionais.
- Diferença entre o que foi inferido externamente e o que foi validado com uma identidade autorizada.

**Entregável:** desenho inicial do ambiente e uma lista de dúvidas a resolver.

## 2. Inventário autenticado de objetos

Quando houver credenciais de teste válidas e permissão explícita, categorize:

- **Usuários e contas de serviço:** finalidade, políticas e participação em grupos.
- **Grupos:** associação, grupos privilegiados e delegações.
- **Computadores e servidores:** papel, domínio, serviços e acessibilidade.
- **Unidades organizacionais e políticas:** administração delegada, vínculos e responsabilidades.
- **Recursos compartilhados:** acesso efetivo conforme a identidade de teste.

Não trate nomes sugestivos ou associação indireta como prova de privilégio efetivo.

## 3. Relações de privilégio e confiança

O objetivo é montar um **grafo de relações**, não apenas uma lista de contas:

- Quem administra quais objetos e recursos?
- Quais grupos possuem direitos delegados?
- Há permissões de alteração de objetos ou configurações além do necessário?
- Como contas de serviço, hosts e delegações se relacionam?
- Existe diferença entre privilégios locais e privilégios no domínio?
- Quais relações são herdadas, transitivas ou dependentes de condições adicionais?

Ferramentas de representação gráfica podem ajudar na visualização, mas **cada relacionamento crítico precisa ser interpretado e confirmado no contexto do escopo**.

## 4. Políticas e superfícies de autenticação

Observe configurações de autenticação, gerenciamento de contas, serviços, delegação e políticas de proteção. Para cada suspeita, documente pré-condições e impacto **sem tentar obter credenciais ou executar ações invasivas fora da autorização**.

## 5. Hipóteses sobre caminhos de ataque

Faça a distinção entre:

1. **Relação observada:** uma identidade apresenta uma associação ou permissão.
2. **Hipótese:** a relação pode permitir uma transição de privilégio em determinadas condições.
3. **Validação permitida:** as verificações aprovadas demonstram ou descartam o risco.
4. **Conclusão:** gravidade, alcance, limites e mitigação.

Evite afirmar que um caminho inteiro existe só porque uma aresta aparece no grafo. Alterações de privilégio, políticas ou identidades devem seguir aprovação específica.

## 6. Reenumeração conforme a identidade

Após cada mudança legítima de contexto autenticado, reavalie a visibilidade de recursos, grupos e serviços. Uma informação obtida em um host Windows pode ser relevante para o diretório e vice-versa.

## 7. Checklist

- [ ] Domínio e serviços de identidade identificados.
- [ ] Hosts, grupos e contas relevantes mapeados no limite permitido.
- [ ] Direitos delegados e relações de confiança registrados.
- [ ] Permissões efetivas diferenciadas de associações apenas aparentes.
- [ ] Hipóteses de risco fundamentadas com condições explícitas.
- [ ] Recomendações de menor privilégio e revisão de delegações descritas.

**Entregável:** mapa de identidades e privilégios com conclusões comprováveis, sem divulgar credenciais ou dados internos.
