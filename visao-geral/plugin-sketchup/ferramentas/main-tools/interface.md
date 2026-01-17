# Gerenciador de Interface

O Gerenciador de Interface é o painel principal da StageHex, acessível através do primeiro botão da barra Main Tools. Oferece acesso centralizado a todas as funcionalidades de gerenciamento do plugin.

***

## Abas do Gerenciador

<table>
<thead>
<tr>
<th>Aba</th>
<th>Função</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Biblioteca</strong></td>
<td>Biblioteca de componentes organizados por categoria</td>
</tr>
<tr>
<td><strong>Color System</strong></td>
<td>Configuração de cores padrão dos componentes</td>
</tr>
<tr>
<td><strong>Layers</strong></td>
<td>Gerenciamento de visibilidade e organização</td>
</tr>
<tr>
<td><strong>Exportar</strong></td>
<td>Exportação para MVR e grandMA2</td>
</tr>
</tbody>
</table>

***

## Biblioteca

Biblioteca de componentes organizada por categorias, permitindo inserir diretamente no SketchUp.

<figure><img src="../../../../.gitbook/assets/sketchup/interface/1-interface-assets.png" alt="Biblioteca"><figcaption><p>Biblioteca de Componentes</p></figcaption></figure>

### Funcionalidades

**Navegação por Pastas**
* Clique nas categorias no menu lateral para filtrar
* Subcategorias expandem ao clicar

**Pesquisa**
* Campo de busca no topo da interface
* Atalho `Ctrl + F` para focar na pesquisa
* Pesquisa por nome do componente
* Resultados em tempo real

**Inserção de Componentes**
1. Navegue até a categoria desejada
2. Clique no componente para selecioná-lo
3. Clique no modelo para posicionar

{% hint style="info" %}
Os componentes são sincronizados automaticamente da StageHex Cloud conforme seu plano de assinatura.
{% endhint %}

***

## Color System

Sistema de configuração de cores padrão para identificação visual dos componentes no modelo.

<figure><img src="../../../../.gitbook/assets/sketchup/interface/2-interface-colors-system.png" alt="Color System"><figcaption><p>Sistema de Cores</p></figcaption></figure>

### Funcionalidades

**Configuração de Cores**
* Selecione a categoria no menu lateral (Truss, Deck, LED, etc.)
* Visualize os componentes e suas cores atuais
* Clique na cor para alterar

**Presets de Cores**
* Crie presets personalizados
* Salve configurações de cores para reutilização
* Aplique presets com um clique

**Exportar/Importar Presets**
* Exporte presets como arquivo `.json`
* Compartilhe configurações com outros usuários
* Importe presets de terceiros

### Modos de Visualização

Na barra Main Tools, o botão **Controle de Cores** alterna entre:

* **Por Material** - Exibe os materiais originais dos componentes
* **Por Cor** - Aplica as cores configuradas no Color System

{% hint style="info" %}
Use cores distintas para diferentes tipos de truss ou fabricantes para facilitar a identificação visual no modelo.
{% endhint %}

***

## Layers

Gerenciador de Camadas para controle total de visibilidade e organização dos componentes StageHex.

<figure><img src="../../../../.gitbook/assets/sketchup/interface/3-interface-layers.png" alt="Layers"><figcaption><p>Gerenciador de Camadas</p></figcaption></figure>

### Ações Rápidas

<table>
<thead>
<tr>
<th>Botão</th>
<th>Função</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Mostrar Tudo</strong></td>
<td>Exibe todos os componentes</td>
</tr>
<tr>
<td><strong>Ocultar Tudo</strong></td>
<td>Oculta todos os componentes</td>
</tr>
<tr>
<td><strong>Detalhar Tudo</strong></td>
<td>Exibe geometria detalhada</td>
</tr>
<tr>
<td><strong>Simplificar Tudo</strong></td>
<td>Exibe geometria simplificada</td>
</tr>
<tr>
<td><strong>Por Material</strong></td>
<td>Cores originais dos materiais</td>
</tr>
<tr>
<td><strong>Por Cor</strong></td>
<td>Cores do Color System</td>
</tr>
</tbody>
</table>

### Lista de Componentes

A lista exibe todos os componentes StageHex organizados hierarquicamente:

**Colunas:**
* **Visibilidade** - Ícones para mostrar/ocultar, detalhar/simplificar, cor/material
* **Componente / Definição** - Nome do componente
* **Instâncias** - Quantidade no modelo
* **Tipo** - Classificação (Platform, Corner, Line Array, Panel, etc.)
* **Classe** - Categoria principal

**Controles por Linha:**
* Olho - Mostrar/Ocultar
* Detalhes - Detalhar/Simplificar
* Cor - Por Material/Por Cor

### Quick Actions na Toolbar

Na barra Main Tools, dois botões permitem alternar rapidamente:

* **Controle de Visualização** (botão 11) - Alterna Detalhado ↔ Simplificado para todos
* **Controle de Cores** (botão 12) - Alterna Material ↔ Cor para todos

{% hint style="info" %}
Use o modo Simplificado durante a modelagem para melhor performance, e Detalhado para visualização final.
{% endhint %}

***

## Exportar MVR

Exportação no formato MVR (My Virtual Rig) para softwares de visualização como grandMA3 e Depence.

<figure><img src="../../../../.gitbook/assets/sketchup/interface/4-interface-export-mvr.png" alt="Exportar MVR"><figcaption><p>Exportação MVR</p></figcaption></figure>

### Tabela de Fixtures

A tabela exibe todos os fixtures do projeto:

<table>
<thead>
<tr>
<th width="180">Coluna</th>
<th>Descrição</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Checkbox</strong></td>
<td>Seleciona o tipo de fixture para exportação</td>
</tr>
<tr>
<td><strong>Tipo de Fixture</strong></td>
<td>Nome do fixture (Manufacturer + Model)</td>
</tr>
<tr>
<td><strong>Intervalo de ID</strong></td>
<td>Range de Fixture IDs (ex: 1-10)</td>
</tr>
<tr>
<td><strong>Quantidade</strong></td>
<td>Quantidade de fixtures deste tipo</td>
</tr>
</tbody>
</table>

### Opções de Exportação

<table>
<thead>
<tr>
<th width="180">Opção</th>
<th>Descrição</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Apenas seleção</strong></td>
<td>Exporta somente fixtures selecionados no SketchUp</td>
</tr>
<tr>
<td><strong>Incluir geometrias</strong></td>
<td>Adiciona elementos 3D (palco, trusses, cenário) ao MVR</td>
</tr>
</tbody>
</table>

### Destino de Saída

<table>
<thead>
<tr>
<th width="180">Opção</th>
<th>Descrição</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>SH_Project.mvr</strong></td>
<td>Usa o nome do projeto do SketchUp</td>
</tr>
<tr>
<td><strong>SH_MVR.mvr</strong></td>
<td>Sobrescreve arquivo padrão na biblioteca GMA3</td>
</tr>
<tr>
<td><strong>Personalizado</strong></td>
<td>Escolhe arquivo de destino manualmente</td>
</tr>
</tbody>
</table>

{% hint style="info" %}
Se o grandMA3 estiver instalado, o StageHex detecta automaticamente a biblioteca e exporta diretamente para a pasta MVR.
{% endhint %}

### Formato MVR

O **MVR** (My Virtual Rig) é um formato padrão da indústria que inclui:

- **Fixtures** com posicionamento 3D e patch DMX
- **Arquivos GDTF** embutidos para cada tipo de fixture
- **Geometrias 3D** do palco e cenário (opcional)

{% hint style="info" %}
O MVR é compatível com Depence, Capture, Vectorworks, grandMA3 e outros softwares.
{% endhint %}

***

## Exportar grandMA2

Exportação para o ecossistema grandMA2/MA3D.

<figure><img src="../../../../.gitbook/assets/sketchup/interface/5-interface-export-ma2.png" alt="Exportar GMA2"><figcaption><p>Exportação grandMA2</p></figcaption></figure>

### Tabela de Fixtures

A tabela exibe todos os fixtures do projeto:

<table>
<thead>
<tr>
<th width="150">Coluna</th>
<th>Descrição</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Checkbox</strong></td>
<td>Seleciona o tipo de fixture para exportação</td>
</tr>
<tr>
<td><strong>Tipo de Fixture</strong></td>
<td>Nome do fixture (Manufacturer + Model)</td>
</tr>
<tr>
<td><strong>Intervalo de ID</strong></td>
<td>Range de Fixture IDs (ex: 1-10)</td>
</tr>
<tr>
<td><strong>Patch</strong></td>
<td>Inclui no macro de patch</td>
</tr>
<tr>
<td><strong>Group</strong></td>
<td>Inclui no macro de grupos</td>
</tr>
<tr>
<td><strong>Tipo</strong></td>
<td>Fixture Type ID para o grandMA2</td>
</tr>
<tr>
<td><strong>Qtd</strong></td>
<td>Quantidade de fixtures deste tipo</td>
</tr>
</tbody>
</table>

### Opções de Exportação

<table>
<thead>
<tr>
<th width="180">Opção</th>
<th>Descrição</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Apenas seleção</strong></td>
<td>Exporta somente fixtures selecionados no SketchUp</td>
</tr>
<tr>
<td><strong>Ignorar colisões</strong></td>
<td>Exporta mesmo com endereços DMX duplicados</td>
</tr>
<tr>
<td><strong>Camadas: Tipos</strong></td>
<td>Cria camadas baseadas no tipo de fixture</td>
</tr>
<tr>
<td><strong>Camadas: Tags</strong></td>
<td>Cria camadas baseadas nas Tags do SketchUp</td>
</tr>
</tbody>
</table>

### Destino de Saída

<table>
<thead>
<tr>
<th width="180">Opção</th>
<th>Descrição</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>SH_MA2</strong></td>
<td>Sobrescreve arquivos padrão na pasta do grandMA2</td>
</tr>
<tr>
<td><strong>SH_Project</strong></td>
<td>Usa o nome do projeto do SketchUp</td>
</tr>
<tr>
<td><strong>Personalizado</strong></td>
<td>Escolhe pasta de destino manualmente</td>
</tr>
</tbody>
</table>

{% hint style="info" %}
Se o grandMA2 estiver instalado, o StageHex detecta automaticamente e exporta diretamente para as pastas corretas.
{% endhint %}

### Arquivos Exportados

O StageHex gera os seguintes arquivos:

<table>
<thead>
<tr>
<th width="250">Arquivo</th>
<th>Descrição</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>SH_MA2-LAYER-N.xml</strong></td>
<td>Arquivos de camada com fixtures (um por camada)</td>
</tr>
<tr>
<td><strong>SH_MA2.xml</strong></td>
<td>Macro com comandos de importação</td>
</tr>
</tbody>
</table>

### Cena MA3D

O StageHex exporta a geometria 3D do projeto para o visualizador MA 3D.

<table>
<thead>
<tr>
<th width="180">Opção</th>
<th>Descrição</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Sobrescrever</strong></td>
<td>Sobrescreve o arquivo SH_SCENE existente</td>
</tr>
<tr>
<td><strong>Exportar 3D</strong></td>
<td>Exporta apenas a cena 3D</td>
</tr>
<tr>
<td><strong>Exportar Tudo</strong></td>
<td>Exporta fixtures + cena 3D em sequência</td>
</tr>
</tbody>
</table>

O arquivo `SH_SCENE.gmamedia` contém:

- Geometria 3D do palco
- Estruturas de truss
- Elementos de cenário

{% hint style="warning" %}
A exportação de Cena MA3D requer o **MA 3D** instalado no computador.
{% endhint %}
