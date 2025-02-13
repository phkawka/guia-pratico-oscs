---
layout: default
title: Checklist de Pré-requisitos
---

# <i class="fas fa-clipboard-check"></i> Checklist de Pré-requisitos

Antes de iniciar um novo projeto, é essencial garantir que sua organização atenda a todos os pré-requisitos necessários. Este checklist ajudará você a verificar se está preparado para começar.

## Checklist Interativo

Use nosso checklist interativo para verificar se sua organização está pronta para iniciar o projeto:

<div id="checklist">
  <div class="item">
    <input type="checkbox" id="item1">
    <label for="item1">Documentação legal da OSC está em dia (CNPJ ativo, estatuto atualizado, etc.)</label>
  </div>
  <div class="item">
    <input type="checkbox" id="item2">
    <label for="item2">Certidões negativas de débitos estão atualizadas</label>
  </div>
  <div class="item">
    <input type="checkbox" id="item3">
    <label for="item3">Equipe mínima necessária para o projeto está definida</label>
  </div>
  <div class="item">
    <input type="checkbox" id="item4">
    <label for="item4">Infraestrutura básica para execução do projeto está disponível</label>
  </div>
  <div class="item">
    <input type="checkbox" id="item5">
    <label for="item5">Objetivos do projeto estão alinhados com a missão da organização</label>
  </div>
  <div class="item">
    <input type="checkbox" id="item6">
    <label for="item6">Há aprovação da diretoria/conselho para iniciar o projeto</label>
  </div>
  <div class="item">
    <input type="checkbox" id="item7">
    <label for="item7">Potenciais parceiros ou apoiadores foram identificados</label>
  </div>
  <div class="item">
    <input type="checkbox" id="item8">
    <label for="item8">Análise preliminar de riscos foi realizada</label>
  </div>
  <div class="item">
    <input type="checkbox" id="item9">
    <label for="item9">Existe um plano inicial de sustentabilidade para o projeto</label>
  </div>
  <div class="item">
    <input type="checkbox" id="item10">
    <label for="item10">A organização possui experiência prévia em projetos similares</label>
  </div>
</div>

<button id="verificar">Verificar Prontidão</button>

<div id="resultado" style="display:none;"></div>

<script>
document.getElementById('verificar').addEventListener('click', function() {
  var total = document.querySelectorAll('#checklist input[type="checkbox"]').length;
  var checked = document.querySelectorAll('#checklist input[type="checkbox"]:checked').length;
  var percentual = (checked / total) * 100;
  var resultado = document.getElementById('resultado');
  
  if (percentual === 100) {
    resultado.innerHTML = "<p>Parabéns! Sua organização está 100% pronta para iniciar o projeto.</p>";
  } else if (percentual >= 80) {
    resultado.innerHTML = "<p>Sua organização está bem preparada ("+percentual+"%). Considere abordar os itens faltantes antes de prosseguir.</p>";
  } else if (percentual >= 60) {
    resultado.innerHTML = "<p>Sua organização está parcialmente preparada ("+percentual+"%). Recomenda-se trabalhar nos itens faltantes antes de iniciar o projeto.</p>";
  } else {
    resultado.innerHTML = "<p>Sua organização precisa de mais preparação ("+percentual+"%). Foque em atender os pré-requisitos antes de iniciar o projeto.</p>";
  }
  
  resultado.style.display = 'block';
});
</script>

## Próximos Passos

- Se você atendeu a todos os pré-requisitos, parabéns! Você está pronto para avançar para a próxima etapa.
- Se alguns itens não foram atendidos, crie um plano de ação para abordar essas lacunas.
- Consulte nossos recursos adicionais para obter orientações sobre como atender aos pré-requisitos faltantes.

## Recursos Adicionais

- [Guia: Como Manter sua OSC em Dia com as Obrigações Legais]({{ site.baseurl }}/escritorio-projetos-osc/recursos/guia-obrigacoes-legais-osc.pdf)
- [Webinar: Preparando sua OSC para Novos Projetos]({{ site.baseurl }}/escritorio-projetos-osc/webinars/preparando-osc-novos-projetos)
- [Template: Plano de Ação para Atender Pré-requisitos]({{ site.baseurl }}/escritorio-projetos-osc/recursos/template-plano-acao-pre-requisitos.docx)

[<i class="fas fa-arrow-left"></i> Voltar para Iniciação do Projeto]({{ site.baseurl }}/escritorio-projetos-osc/1-iniciacao-projeto)
