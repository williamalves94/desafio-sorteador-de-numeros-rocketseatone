function sortearNumero() {
  let min = parseInt(document.getElementById("min").value);
  let max = parseInt(document.getElementById("max").value);

  if (isNaN(min) || isNaN(max) || min >= max) {
    document.getElementById("resultado").innerText = "Intervalo inválido!";
    return;
  }

  let numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;
  document.getElementById(
    "resultado"
  ).innerText = `Número sorteado: ${numeroSorteado}`;
}
