# StageHex Docs - Projeto GitBook

Este projeto usa **GitBook** para documentacao do software StageHex.

## Estrutura do Projeto

```
StageHex Docs/
├── .gitbook/
│   ├── assets/           # Imagens e GIFs organizados por secao
│   │   ├── gif/          # GIFs de demonstracao
│   │   │   ├── main-tools/
│   │   │   └── event-tools/
│   │   ├── instalacao/
│   │   └── sketchup/
│   └── includes/         # Snippets reutilizaveis
│
├── .githooks/            # Git hooks (pre-commit para otimizar GIFs)
├── .bak/                 # Arquivos de backup/templates
├── scripts/              # Scripts de automacao (npm)
│
├── primeiros-passos/     # Secao: Primeiros Passos
│   ├── README.md
│   ├── instalacao/
│   ├── autorizando/
│   ├── atualizacao/
│   └── requisitos-do-sistema.md
│
├── planos/               # Secao: Planos
│   ├── README.md
│   ├── stagehex-trial.md
│   ├── stagehex-basic.md
│   └── stagehex-pro.md
│
├── visao-geral/          # Secao: Visao Geral
│   ├── plugin-sketchup.md
│   └── espacos-de-trabalho/
│       ├── README.md
│       └── ferramentas/
│           ├── README.md
│           ├── main-tools/      # 9 ferramentas documentadas
│           ├── event-tools/     # 2 ferramentas documentadas
│           ├── rigging-tools.md
│           ├── lighting-tools.md
│           └── video-audio-tools.md
│
├── suporta-importar-exportar/
│   ├── formatos-de-importacao.md
│   └── formatos-de-exportacao.md
│
├── README.md             # Pagina inicial
├── SUMMARY.md            # Indice de navegacao (OBRIGATORIO)
├── package.json          # Scripts npm
└── CLAUDE.md             # Este arquivo
```

## Arquivos Importantes

| Arquivo | Descricao |
|---------|-----------|
| `SUMMARY.md` | Define a estrutura de navegacao do GitBook. Toda nova pagina DEVE ser adicionada aqui. |
| `README.md` (raiz) | Pagina inicial da documentacao |
| `.gitbook/includes/` | Snippets reutilizaveis com sintaxe `{% include %}` |
| `.gitbook/assets/gif/` | GIFs de demonstracao das ferramentas |
| `.githooks/pre-commit` | Hook para otimizar GIFs automaticamente |
| `scripts/optimize-gifs.js` | Script npm para otimizar GIFs manualmente |
| `.bak/` | Arquivos de backup e templates |

## Scripts NPM

```bash
npm run optimize:gifs    # Otimiza todos os GIFs (256 cores, lossy=20, loop infinito)
npm run prepare          # Configura git hooks
```

## Convencoes

### Nomenclatura de Arquivos
- Usar **kebab-case** para nomes de arquivos e pastas (ex: `requisitos-do-sistema.md`)
- README.md em cada pasta representa a pagina principal daquela secao
- Imagens devem seguir padrao: `N-descricao-da-imagem.png`
- GIFs devem seguir padrao: `nome-ferramenta.gif`

### Estrutura de Paginas
- Cada pagina .md deve comecar com titulo `# Titulo`
- Usar hierarquia de headings: `#` > `##` > `###`
- Imagens referenciadas com caminho relativo: `../../../../.gitbook/assets/gif/main-tools/nome.gif`

### Adicionar Nova Pagina
1. Criar arquivo `.md` na pasta apropriada
2. Adicionar entrada no `SUMMARY.md` seguindo a hierarquia existente
3. Usar indentacao com 2 espacos para sub-itens no SUMMARY

### Adicionar Nova Ferramenta
1. Adicionar GIF em `.gitbook/assets/gif/<categoria>/`
2. Criar pagina .md em `visao-geral/espacos-de-trabalho/ferramentas/<categoria>/`
3. Atualizar SUMMARY.md
4. GIFs sao otimizados automaticamente no commit

## Sintaxe GitBook Especial

### Tabelas (OBRIGATORIO usar formato HTML)

Sempre usar o formato HTML para tabelas, com `align="center"` nas colunas de status/icones:

```html
<table>
<thead>
<tr>
<th>Coluna 1</th>
<th width="150">Coluna 2</th>
<th width="150" align="center">Status</th>
<th>Observacoes</th>
</tr>
</thead>
<tbody>
<tr>
<td>Valor 1</td>
<td>Valor 2</td>
<td align="center">✔</td>
<td>Descricao</td>
</tr>
</tbody>
</table>
```

**Icones padrao:**
- `✔` = Disponivel/Suportado
- `✖` = Nao disponivel/Nao suportado
- `Planejado` = Em desenvolvimento

### Hints/Alertas

```markdown
{% hint style="info" %}
Texto informativo
{% endhint %}

{% hint style="warning" %}
Aviso importante
{% endhint %}

{% hint style="danger" %}
Alerta critico
{% endhint %}
```

### Includes (snippets reutilizaveis)

```markdown
{% include ".gitbook/includes/nome-do-snippet.md" %}
```

### Tabs

```markdown
{% tabs %}
{% tab title="Windows" %}
Conteudo Windows
{% endtab %}
{% tab title="Mac" %}
Conteudo Mac
{% endtab %}
{% endtabs %}
```

### Figuras com GIF

```markdown
<figure><img src="../../../../.gitbook/assets/gif/main-tools/nome.gif" alt="Descricao"><figcaption><p>Legenda</p></figcaption></figure>
```

## Otimizacao de GIFs

GIFs sao otimizados automaticamente via pre-commit hook:
- **256 cores** (preserva qualidade)
- **lossy=20** (compressao suave)
- **loop infinito** (loopcount=0)
- Reducao media: ~50%

Para otimizar manualmente:
```bash
npm run optimize:gifs
```

## Idioma
- Toda documentacao esta em **Portugues (Brasil)**
- Manter consistencia no idioma ao criar/editar paginas
