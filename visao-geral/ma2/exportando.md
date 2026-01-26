# Exportando para grandMA2

Para exportar seu projeto da StageHex para o grandMA2:

1. No SketchUp, acesse **Arquivo → StageHex Export → Export MA2 - GrandMA2 Patch...**
2. Ou pressione o atalho configurado

<figure><img src="../../.gitbook/assets/sketchup/export-interface/export-ma2.png" alt="Exportar GMA2"><figcaption><p>Tela de exportação grandMA2</p></figcaption></figure>

***

## Configurando a Exportação

### Tabela de Fixtures

A tabela exibe todos os fixtures do projeto:

* **Tipo de Fixture** - Nome do fixture (Fabricante + Modelo)
* **Intervalo de ID** - Range de Fixture IDs
* **Patch / Group** - Opções de inclusão no macro
* **Tipo** - Fixture Type ID para o grandMA2
* **Qtd** - Quantidade de fixtures

### Opções Disponíveis

* **Apenas seleção** - Exporta somente fixtures selecionados no SketchUp
* **Ignorar colisões** - Exporta mesmo com endereços DMX duplicados
* **Camadas: Tipos** - Cria camadas baseadas no tipo de fixture
* **Camadas: Tags** - Cria camadas baseadas nas Tags do SketchUp

### Destino de Saída

* **SH_MA2** - Exporta para pasta padrão do grandMA2 (se instalado)
* **SH_StageHex** - Usa nome padrão StageHex
* **Caminho personalizado** - Escolhe pasta de destino manualmente

{% hint style="info" %}
Se o grandMA2 estiver instalado, o StageHex detecta automaticamente e exporta diretamente para as pastas corretas.
{% endhint %}

***

## Cena MA3D

Na mesma tela, a seção **Cena MA3D** permite exportar a geometria 3D para o visualizador MA 3D:

* **Exportar 3D** - Exporta apenas a cena 3D
* **Exportar Tudo** - Exporta fixtures + cena 3D

{% hint style="warning" %}
A exportação de Cena MA3D requer o **MA 3D** instalado no computador.
{% endhint %}

Veja detalhes completos em: [Exportar e Relatórios → Exportar MA2](../plugin-sketchup/exportacao.md#exportar-ma2)
