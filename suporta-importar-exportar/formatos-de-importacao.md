---
icon: upload
---

# Formatos de Importação

A StageHex Cloud oferece módulos de importação dedicados que convertem arquivos externos em **Componentes SketchUp compatíveis com o pipeline StageHex**, prontos para receber metadados técnicos e serem exportados em MVR.

***

## Formatos Suportados

<table><thead><tr><th>Formato</th><th width="150">Extensão</th><th width="150" align="center">Status</th><th>Observações</th></tr></thead><tbody><tr><td>Imagem</td><td>\*.png / \*.jpg / \*.jpeg / \*.bmp</td><td align="center">✔</td><td>Geração de geometria a partir de contornos da imagem, com remoção automática de background</td></tr><tr><td>SVG (Scalable Vector Graphics)</td><td>\*.svg</td><td align="center">✔</td><td>Importação direta de geometria vetorial como componente SketchUp</td></tr></tbody></table>

### Importação de Imagem

A importação de imagem converte um bitmap em geometria 3D editável. Disponível em três modos:

<table>
<thead>
<tr>
<th width="150">Modo</th>
<th>Descrição</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Edge</strong></td>
<td>Importa apenas arestas (contornos), sem faces</td>
</tr>
<tr>
<td><strong>Face</strong></td>
<td>Importa contornos como faces sólidas com material padrão StageHex</td>
</tr>
<tr>
<td><strong>Material</strong></td>
<td>Importa contornos como faces com a imagem original aplicada como textura</td>
</tr>
</tbody>
</table>

{% hint style="info" %}
A remoção de background é feita automaticamente. A geometria final é gerada via parser SVG interno e organizada como Componente SketchUp.
{% endhint %}

### Importação de SVG

O parser SVG nativo do StageHex suporta os principais elementos vetoriais e transformações:

<table>
<thead>
<tr>
<th width="180">Recurso</th>
<th>Suporte</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Elementos</strong></td>
<td><code>path</code>, <code>rect</code>, <code>circle</code>, <code>ellipse</code>, <code>group</code>, <code>image</code></td>
</tr>
<tr>
<td><strong>Comandos de path</strong></td>
<td>M, L, H, V, C, S, Q, Z (absolutos e relativos)</td>
</tr>
<tr>
<td><strong>Curvas Bézier</strong></td>
<td>Cúbica, Cúbica suave, Quadrática (convertida para cúbica)</td>
</tr>
<tr>
<td><strong>Transformações</strong></td>
<td><code>matrix</code>, <code>translate</code>, <code>scale</code>, <code>rotate</code></td>
</tr>
<tr>
<td><strong>Estilos CSS</strong></td>
<td>Classes CSS dentro de <code>&#x3C;defs>&#x3C;style></code> (parsing implementado)</td>
</tr>
</tbody>
</table>

{% hint style="info" %}
O SVG é importado como Componente SketchUp centralizado na origem do modelo, com flip de Y/Z para alinhar com o sistema de coordenadas do SketchUp.
{% endhint %}

***

## Formatos Planejados

<table><thead><tr><th>Formato</th><th width="150">Extensão</th><th width="150" align="center">Status</th><th>Observações</th></tr></thead><tbody><tr><td>grandMA2 XML</td><td>\*.xml</td><td align="center">Planejado</td><td>Importação de patch, fixtures e universos a partir de projetos MA2</td></tr><tr><td>MVR (My Virtual Rig)</td><td>\*.mvr</td><td align="center">Planejado</td><td>Importação de rigs completos para edição e reexportação em MVR</td></tr></tbody></table>

{% hint style="warning" %}
A importação de arquivos MA2 XML e MVR encontra-se em desenvolvimento e será disponibilizada em versões futuras da StageHex Cloud.
{% endhint %}

***

## Outros Formatos 3D

Para importar modelos 3D em outros formatos (3DS, OBJ, Collada, glTF/GLB, SKP), utilize o **importador nativo do SketchUp**:

* **Arquivo → Importar...** no menu do SketchUp

<table><thead><tr><th>Formato</th><th width="150">Extensão</th><th>Observações</th></tr></thead><tbody><tr><td>SketchUp</td><td>\*.skp</td><td>Import nativo do SketchUp</td></tr><tr><td>3D Studio</td><td>\*.3ds</td><td>Import nativo do SketchUp</td></tr><tr><td>Wavefront OBJ</td><td>\*.obj</td><td>Import nativo do SketchUp (versão Pro)</td></tr><tr><td>Collada</td><td>\*.dae</td><td>Import nativo do SketchUp</td></tr><tr><td>glTF / GLB</td><td>\*.gltf / \*.glb</td><td>Pode requerer extensão de terceiros</td></tr></tbody></table>

{% hint style="info" %}
Após importar por qualquer caminho, converta a geometria em **Componentes** para receber metadados técnicos StageHex (classe, tipo, fabricante, patch, etc.) e ficar compatível com a exportação MVR.
{% endhint %}

***

## Fluxo de Importação StageHex

* Arquivos importados (Imagem, SVG ou nativo SketchUp) são organizados em **Componentes**
* Componentes recebem **metadados técnicos StageHex** (classe, tipo, fabricante, patch, etc.)
* Elementos organizados tornam-se compatíveis com:
  * Exportação MVR
  * Integração com Depence
  * Integração com grandMA2 e grandMA3
