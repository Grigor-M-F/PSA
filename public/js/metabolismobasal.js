function calcular() {
    var fem = iptSexo_F.value;
    var biotipo = Number(sltBiotipo.value);
    var altura = Number(iptAltura.value);
    var peso = Number(iptPeso.value);
    var idade = Number(iptIdade.value);

    var calculo = 0;

    if (fem == 0) {
        calculo = biotipo * (88.362 + (13.397 * peso) + (4.799 * altura) - (5.677 * idade));
    } else {
        calculo = biotipo * (447.593 + (9.247 * peso) + (3.098 * altura) - (4.330 * idade));
    }

    resposta.innerHTML = `${parseInt(calculo)} kcal`;

    console.log(calculo);

}