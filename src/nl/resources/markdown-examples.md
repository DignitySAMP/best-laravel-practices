---
layout: view-resource
title: "Voorbeelden van Markdown-extensies in VitePress"
description: "Leer enkele van de ingebouwde markdown-extensies die door VitePress worden aangeboden"
date: 2025-10-14T00:00:00.000Z
author: "Jane Doe"
tags: Five, Six, Seven, Eight
---
# Voorbeelden van Markdown-extensies

Deze pagina demonstreert enkele van de ingebouwde markdown-extensies die door VitePress worden aangeboden.

## Syntaxiskleuring

VitePress biedt syntaxiskleuring aangedreven door [Shiki](https://github.com/shikijs/shiki), met extra functies zoals regelmarkering:

**Input**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
```

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Aangepaste containers

**Input**

```md
:::
Dit is een info-box.
:::

:::
Dit is een tip.
:::

:::
Dit is een waarschuwing.
:::

:::
Dit is een gevaarlijke waarschuwing.
:::

:::
Dit is een detailsblok.
:::
```

**Output**

::: info
Dit is een info-box.
:::

::: tip
Dit is een tip.
:::

::: warning
Dit is een waarschuwing.
:::

::: danger
Dit is een gevaarlijke waarschuwing.
:::

::: details
Dit is een detailsblok.
:::

## Meer

Bekijk de documentatie voor de [volledige lijst met markdown-extensies](https://vitepress.dev/guide/markdown).