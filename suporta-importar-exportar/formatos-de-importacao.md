---
icon: upload
---

# Formatos de Importação

A StageHex permite a importação de diferentes formatos 3D e dados técnicos, convertendo automaticamente os elementos importados em **Componentes SketchUp compatíveis com o pipeline StageHex**, possibilitando sua organização, edição e posterior exportação no formato MVR.

***

## Importações StageHex

Módulos de importação próprios da StageHex, acessíveis pelo menu **Extensões → StageHex → Importar**.

<table><thead><tr><th>Formato</th><th width="150">Extensão</th><th width="150" align="center">Status</th><th>Observações</th></tr></thead><tbody><tr><td>Imagem</td><td>*.png / *.jpg / *.jpeg / *.bmp</td><td align="center">✔</td><td>Geração de geometria a partir da imagem, com remoção automática de background</td></tr><tr><td>SVG (Scalable Vector Graphics)</td><td>*.svg</td><td align="center">✔</td><td>Importação direta de geometria vetorial</td></tr><tr><td>grandMA2 XML</td><td>*.xml</td><td align="center">✔</td><td>Importação de patch, fixtures e universos a partir de projetos MA2</td></tr><tr><td>MVR (My Virtual Rig)</td><td>*.mvr</td><td align="center">✔</td><td>Importação de fixtures, universos e patch a partir de arquivos MVR</td></tr></tbody></table>

***

## Importações Nativas do SketchUp

Formatos 3D importados através do importador nativo do SketchUp (menu **Arquivo → Importar...**). Após a importação, organize a geometria em Componentes para aplicar metadados StageHex.

<table><thead><tr><th>Formato</th><th width="150">Extensão</th><th width="150" align="center">Status</th><th>Observações</th></tr></thead><tbody><tr><td>SketchUp Native</td><td>*.skp</td><td align="center">✔</td><td>Importação direta do formato nativo do SketchUp</td></tr><tr><td>3D Studio</td><td>*.3ds</td><td align="center">✔</td><td>Geometria importada é convertida em componentes para uso técnico</td></tr><tr><td>Wavefront OBJ</td><td>*.obj</td><td align="center">✔</td><td>Importação de geometria estática com materiais</td></tr><tr><td>Collada</td><td>*.dae</td><td align="center">✔</td><td>Formato intermediário para interoperabilidade entre softwares 3D</td></tr><tr><td>glTF / GLB</td><td>*.gltf / *.glb</td><td align="center">✔</td><td>Importação otimizada para visualização em tempo real</td></tr></tbody></table>

***

## Resumo por Plano

<table><thead><tr><th>Formato</th><th width="150" align="center">StageHex Trial</th><th width="150" align="center">StageHex Basic</th><th width="150" align="center">StageHex Pro</th></tr></thead><tbody><tr><td>Imagem</td><td align="center">✖</td><td align="center">✔</td><td align="center">✔</td></tr><tr><td>SVG</td><td align="center">✖</td><td align="center">✔</td><td align="center">✔</td></tr><tr><td>MA2 XML</td><td align="center">✖</td><td align="center">✔</td><td align="center">✔</td></tr><tr><td>MVR</td><td align="center">✖</td><td align="center">✖</td><td align="center">✔</td></tr></tbody></table>

***

## Fluxo de Importação StageHex

{% hint style="info" %}
Todos os formatos 3D importados são automaticamente convertidos em Componentes SketchUp, permitindo a aplicação de metadados StageHex e a exportação correta para MVR.
{% endhint %}

* Arquivos importados são convertidos em **Componentes**
* Componentes podem receber **metadados técnicos StageHex** (classe, tipo, fabricante, patch, etc.)
* Elementos organizados tornam-se compatíveis com:
  * Exportação MVR
  * Integração com Depence
  * Integração com grandMA2 e grandMA3
