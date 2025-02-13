---
layout: default
title: Escritório de Projetos OSC
---

# <i class="fas fa-project-diagram"></i> Escritório de Projetos OSC

Bem-vindo ao Escritório de Projetos OSC, seu centro de recursos para gerenciar projetos de forma eficaz. Navegue pelo ciclo de vida do projeto clicando em cada etapa abaixo.

<div id="fluxograma">
  <div class="etapa" data-page="1-iniciacao-projeto">
    <i class="fas fa-flag"></i>
    <span>1. Iniciação do Projeto</span>
  </div>
  <div class="etapa" data-page="2-planejamento">
    <i class="fas fa-tasks"></i>
    <span>2. Planejamento</span>
  </div>
  <div class="etapa" data-page="3-execucao">
    <i class="fas fa-cogs"></i>
    <span>3. Execução</span>
  </div>
  <div class="etapa" data-page="4-monitoramento-controle">
    <i class="fas fa-chart-line"></i>
    <span>4. Monitoramento e Controle</span>
  </div>
  <div class="etapa" data-page="5-encerramento">
    <i class="fas fa-flag-checkered"></i>
    <span>5. Encerramento</span>
  </div>
</div>

## Recursos Adicionais

- [Biblioteca de Modelos]({{ site.baseurl }}/escritorio-projetos-osc/biblioteca-modelos)
- [Ferramentas Interativas]({{ site.baseurl }}/escritorio-projetos-osc/ferramentas-interativas)
- [FAQ e Dicas]({{ site.baseurl }}/escritorio-projetos-osc/faq-dicas)
- [Estudos de Caso]({{ site.baseurl }}/escritorio-projetos-osc/estudos-caso)

<script>
document.querySelectorAll('.etapa').forEach(etapa => {
  etapa.addEventListener('click', () => {
    window.location.href = '{{ site.baseurl }}/escritorio-projetos-osc/' + etapa.dataset.page;
  });
});
</script>
