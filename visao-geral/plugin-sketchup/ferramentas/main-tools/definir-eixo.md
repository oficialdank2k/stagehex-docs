# Definir Eixo (Set Axis)

Ferramenta para configurar o eixo (axis) de componentes e grupos.

<figure><img src="../../../../.gitbook/assets/gif/main-tools/set-axis.gif" alt="Definir Eixo"><figcaption><p>Configuração do eixo de componentes</p></figcaption></figure>

***

## Como Usar

1. Selecione os componentes ou grupos que deseja ajustar
2. Ative a ferramenta **Definir Eixo**
3. Clique para definir a nova posição do eixo
4. O eixo será reposicionado mantendo a geometria no lugar

***

## Proteção de Componentes

{% hint style="warning" %}
**Componentes StageHex** e **grupos bloqueados** são protegidos e **não podem ter o eixo alterado**.

Isso preserva o posicionamento correto dos metadados técnicos.
{% endhint %}

***

## Comportamento

<table>
<thead>
<tr>
<th width="200">Tipo de Elemento</th>
<th width="150" align="center">Pode Alterar?</th>
<th>Observação</th>
</tr>
</thead>
<tbody>
<tr>
<td>Grupos comuns</td>
<td align="center">✔</td>
<td>Eixo pode ser alterado</td>
</tr>
<tr>
<td>Componentes comuns</td>
<td align="center">✔</td>
<td>Eixo pode ser alterado</td>
</tr>
<tr>
<td>Componentes StageHex</td>
<td align="center">✖</td>
<td>Protegido - eixo fixo</td>
</tr>
<tr>
<td>Grupos bloqueados</td>
<td align="center">✖</td>
<td>Protegido - desbloqueie primeiro</td>
</tr>
</tbody>
</table>

***

## Controles

<table>
<thead>
<tr>
<th width="180">Tecla</th>
<th>Ação</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Click</strong></td>
<td>Definir nova posição do eixo</td>
</tr>
<tr>
<td><strong>Esc</strong></td>
<td>Sair da ferramenta</td>
</tr>
</tbody>
</table>

***

## Uso Comum

Esta ferramenta é útil para:

- Ajustar o ponto de rotação de objetos
- Alinhar o eixo com uma face ou aresta específica
- Preparar componentes para uso com outras ferramentas (Mover, Rotacionar)
