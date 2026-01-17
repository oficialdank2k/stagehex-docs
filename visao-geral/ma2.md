# grandMA2

Integração do StageHex com o ecossistema grandMA2, incluindo biblioteca de fixtures e exportação para MA 3D.

***

## Biblioteca MA2

A **StageHex Cloud** instala automaticamente a biblioteca de fixtures grandMA2 no seu computador.

### Detecção Automática

O sistema detecta automaticamente instalações do grandMA2:

- **Caminho base**: `C:\ProgramData\MA Lighting Technologies\grandma`
- **Versões**: Detecta todas as versões `gma2_V_*` instaladas
- **Seleção**: Usa a versão mais recente por padrão

### Instalação da Biblioteca

A biblioteca StageHex é instalada em:

```
C:\ProgramData\MA Lighting Technologies\grandma\gma2_V_X.X.X\library\
```

{% hint style="info" %}
A instalação é feita automaticamente pela StageHex Cloud. Basta manter o aplicativo aberto para receber atualizações.
{% endhint %}

***

## Exportando do SketchUp

Para exportar seu projeto para grandMA2:

1. Abra o **Gerenciador de Interface** (primeiro botão da Main Tools)
2. Vá para a aba **Exportar**
3. Selecione **grandMA2**

Veja detalhes em: [Exportar grandMA2](plugin-sketchup/ferramentas/main-tools/interface.md#exportar-grandma2)

***

## Importando no grandMA2

### Importando Macros

Após exportar do SketchUp, importe as macros no grandMA2:

<figure><img src="../.gitbook/assets/ma2-ma3d/1-ma2-import-macros.png" alt="Importar Macros MA2"><figcaption><p>Importando macros do StageHex no grandMA2</p></figcaption></figure>

**Passos:**

1. No grandMA2, vá para **Setup → Import Export → Import**
2. Navegue até a pasta do show exportado
3. Selecione os arquivos de macro (`.xml`)
4. Execute as macros para criar o patch

### Selecionando Fixture Types

Os fixtures da biblioteca StageHex estarão disponíveis no Fixture Types:

<figure><img src="../.gitbook/assets/ma2-ma3d/2-ma2-fixture-types.png" alt="Fixture Types MA2"><figcaption><p>Fixtures StageHex na biblioteca do grandMA2</p></figcaption></figure>

**Localização:**

1. Vá para **Setup → Patch & Fixture Schedule**
2. Selecione **Add Fixtures**
3. Navegue para **Manufacturer → StageHex**
4. Selecione o fixture desejado

{% hint style="info" %}
Os fixtures da biblioteca StageHex são instalados automaticamente pela StageHex Cloud e atualizados regularmente.
{% endhint %}

***

## Importando no MA 3D

A cena 3D pode ser importada diretamente no MA 3D:

<figure><img src="../.gitbook/assets/ma2-ma3d/3-ma2-3d-import.png" alt="Importar MA 3D"><figcaption><p>Importando SH_SCENE no MA 3D</p></figcaption></figure>

### Arquivo SH_SCENE

O StageHex exporta um arquivo `SH_SCENE.gmamedia` contendo:

- Geometria 3D do palco
- Estruturas de truss
- Posições dos fixtures
- Elementos de cenário

### Passos para Importar

1. No MA 3D, vá para **File → Import**
2. Selecione o arquivo `SH_SCENE.gmamedia`
3. A cena será carregada automaticamente

{% hint style="warning" %}
O software MA 3D deve estar instalado para a exportação da cena 3D funcionar.
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
<td><strong>grandMA2 onPC</strong></td>
<td align="center">✔</td>
</tr>
<tr>
<td><strong>grandMA2 Console</strong></td>
<td align="center">✔</td>
</tr>
<tr>
<td><strong>MA 3D</strong></td>
<td align="center">✔</td>
</tr>
</tbody>
</table>

### Atualizações Automáticas

A StageHex Cloud gerencia automaticamente:

- **Detecção de versão**: Identifica todas as versões instaladas
- **Atualização de biblioteca**: Sincroniza fixtures com a nuvem
- **Configuração de caminhos**: Ajusta paths automaticamente

{% hint style="info" %}
Mantenha a StageHex Cloud aberta para receber atualizações automáticas da biblioteca de fixtures.
{% endhint %}
