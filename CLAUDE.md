# StageHex Docs - Projeto GitBook

Este projeto usa **GitBook** para documentacao do software StageHex.

## Estrutura do Projeto

```
StageHex Docs/
├── .gitbook/
│   ├── assets/           # Imagens legadas (descontinuado)
│   ├── Images/           # Imagens atuais do projeto
│   └── includes/         # Snippets reutilizaveis (ex: avisos, notas)
│
├── primeiros-passos/     # Secao: Primeiros Passos
│   ├── README.md         # Pagina principal da secao
│   ├── instalacao/
│   │   ├── README.md     # Guia de instalacao
│   │   └── atualizacao.md
│   └── requisitos-do-sistema.md
│
├── visao-geral/          # Secao: Visao Geral
│   ├── planos.md
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
| `.gitbook/Images/` | Armazenamento de imagens. Usar caminho relativo `../.gitbook/Images/nome.png` |

## Convencoes

### Nomenclatura de Arquivos
- Usar **kebab-case** para nomes de arquivos e pastas (ex: `requisitos-do-sistema.md`)
- README.md em cada pasta representa a pagina principal daquela secao
- Imagens devem seguir padrao: `StageHex-AAAA-MM-DD-HH-MM-SS.png`

### Estrutura de Paginas
- Cada pagina .md deve comecar com titulo `# Titulo`
- Usar hierarquia de headings: `#` > `##` > `###`
- Imagens referenciadas com caminho relativo a partir de `.gitbook/Images/`

### Adicionar Nova Pagina
1. Criar arquivo `.md` na pasta apropriada
2. Adicionar entrada no `SUMMARY.md` seguindo a hierarquia existente
3. Usar indentacao com 2 espacos para sub-itens no SUMMARY

### Adicionar Nova Secao
1. Criar pasta com nome em kebab-case
2. Criar `README.md` dentro da pasta (pagina principal)
3. Adicionar no `SUMMARY.md` como grupo (usar `## Nome da Secao`)

## Sintaxe GitBook Especial

```markdown
# Hints/Alertas
{% hint style="info" %}
Texto informativo
{% endhint %}

{% hint style="warning" %}
Aviso importante
{% endhint %}

{% hint style="danger" %}
Alerta critico
{% endhint %}

# Includes (snippets reutilizaveis)
{% include ".gitbook/includes/nome-do-snippet.md" %}

# Tabs
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
