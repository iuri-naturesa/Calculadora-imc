function calcular() {
  var altura = document.querySelector("#altura").value;
  var peso = document.querySelector("#peso").value;
  const ativoBorda = document.querySelectorAll(".resultado-info h2");

  var alturaM = altura / 100;
  var imc = peso / alturaM ** 2;
  var imcFixed = imc.toFixed(1);

  document.querySelector("#resultado").innerHTML = imcFixed;

  ativoBorda.forEach((bordinha) => {
    bordinha.classList.remove("txt-ativo");
  });
  if (imc < 18.5) {
    ativoBorda[0].classList.add("txt-ativo");
  } else if (imc < 25) {
    ativoBorda[1].classList.add("txt-ativo");
  } else if (imc < 30) {
    ativoBorda[2].classList.add("txt-ativo");
  } else if (imc > 30) {
    ativoBorda[3].classList.add("txt-ativo");
  }
}
