# Exportando para grandMA3

Para exportar seu projeto do StageHex para o grandMA3:

1. Abra o **Gerenciador de Interface** (primeiro botão da Main Tools)
2. Vá para a aba **Exportar**
3. Selecione **MVR**

<figure><img src="../../.gitbook/assets/sketchup/interface/4-interface-export-mvr.png" alt="Exportar MVR"><figcaption><p>Tela de exportação MVR</p></figcaption></figure>

***

## Tabela de Fixtures

A tabela exibe todos os fixtures do projeto com as seguintes colunas:

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

***

## Opções de Exportação

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

***

## Destino de Saída

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
