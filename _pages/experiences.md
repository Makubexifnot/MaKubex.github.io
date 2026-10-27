---
permalink: /experiencias/
title: "Experiências de exames"
excerpt: "Preparação, desafios, decisões e aprendizados ao longo das certificações."
---

Aqui estão os relatos de certificações que decidi tornar públicos. Minha base transversal de trabalho está em [Metodologias de Enumeração]({{ '/metodologias/' | relative_url }}). Os textos abordam minha preparação, os momentos mais desafiadores e as lições que levo para novos estudos e projetos.

{% assign exam_posts = site.posts | where_exp: "post", "post.categories contains 'exam-experience'" %}
{% if exam_posts.size > 0 %}
{% for post in exam_posts %}
### [{{ post.title }}]({{ post.url | relative_url }})

{{ post.excerpt | strip_html | truncate: 220 }}

{% endfor %}
{% else %}
Os relatos individuais estão em preparação. Enquanto isso, conheça [o propósito deste blog]({{ '/journal/por-que-criei-este-blog/' | relative_url }}).
{% endif %}
