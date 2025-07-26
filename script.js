function mudarFrase(){
    let frases = [
        'Hoje o dia está ensolarado',
        'Hoje é um sabado feliz',
        'qual o cardapio de hoje para o almoço!',
        'vish, hoje tem aula de javaScript!'

    ];

    let tagalera = document.getElementById('tagarela');
    
    let indice = 0;

    let numero = Math.random();

    if (numero >= 0.25 && numero < 0.50){
        indice = 1;
    }

    else if (numero >= 0.50 && numero < 0.75){
        indice = 2;
    }

else if (numero >= 0.75){
    indice = 3;
}

tagalera.innerHTML = frases[indice];

}

