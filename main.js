(function(){

    let btn = document.querySelector('.btn')
    
    let notaFinal = 0

    btn.addEventListener('click', resultado)

    function calcularMedia(){
        let nota1 = document.querySelector('#nota1').value
        nota1 = parseFloat(nota1)

        let nota2 = document.querySelector('#nota2').value
        nota2 = parseFloat(nota2)

        let nota3 = document.querySelector('#nota3').value
        nota3 = parseFloat(nota3)

        let nota4 = document.querySelector('#nota4').value
        nota4 = parseFloat(nota4)

        let media = (nota1 + nota2 + nota3 + nota4) / 4

        notaFinal = media.toFixed(1)

        document.querySelector('.result').innerHTML = notaFinal
    }

    function resultado(){

        calcularMedia()

            let result = document.querySelector('.page-result')
            result.style.display = 'block'

            var img = document.querySelector("#image");
            

        let nome = document.querySelector('#nome').value
        nome = nome.toUpperCase()

        if(notaFinal <= 10 && notaFinal >= 7){
            document.querySelector('.info').innerHTML = `<strong>${nome}</strong> <br> Você Passou!!`
            img.setAttribute('src', './img/parabens.png');
        }
        else if(notaFinal <= 7  && notaFinal >= 5){
            document.querySelector('.info').innerHTML = `<strong>${nome}</strong> <br> Você está de exame!!`
            img.setAttribute('src', './img/quase.png');

        }else if(notaFinal <= 5 && notaFinal >= 0){
            document.querySelector('.info').innerHTML = `<strong>${nome}</strong> <br> Você Reprovou!!`
            img.setAttribute('src', './img/triste.png');
        }
    }

})()