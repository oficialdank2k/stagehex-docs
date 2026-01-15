# Formatos de Importação

A StageHex permite a importação de diferentes formatos 3D e dados técnicos, convertendo automaticamente os elementos importados em **Componentes SketchUp compatíveis com o pipeline StageHex**, possibilitando sua organização, edição e posterior exportação no formato MVR.

***

## Formatos Suportados

<table>
<thead>
<tr>
<th>Formato</th>
<th width="150">Extensão</th>
<th width="150" align="center">Status</th>
<th>Observações</th>
</tr>
</thead>
<tbody>
<tr>
<td>SketchUp Native</td>
<td>*.skp</td>
<td align="center">✔</td>
<td>Modelos SketchUp são convertidos em Componentes StageHex</td>
</tr>
<tr>
<td>3D Studio</td>
<td>*.3ds</td>
<td align="center">✔</td>
<td>Geometria importada é convertida em componentes para uso técnico</td>
</tr>
<tr>
<td>Wavefront OBJ</td>
<td>*.obj</td>
<td align="center">✔</td>
<td>Importação de geometria estática com materiais</td>
</tr>
<tr>
<td>Collada</td>
<td>*.dae</td>
<td align="center">✔</td>
<td>Formato intermediário para interoperabilidade entre softwares 3D</td>
</tr>
<tr>
<td>glTF / GLB</td>
<td>*.gltf / *.glb</td>
<td align="center">✔</td>
<td>Importação otimizada para visualização em tempo real</td>
</tr>
</tbody>
</table>

***

## Formatos Planejados

<table>
<thead>
<tr>
<th>Formato</th>
<th width="150">Extensão</th>
<th width="150" align="center">Status</th>
<th>Observações</th>
</tr>
</thead>
<tbody>
<tr>
<td>grandMA2 XML</td>
<td>*.xml</td>
<td align="center">Planejado</td>
<td>Importação de patch, fixtures e universos a partir de projetos MA2</td>
</tr>
<tr>
<td>MVR (My Virtual Rig)</td>
<td>*.mvr</td>
<td align="center">Planejado</td>
<td>Importação de rigs completos para edição e reexportação em MVR</td>
</tr>
</tbody>
</table>

{% hint style="warning" %}
A importação de arquivos MA2 XML e MVR encontra-se em desenvolvimento e será disponibilizada em versões futuras da StageHex Cloud.
{% endhint %}

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
