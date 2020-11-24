window.onload = function () {
    let number = document.getElementById('number')
    let chosenNumber = document.getElementById('chosenNumber')
    let numberFull = document.getElementById('numberFull')

    function unidade(num) {
        let zeroToNine = ['zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove']
        return zeroToNine[num]
    }

    function dezenas(num) {
        let position = 0
        let tenToNineten = ['dez', 'onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove']
        let twentyToNinety = ['', '', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa']
        if (num < 20) {
            position = num - 10
            return tenToNineten[position]
        } else if ((num % 10) === 0) {
            position = num / 10
            return twentyToNinety[position]
        } else {
            position = Math.trunc(num / 10)
            let rest = num % 10
            return twentyToNinety[position] + ' e ' + unidade(rest)
        }
    }

    function centenas(num) {
        let hundredPositon = Math.trunc(num / 100)
        let tenPosition = num % 100
        let unitPosition = tenPosition % 10
        let oneHundredToNineHundred = ['', 'cem', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seicentos', 'setecentos', 'oitocentos', 'novecentos']
        if ((num % 100) === 0) {
            return oneHundredToNineHundred[hundredPositon]
        } else if (tenPosition < 10) {
            if (hundredPositon === 1) {
                return 'cento e ' + unidade(unitPosition)
            } else {
                return oneHundredToNineHundred[hundredPositon] + ' e ' + unidade(unitPosition)
            }
        } else {
            if (hundredPositon === 1) {
                return 'cento e ' + dezenas(tenPosition)
            } else {
                return oneHundredToNineHundred[hundredPositon] + ' e ' + dezenas(tenPosition)
            }
        }
    }

    number.addEventListener('input', function () {
        chosenNumber.value = this.value
        if (this.value <= 9) {
            numberFull.value = unidade(this.value).toUpperCase()
            console.log(numberFull)
        } else if (this.value <= 99) {
            numberFull.value = dezenas(this.value).toUpperCase()
        } else {
            numberFull.value = centenas(this.value).toUpperCase()
        }
    })
}