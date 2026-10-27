# Makubex | Offensive Security Journal

Um blog de experiências em certificações de segurança ofensiva, inspirado no formato do site de referência, usando **Jekyll + Minimal Mistakes + GitHub Pages**.

## Conteúdo incluído

- **Home:** apresentação e publicações recentes.
- **Sobre:** apresentação do autor.
- **Certificações:** índice de temas e relatos planejados.
- **Experiências:** relação automática dos relatos publicados.
- **Política anti-spoilers:** compromisso explícito com a confidencialidade.
- **Um artigo inicial publicado:** por que o blog existe.
- **Quatro rascunhos privados:** modelo geral, eCPPT, CPTS e CAPen. Esses rascunhos **não aparecem no site**.

## Publicar no GitHub Pages sem usar terminal

1. Na conta GitHub **Makubexifnot**, crie um repositório público com nome **Makubexifnot.github.io** (ou confirme qual repositório deseja usar).
2. Extraia o ZIP e faça upload de **todo o conteúdo da pasta** na raiz do repositório, preservando as pastas que começam com `_`.
3. Entre em **Settings > Pages > Build and deployment**. Escolha **Deploy from a branch**, branch `main`, pasta `/(root)` e salve.
4. O endereço do site será **https://Makubexifnot.github.io/** após a publicação. Para repositório de projeto (outro nome), ajuste `baseurl` e `repository` em `_config.yml` antes de publicar.
5. Consulte o status do deployment em **Actions** caso o site não apareça.

Para um site de projeto, por exemplo `Makubexifnot/certification-journal`, mude:

- `repository: "Makubexifnot/certification-journal"`
- `baseurl: "/certification-journal"`

Nesse caso o endereço final será `https://Makubexifnot.github.io/certification-journal/`.

## Como publicar novos relatos

1. Copie um rascunho de `_drafts` para a pasta `_posts`.
2. Renomeie usando `AAAA-MM-DD-nome-do-artigo.md`.
3. Substitua todos os campos entre colchetes e revise as regras de confidencialidade.
4. Atualize `date` no cabeçalho e mantenha `categories: [exam-experience]` (em YAML a lista também pode ser escrita em linhas).
5. Salve o arquivo no GitHub. O artigo entrará na página de experiências automaticamente.

**Importante:** não afirme fatos sobre o dia da prova que não aconteceram. O autor deve revisar todas as experiências antes da publicação.

## Observações

- O site usa o tema remoto `mmistakes/minimal-mistakes@4.28.1`.
- Requer processamento Jekyll no GitHub Pages, então abrir `index.html` diretamente no computador não reproduz o visual.
- Antes de publicar, personalize o nome, biografia e links em `_config.yml`.
- Este pacote **não foi enviado para nenhum repositório GitHub** e não altera os repositórios existentes.
