var numerador = 1; //Variavel pra distinguir os input

//Verificando se existe algum dado para adicionar
function add(){
    let input = document.querySelector('#task').value
    if(input == ''){
        alert('Por favor, preencha o campo!')
    }
    else{
      proceed(input)  
    }
}

//Adicionando tarefa na lista
function proceed(input){
    let conjunto = document.querySelector('#alltasks')

    //Criando os elementos para adicionar a tarefa
    let div = document.createElement('div')
    div.classList = `task_structure num${numerador}`
    let checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.name = `task${numerador}`
    checkbox.id = `task${numerador}`
    checkbox.setAttribute('onclick', `marcar(${numerador})`)
    let label = document.createElement('label')
    label.htmlFor = `task${numerador}`
    label.innerText = input
    let hr = document.createElement('hr')
    hr.classList = `num${numerador}`
    let div_two = document.createElement('div')
    div_two.appendChild(checkbox)
    div_two.appendChild(label)
    div.appendChild(div_two)
    let icone = document.createElement('i')
    icone.classList = 'fa-regular fa-trash-can'
    icone.setAttribute('onclick', `apagar(${numerador})`)
    div.appendChild(icone)
    //Adicionando na lista
    conjunto.appendChild(div)
    conjunto.appendChild(hr)

    //Mudando Numerador e limpando o input
    numerador ++
    let inpt = document.querySelector('#task')
    inpt.value = ''
    inpt.focus()

    //Alterando remaining
    let remaining = document.querySelector('#remaining')
    remaining.innerText = `${numerador-1} tasks remaining`
}

//Pra confirmar input com enter
function enter(e){
    if(e.key === 'Enter'){
        let btn = document.querySelector('#addtask')
        btn.click()  
    }
}

//Alterando a quantidade de tarefas restantes
function marcar(numero){
    let tarefa = document.querySelector(`#task${numero}`)
    if(tarefa.checked){
        let remaining = document.querySelector('#remaining')
        numerador --
        remaining.innerText = `${numerador-1} tasks remaining`
    }else{
        let remaining = document.querySelector('#remaining')
        numerador ++
        remaining.innerText = `${numerador-1} tasks remaining`
    }
}

//Removendo Task e hr
function apagar(numero){
    //Verificando se vai ser preciso alterar o número de tarefas restantes
    let tarefa = document.querySelector(`#task${numero}`)
    if(tarefa.checked === false){
        let remaining = document.querySelector('#remaining')
        numerador --
        remaining.innerText = `${numerador-1} tasks remaining`
    }
    //Apagando
    let lista = document.querySelector(`div.num${numero}`)
    let hr = document.querySelector(`hr.num${numero}`)
    lista.remove()
    hr.remove()
}