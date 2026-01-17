# Importando no grandMA2

Após exportar do SketchUp, importe as macros no grandMA2.

***

## Importando Macros

<figure><img src="../../.gitbook/assets/ma2-ma3d/1-ma2-import-macros.png" alt="Importar Macros MA2"><figcaption><p>Importando macros do StageHex no grandMA2</p></figcaption></figure>

**Passos:**

1. No grandMA2, vá para **Setup → Import Export → Import**
2. Selecione os arquivos de macro (`.xml`)
3. Execute as macros conforme necessário

***

## Macros Disponíveis

<table>
<thead>
<tr>
<th width="180">Macro</th>
<th>Função</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Import Layers</strong></td>
<td>Importa as Layers baseado na Tag ou Tipo configurado no SketchUp</td>
</tr>
<tr>
<td><strong>Patch Fixtures</strong></td>
<td>Importa o Patch com endereços DMX exportados do SketchUp</td>
</tr>
<tr>
<td><strong>Move Fixtures</strong></td>
<td>Posiciona os fixtures nas coordenadas 3D do projeto</td>
</tr>
<tr>
<td><strong>Create Groups</strong></td>
<td>Cria grupos de fixtures por Tipo ou Tag</td>
</tr>
</tbody>
</table>

{% hint style="info" %}
Execute as macros na ordem: Import Layers → Patch Fixtures → Move Fixtures → Create Groups.
{% endhint %}

***

## Selecionando Fixtures StageHex

<figure><img src="../../.gitbook/assets/ma2-ma3d/2-ma2-fixture-types.png" alt="Fixture Types MA2"><figcaption><p>Fixtures da biblioteca StageHex no grandMA2</p></figcaption></figure>

**Para adicionar fixtures manualmente:**

1. Vá para **Setup → Patch & Fixture Schedule**
2. Selecione **Add Fixtures**
3. Pesquise pelo nome do **Manufacturer + Fixture** usado no SketchUp
4. Selecione o fixture correspondente

{% hint style="warning" %}
Use o mesmo nome de fabricante e modelo que aparece no SketchUp para garantir compatibilidade.
{% endhint %}
