import fetch from "node-fetch";
const RUTA = "http://localhost:3000/";

document.getElementById("buttonBetForm").addEventListener("click", (e) => {
  e.preventDefault();

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

  tike = {
    date: $date,
    tournament: $tournamentOption,
    event: $event,
    strategy: $strategyOption,
    betAmount: $betAmount,
    couta: $couta,
    result: $resultOption
  }

  postData(`${RUTA}tasks/add`, tike)
    .then((response) => response.json())
    .then((data) => console.log(data));
});

class DataBet {
  constructor({ date, tournament, event, strategy, betAmount, couta, result }) {
    this.date = date;
    this.tournament = tournament;
    this.event = event;
    this.strategy = strategy;
    this.betAmount = betAmount;
    this.couta = couta;
    this.result = result;
  }
}

function postData(urlPost, data) {
  const response = fetch(urlPost, {
    method: "POST",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
}
