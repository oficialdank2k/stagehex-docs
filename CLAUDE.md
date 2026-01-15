# StageHex Docs - Projeto GitBook

Este projeto usa **GitBook** para documentacao do software StageHex.

## Estrutura do Projeto

```
StageHex Docs/
├── .gitbook/
│   ├── assets/           # Imagens organizadas por secao
│   │   ├── instalacao/   # Imagens de instalacao
│   │   └── atualizacao/  # Imagens de atualizacao
│   └── includes/         # Snippets reutilizaveis
│
├── primeiros-passos/     # Secao: Primeiros Passos
│   ├── README.md
│   ├── instalacao/
│   │   └── README.md
│   ├── autorizando/
│   │   └── README.md
│   ├── atualizacao/
│   │   └── README.md
│   └── requisitos-do-sistema.md
│
├── planos/               # Secao: Planos (logo apos Primeiros Passos)
│   ├── README.md               # Comparativo de planos
│   ├── stagehex-trial.md
│   ├── stagehex-basic.md
│   └── stagehex-pro.md
│
├── visao-geral/          # Secao: Visao Geral
│   └── espacos-de-trabalho/
│       ├── README.md
│       └── ferramentas.md
│
├── suporta-importar-exportar/  # Secao: Importar/Exportar
│   ├── formatos-de-importacao.md
│   └── formatos-de-exportacao.md
│
├── notas-de-lancamento/  # Secao: Release Notes
│   └── versao-X.X.X.md
│
├── README.md             # Pagina inicial da documentacao
└── SUMMARY.md            # Indice de navegacao (OBRIGATORIO)
```

## Arquivos Importantes

| Arquivo | Descricao |
|---------|-----------|
| `SUMMARY.md` | Define a estrutura de navegacao do GitBook. Toda nova pagina DEVE ser adicionada aqui. |
| `README.md` (raiz) | Pagina inicial da documentacao |
| `.gitbook/includes/` | Snippets reutilizaveis com sintaxe `{% include %}` |
| `.gitbook/assets/` | Imagens organizadas por secao (ex: `assets/instalacao/`, `assets/atualizacao/`) |

## Convencoes

### Nomenclatura de Arquivos
- Usar **kebab-case** para nomes de arquivos e pastas (ex: `requisitos-do-sistema.md`)
- README.md em cada pasta representa a pagina principal daquela secao
- Imagens devem seguir padrao: `N-descricao-da-imagem.png` (ex: `1-stagehex-cloud-download.png`)

### Estrutura de Paginas
- Cada pagina .md deve comecar com titulo `# Titulo`
- Usar hierarquia de headings: `#` > `##` > `###`
- Imagens referenciadas com caminho relativo: `../../.gitbook/assets/secao/imagem.png`

### Adicionar Nova Pagina
1. Criar arquivo `.md` na pasta apropriada
2. Adicionar entrada no `SUMMARY.md` seguindo a hierarquia existente
3. Usar indentacao com 2 espacos para sub-itens no SUMMARY

### Adicionar Nova Secao
1. Criar pasta com nome em kebab-case
2. Criar `README.md` dentro da pasta (pagina principal)
3. Adicionar no `SUMMARY.md` como grupo (usar `## Nome da Secao`)

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

## Idioma
- Toda documentacao esta em **Portugues (Brasil)**
- Manter consistencia no idioma ao criar/editar paginas
