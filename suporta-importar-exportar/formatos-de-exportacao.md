# Formatos de Exportação

O StageHex suporta diversos formatos de exportação para integração com softwares de iluminação, visualização e modelagem 3D.

***

## Exportação grandMA2

Formatos específicos para integração com o ecossistema grandMA2/MA3D.

<table>
<thead>
<tr>
<th>Formato</th>
<th width="120">Extensão</th>
<th>Conteúdo</th>
<th width="200" align="center">Disponível em</th>
</tr>
</thead>
<tbody>
<tr>
<td>MA2 XML</td>
<td>*.xml</td>
<td>Macros e Fixture Layers</td>
<td align="center">StageHex Basic, Pro</td>
</tr>
<tr>
<td>MA3D Scene</td>
<td>*.gmamedia</td>
<td>Objetos 3D para MA 3D</td>
<td align="center">StageHex Basic, Pro</td>
</tr>
</tbody>
</table>

### MA2 XML

Exporta dados de configuração para o grandMA2:

* **Macros** - Automação de comandos no console
* **Fixture Layers** - Organização de fixtures em camadas

{% hint style="info" %}
Os arquivos `.xml` devem ser importados diretamente no grandMA2 onPC ou no console físico.
{% endhint %}

### MA3D Scene

Exporta geometria 3D para visualização no MA 3D:

* **Objetos 3D** - Geometria de treliças, plataformas e elementos de cena
* **Posicionamento** - Coordenadas e rotação dos objetos

{% hint style="warning" %}
Para exportar no formato MA3D Scene, o **MA 3D** deve estar instalado no computador.
{% endhint %}

***

## Exportação MVR e GDTF

<table>
<thead>
<tr>
<th>Formato</th>
<th width="120">Extensão</th>
<th width="100" align="center">Status</th>
<th width="200" align="center">Disponível em</th>
</tr>
</thead>
<tbody>
<tr>
<td>MVR (My Virtual Rig)</td>
<td>*.mvr</td>
<td align="center">✔</td>
<td align="center">StageHex Pro</td>
</tr>
<tr>
<td>GDTF</td>
<td>*.gdtf</td>
<td align="center">✔</td>
<td align="center">Todos os planos</td>
</tr>
</tbody>
</table>

**MVR** - Formato recomendado para integração com softwares de pré-visualização:
* Estrutura completa da cena
* Posições e rotações de fixtures
* Informações de patch DMX
* Dados técnicos GDTF

{% hint style="info" %}
O MVR é compatível com diversos softwares como Depence, Capture, Vectorworks, entre outros.
{% endhint %}

**GDTF** - Descrição técnica de fixtures contendo:
* Modos DMX
* Geometria 3D
* Atributos e canais
* Informações físicas

***

## Formatos 3D Genéricos

Exportação de geometria para softwares de modelagem e visualização.

<table>
<thead>
<tr>
<th>Formato</th>
<th width="120">Extensão</th>
<th width="100" align="center">Status</th>
<th>Descrição</th>
</tr>
</thead>
<tbody>
<tr>
<td>3D Studio</td>
<td>*.3ds</td>
<td align="center">✔</td>
<td>Geometria 3D para visualização e conversão</td>
</tr>
<tr>
<td>glTF Binary</td>
<td>*.glb</td>
<td align="center">✔</td>
<td>Formato moderno otimizado para tempo real</td>
</tr>
<tr>
<td>Wavefront OBJ</td>
<td>*.obj</td>
<td align="center">✔</td>
<td>Geometria estática com materiais</td>
</tr>
<tr>
<td>Collada</td>
<td>*.dae</td>
<td align="center">✔</td>
<td>Interoperabilidade entre softwares 3D</td>
</tr>
</tbody>
</table>

{% hint style="info" %}
Os formatos 3D genéricos estão disponíveis em todos os planos e exportam apenas a geometria visual, sem dados de patch ou configuração de iluminação.
{% endhint %}

***

## Resumo por Plano

<table>
<thead>
<tr>
<th>Formato</th>
<th width="150" align="center">StageHex Trial</th>
<th width="150" align="center">StageHex Basic</th>
<th width="150" align="center">StageHex Pro</th>
</tr>
</thead>
<tbody>
<tr>
<td>GDTF</td>
<td align="center">✔</td>
<td align="center">✔</td>
<td align="center">✔</td>
</tr>
<tr>
<td>Formatos 3D</td>
<td align="center">✔</td>
<td align="center">✔</td>
<td align="center">✔</td>
</tr>
<tr>
<td>MA2 XML</td>
<td align="center">✖</td>
<td align="center">✔</td>
<td align="center">✔</td>
</tr>
<tr>
<td>MA3D Scene</td>
<td align="center">✖</td>
<td align="center">✔</td>
<td align="center">✔</td>
</tr>
<tr>
<td>MVR</td>
<td align="center">✖</td>
<td align="center">✖</td>
<td align="center">✔</td>
</tr>
</tbody>
</table>
