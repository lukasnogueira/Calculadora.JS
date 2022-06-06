

var condicao = true
while (condicao == true) {
    var operador = parseInt(window.prompt('Escolha um operador:\n1 => Soma\n2 => Subtrair\n3 => Multplicar\n4 => Dividir\n5 => barskara'))
    if (operador > 0 && operador < 5) {
        var valor_1 = parseInt(window.prompt('Digite o primeiro valor da operação:'))
        var valor_2 = parseInt(window.prompt('Digite o segundo valor da operação'))

        var falha = false
        switch (operador) {
            case 1: var resultado = (valor_1 + valor_2)
                break
            case 2: var resultado = (valor_1 - valor_2)
                break
            case 3: var resultado = (valor_1 * valor_2)
                break
            case 4: var resultado = (valor_1 / valor_2)
                break
        }
        if (falha == false && isNaN(resultado) == false) {
            var test = resultado % 2
            if (test == 0) {
    
                window.alert(resultado + ' é par')
            }
            else {
                window.alert(resultado + ' é impar')
            }
        }
        else {
            window.alert('não é possivel realizar esta operação')
        }
    }
    else if (operador == 5) {
        falha = true
        var a = parseInt(window.prompt('Digite o valor de A'))
        var b = parseInt(window.prompt('Digite o valor de B'))
        var c = parseInt(window.prompt('Digite o valor de C'))
        
        if (isNaN(a) == false && isNaN(b) == false && isNaN(c) == false) {
            var delta = (b ** 2) - 4 * a * c
            if (delta > 0) {
                window.alert('Delta é maior que zero, possue duas raizes')
                var x_linhha = (-b + Math.sqrt(delta)) / 2 * a
                var x_2linhha = (-b - Math.sqrt(delta)) / 2 * a
                window.alert("x'=" + x_linhha + '\nx"=' + x_2linhha)
                falha = true
            }
            
            else if (delta == 0) {
                window.alert('se o delta é igual a zero\npossue uma raiz')
                var x_linhha = (-b + Math.sqrt(delta)) / 2 * a
                window.alert("x =" + x_linhha)
                falha = true
            }

            else if (delta < 0) {
                window.alert('não possue raizes, pertencentes aos numeros reais')
            }
            }

        else {
            falha = true
            window.alert('Não é possivel realizar esta operação')
        }
    }
    else {
        window.alert('não é possivel realizar esta operação')
    }
    condicao = window.confirm('deseja contunuar?')
}