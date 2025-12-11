---
layout: view-resource
title: "API-voorbeelden in VitePress"
description: "Leer het gebruik van enkele runtime-API's die door VitePress worden aangeboden"
date: 2026-09-14T00:00:00.000Z
author: "John Doe"
tags: One, Two, Three, Four
no: 001
---

# Voorbeelden van Runtime-API's

Deze pagina laat het gebruik zien van enkele runtime-API's die door VitePress worden aangeboden.

De belangrijkste `useData()`-API kan worden gebruikt om site-, thema- en paginagegevens voor de huidige pagina op te halen. Het werkt zowel in `.md`- als in `.vue`-bestanden:

```md
<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>

## Resultaten

### Thema-gegevens
<pre>{{ theme }}</pre>

### Pagina-gegevens
<pre>{{ page }}</pre>

### Pagina-frontmatter
<pre>{{ frontmatter }}</pre>
```

<script setup> 
import { useData } from 'vitepress' 
const { site, theme, page, frontmatter } = useData()
</script>

## Resultaten

### Thema-gegevens
<pre>{{ theme }}</pre>

### Pagina-gegevens
<pre>{{ page }}</pre>

### Pagina-frontmatter
<pre>{{ frontmatter }}</pre>

### Meer

Bekijk de documentatie voor de [volledige lijst met runtime-API's](https://vitepress.dev/reference/runtime-api#usedata).