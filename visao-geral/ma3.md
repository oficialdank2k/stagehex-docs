# grandMA3

Integração do StageHex com o grandMA3 através do formato MVR (My Virtual Rig).

***

## Formato MVR

O **MVR** (My Virtual Rig) é um formato padrão da indústria para troca de dados entre softwares de iluminação e visualização.

### Vantagens do MVR

- **Padrão aberto**: Compatível com múltiplos softwares
- **Dados completos**: Inclui fixtures, geometria e patch DMX
- **Posicionamento preciso**: Mantém coordenadas 3D exatas

***

## Exportando do SketchUp

Para exportar seu projeto em MVR:

1. Abra o **Gerenciador de Interface** (primeiro botão da Main Tools)
2. Vá para a aba **Exportar**
3. Selecione **MVR**
4. Configure as opções de exportação
5. Clique em **Exportar**

Veja detalhes em: [Exportar MVR](plugin-sketchup/ferramentas/main-tools/interface.md#exportar-mvr)

***

## Importando no grandMA3

### Importando MVR

<figure><img src="../.gitbook/assets/ma3/1-ma3-import-mvr.png" alt="Importar MVR no MA3"><figcaption><p>Importando arquivo MVR no grandMA3</p></figcaption></figure>

**Passos:**

1. No grandMA3, vá para **Menu → Import → MVR**
2. Navegue até o arquivo `.mvr` exportado
3. Selecione as opções de importação
4. Confirme a importação

### Visualização 3D

Após importar, visualize o projeto no 3D do grandMA3:

<figure><img src="../.gitbook/assets/ma3/2-ma3-3d.png" alt="Visualização 3D MA3"><figcaption><p>Projeto StageHex visualizado no 3D do grandMA3</p></figcaption></figure>

**Elementos importados:**

- Fixtures com posicionamento 3D
- Patch DMX configurado
- Geometria do palco
- Estruturas de truss

***

## Detecção Automática

A StageHex Cloud detecta automaticamente instalações do grandMA3:

- **Caminho da biblioteca**: `C:\ProgramData\MALightingTechnology\gma3_library`
- **Pasta MVR**: `C:\ProgramData\MALightingTechnology\gma3_library\mvr`

### Destino de Exportação

Ao exportar MVR, você pode escolher:

<table>
<thead>
<tr>
<th>Destino</th>
<th>Descrição</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Biblioteca GMA3</strong></td>
<td>Salva diretamente na pasta MVR do grandMA3</td>
</tr>
<tr>
<td><strong>Caminho Personalizado</strong></td>
<td>Escolha qualquer pasta do sistema</td>
</tr>
</tbody>
</table>

{% hint style="info" %}
Salvando na Biblioteca GMA3, o arquivo estará disponível automaticamente para importação no grandMA3.
{% endhint %}

***

## Configurações

### Versões Suportadas

<table>
<thead>
<tr>
<th>Software</th>
<th width="150" align="center">Suportado</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>grandMA3 onPC</strong></td>
<td align="center">✔</td>
</tr>
<tr>
<td><strong>grandMA3 Console</strong></td>
<td align="center">✔</td>
</tr>
</tbody>
</table>

### Opções de Exportação

<table>
<thead>
<tr>
<th>Opção</th>
<th>Descrição</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Apenas seleção</strong></td>
<td>Exporta somente fixtures selecionados</td>
</tr>
<tr>
<td><strong>Incluir geometrias</strong></td>
<td>Adiciona elementos 3D além dos fixtures</td>
</tr>
</tbody>
</table>

{% hint style="warning" %}
Certifique-se de que os fixtures estão patcheados antes de exportar para incluir os endereços DMX no MVR.
{% endhint %}
