function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('por favor, digite um número')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = '' /* serve para limpar antes do próximo resultado */
        while (c <=10) {
            let item = document.createElement('option')
            item.text = `${n} * ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item) /* adicionando a equação dentro da área da tabuada */
            c++
        }
    }
}