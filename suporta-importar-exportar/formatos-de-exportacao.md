# Formatos de Exportação

O StageHex suporta diversos formatos de exportação para integração com softwares de iluminação, visualização e modelagem 3D.

***

## Exportação grandMA2

Formatos específicos para integração com o ecossistema grandMA2/MA3D.

| Formato | Extensão | Conteúdo | Disponível em |
|---------|----------|----------|---------------|
| **MA2 XML** | `.xml` | Macros e Fixture Layers | StageHex Basic, StageHex Pro |
| **MA3D Scene** | `.gmamedia` | Objetos 3D para MA 3D | StageHex Basic, StageHex Pro |

### MA2 XML

Exporta dados de configuração para o grandMA2:

| Componente | Descrição |
|------------|-----------|
| **Macros** | Automação de comandos no console |
| **Fixture Layers** | Organização de fixtures em camadas |

{% hint style="info" %}
Os arquivos `.xml` devem ser importados diretamente no grandMA2 onPC ou no console físico.
{% endhint %}

### MA3D Scene

Exporta geometria 3D para visualização no MA 3D:

| Componente | Descrição |
|------------|-----------|
| **Objetos 3D** | Geometria de treliças, plataformas e elementos de cena |
| **Posicionamento** | Coordenadas e rotação dos objetos |

{% hint style="warning" %}
Para exportar no formato MA3D Scene, o **MA 3D** deve estar instalado no computador.
{% endhint %}

***

## Exportação MVR

| Formato | Extensão | Status | Disponível em |
|---------|----------|--------|---------------|
| **MVR (My Virtual Rig)** | `.mvr` | ✅ | StageHex Pro |

O formato MVR é o método recomendado para integração com softwares de pré-visualização e consoles de iluminação.

**Dados exportados:**
- Estrutura completa da cena
- Posições e rotações de fixtures
- Informações de patch DMX
- Dados técnicos GDTF

{% hint style="info" %}
O MVR é compatível com diversos softwares como Depence, Capture, Vectorworks, entre outros.
{% endhint %}

***

## Exportação GDTF

| Formato | Extensão | Status | Disponível em |
|---------|----------|--------|---------------|
| **GDTF** | `.gdtf` | ✅ | Todos os planos |

Descrição técnica de fixtures contendo:
- Modos DMX
- Geometria 3D
- Atributos e canais
- Informações físicas

***

## Formatos 3D Genéricos

Exportação de geometria para softwares de modelagem e visualização.

| Formato | Extensão | Status | Descrição |
|---------|----------|--------|-----------|
| **3D Studio** | `.3ds` | ✅ | Geometria 3D para visualização e conversão |
| **glTF Binary** | `.glb` | ✅ | Formato moderno otimizado para tempo real |
| **Wavefront OBJ** | `.obj` | ✅ | Geometria estática com materiais |
| **Collada** | `.dae` | ✅ | Interoperabilidade entre softwares 3D |

{% hint style="info" %}
Os formatos 3D genéricos estão disponíveis em todos os planos e exportam apenas a geometria visual, sem dados de patch ou configuração de iluminação.
{% endhint %}

***

## Resumo por Plano

| Formato | StageHex Trial | StageHex Basic | StageHex Pro |
|---------|----------------|----------------|--------------|
| GDTF | ✅ | ✅ | ✅ |
| Formatos 3D (.3ds, .glb, .obj, .dae) | ✅ | ✅ | ✅ |
| MA2 XML | ❌ | ✅ | ✅ |
| MA3D Scene (.gmamedia) | ❌ | ✅ | ✅ |
| MVR | ❌ | ❌ | ✅ |
