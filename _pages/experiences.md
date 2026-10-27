---
permalink: /experiencias/
title: "Experiências de exames"
excerpt: "Como foi a preparação, o dia da prova, os obstáculos e o que aprendi — sem spoilers."
---

Aqui estão os relatos de certificações que decidi tornar públicos. Minha base transversal de trabalho está em [Metodologias de Enumeração]({{ '/metodologias/' | relative_url }}). Priorizei experiências pessoais e recomendações, evitando qualquer detalhe sigiloso das avaliações.

{% assign exam_posts = site.posts | where_exp: "post", "post.categories contains 'exam-experience'" %}
{% if exam_posts.size > 0 %}
{% for post in exam_posts %}
### [{{ post.title }}]({{ post.url | relative_url }})

{{ post.excerpt | strip_html | truncate: 220 }}

{% endfor %}
{% else %}
Os relatos individuais estão em preparação. Enquanto isso, conheça [o propósito deste blog]({{ '/journal/por-que-criei-este-blog/' | relative_url }}).
{% endif %}

Quer saber quais informações não serão compartilhadas? Leia a [política anti-spoilers]({{ '/sem-spoilers/' | relative_url }}).
