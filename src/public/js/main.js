 const $tournament = document.betForm.tournament;
 const $strategy = document.betForm.strategy;
 const $result = document.betForm.result;
 const $preRegistration = document.betForm.preRegistration.checked;

 const $date = document.betForm.date.value || new Date();
 const $tournamentOption = $tournament.options[$tournament.selectedIndex].text;
 const $event = document.betForm.event.value || null;
 const $strategyOption = $strategy.options[$strategy.selectedIndex].text;
 const $betAmount = document.betForm.betAmount.value || null;
 const $couta = document.betForm.cuota.value || null;
 const $resultOption = $result.options[$result.selectedIndex].text;

console.log($date)