# Requisitos do Sistema

***

## Requisitos de Hardware

### Mínimos <a href="#requisitos-minimos" id="requisitos-minimos"></a>

| Componente | Requisito |
|------------|-----------|
| **Sistema Operacional** | Windows 10 ou 11 (64 bits) |
| **Processador** | CPU com bom desempenho em single thread |
| **Memória RAM** | 16 GB |
| **Placa de Vídeo** | Compatível com OpenGL 3.1+ |
| **VRAM** | 4 GB (GPU dedicada recomendada) |
| **Armazenamento** | 5 GB de espaço livre |
| **Internet** | Conexão ativa obrigatória |

### Recomendados <a href="#sistema-recomendado" id="sistema-recomendado"></a>

| Componente | Requisito |
|------------|-----------|
| **Sistema Operacional** | Windows 11 (64 bits) |
| **Processador** | Intel Core i7/i9 ou AMD Ryzen 7/9 |
| **Memória RAM** | 32 GB ou mais |
| **Placa de Vídeo** | NVIDIA RTX ou AMD Radeon Pro |
| **VRAM** | 8 GB ou mais |
| **Armazenamento** | SSD NVMe |
| **Internet** | Conexão estável e contínua |

***

## Requisitos de Software

### Plugin StageHex para SketchUp

| Software | Versão | Obrigatório |
|----------|--------|-------------|
| **SketchUp** | 2025 ou superior | Sim |

{% hint style="danger" %}
O plugin StageHex funciona **exclusivamente** com SketchUp 2025 ou versões mais recentes. Versões anteriores não são compatíveis.
{% endhint %}

### Bibliotecas de Assets

Para utilizar as bibliotecas de assets, é necessário ter o software correspondente instalado:

| Biblioteca | Software Necessário | Disponível em |
|------------|---------------------|---------------|
| **MA2 Library** | grandMA2 onPC ou grandMA3 onPC | StageHex Basic, StageHex Pro |
| **Depence Library** | Depence 3 ou Depence 4 | StageHex Pro |

{% hint style="info" %}
As bibliotecas são sincronizadas automaticamente para os diretórios padrão de instalação de cada software.
{% endhint %}

### Exportação de Cenas

| Formato | Extensão | Software Necessário | Disponível em |
|---------|----------|---------------------|---------------|
| **Exportação MA2** | `.xml` | grandMA2 onPC ou grandMA3 onPC | StageHex Basic, StageHex Pro |
| **MVR** | `.mvr` | Qualquer software compatível com MVR | StageHex Pro |
| **MA3D Scene** | `.ma3d` | MA 3D (visualizador grandMA2) | StageHex Basic, StageHex Pro |

{% hint style="warning" %}
Para exportar no formato **MA3D Scene**, o **MA 3D** deve estar instalado no computador.
{% endhint %}

***

## Planos e Funcionalidades

| Funcionalidade | StageHex Trial | StageHex Basic | StageHex Pro |
|----------------|----------------|----------------|--------------|
| Plugin SketchUp | Sim | Sim | Sim |
| MA2 Library | - | Sim | Sim |
| Depence Library | - | - | Sim |
| Exportação MA2 | - | Sim | Sim |
| Exportação MVR | - | - | Sim |
| Exportação MA3D | - | Sim | Sim |

{% hint style="info" %}
Consulte a página de [Planos](../visao-geral/planos/README.md) para mais detalhes sobre cada plano.
{% endhint %}

***

## Requisitos de Conta

* Conta StageHex ativa em [stagehex.com](https://www.stagehex.com)
* Assinatura válida (StageHex Trial, StageHex Basic ou StageHex Pro)

{% hint style="info" %}
A conexão com a internet é obrigatória para instalação, sincronização de bibliotecas e atualizações.
{% endhint %}

***

## Observações Importantes

* O desempenho depende da complexidade do projeto, quantidade de assets e tamanho da cena
* Projetos grandes com múltiplos fixtures, trusses e bibliotecas exigem maior capacidade de hardware
* Atualizações são distribuídas exclusivamente via StageHex Cloud
* Modo offline não é suportado para instalação ou atualização

***

## Ambientes Não Suportados

| Ambiente | Status |
|----------|--------|
| Sistemas 32 bits | Não suportado |
| macOS | Não suportado |
| Linux | Não suportado |
| ARM / Apple Silicon | Não suportado |
| Máquinas virtuais | Não suportado |

{% hint style="danger" %}
O uso do StageHex Cloud fora dos ambientes oficialmente suportados pode resultar em falhas, instabilidade ou perda de desempenho.
{% endhint %}
