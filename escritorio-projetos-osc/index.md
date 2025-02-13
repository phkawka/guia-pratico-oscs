---
layout: default
title: Escritório de Projetos OSC
---

# <i class="fas fa-project-diagram"></i> Escritório de Projetos OSC

Bem-vindo ao Escritório de Projetos OSC, seu guia completo para gerenciar projetos de forma eficaz e eficiente. Aqui você encontrará recursos, ferramentas e orientações para cada fase do ciclo de vida do seu projeto.

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

## Como usar este Escritório de Projetos

1. Clique em cada etapa do fluxograma acima para acessar recursos específicos daquela fase do projeto.
2. Use a barra de navegação para acessar ferramentas e modelos úteis para seu projeto.
3. Consulte nossa seção de FAQ e Dicas para respostas rápidas e orientações práticas.

## Recursos Adicionais

[Acesse nossa biblioteca de recursos adicionais]({{ site.baseurl }}/escritorio-projetos-osc/recursos-adicionais) para templates, guias, ferramentas e mais.

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
