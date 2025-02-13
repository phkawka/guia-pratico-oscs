---
layout: default
title: Escritório de Projetos OSC
---

# <i class="fas fa-project-diagram"></i> Escritório de Projetos OSC

Bem-vindo ao Escritório de Projetos OSC. Clique em cada etapa do fluxograma para obter informações detalhadas.

<div id="fluxograma">
  <div class="etapa" data-page="1-iniciacao-projeto/avaliacao-capacidade-institucional">
    <i class="fas fa-building"></i>
    <span>Avaliação de Capacidade Institucional</span>
  </div>
  <div class="etapa" data-page="1-iniciacao-projeto/checklist-pre-requisitos">
    <i class="fas fa-clipboard-check"></i>
    <span>Checklist de Pré-requisitos</span>
  </div>
  <div class="etapa" data-page="1-iniciacao-projeto/modelo-analise-edital">
    <i class="fas fa-file-alt"></i>
    <span>Modelo de Análise de Edital</span>
  </div>
  <div class="etapa" data-page="planejamento/ferramenta-interativa-proposta">
    <i class="fas fa-tools"></i>
    <span>Ferramenta Interativa de Proposta</span>
  </div>
</div>

<script>
document.querySelectorAll('.etapa').forEach(etapa => {
  etapa.addEventListener('click', () => {
    window.location.href = '{{ site.baseurl }}/escritorio-projetos-osc/' + etapa.dataset.page;
  });
});
</script>
