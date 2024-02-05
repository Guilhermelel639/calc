document.querySelector("#mais").addEventListener('click',()=>{
    let num1 = document.querySelector("#num1");
    let num2 = document.querySelector("#num2");
    let num3 = document.querySelector("#num3");
 
    num3.value = parseFloat(num1.value) + parseFloat(num2.value)
    num2.value = ""
    num1.value = ""


    console.log(num2.value);
})

document.querySelector("#menos").addEventListener('click',()=>{
    let num1 = document.querySelector("#num1");
    let num2 = document.querySelector("#num2");
    let num3 = document.querySelector("#num3");
 
    num3.value = parseFloat(num1.value) - parseFloat(num2.value)
    num2.value = ""
    num1.value = ""


    console.log(num2.value);
})

document.querySelector("#vezes").addEventListener('click',()=>{
    let num1 = document.querySelector("#num1");
    let num2 = document.querySelector("#num2");
    let num3 = document.querySelector("#num3");
 
    num3.value = parseFloat(num1.value) * parseFloat(num2.value)
    num2.value = ""
    num1.value = ""


    console.log(num2.value);
})

document.querySelector("#dividido").addEventListener('click',()=>{
    let num1 = document.querySelector("#num1");
    let num2 = document.querySelector("#num2");
    let num3 = document.querySelector("#num3");
 
    num3.value = parseFloat(num1.value) / parseFloat(num2.value)
    num2.value = ""
    num1.value = ""


    console.log(num3.value);
})

document.querySelector("#salvar").addEventListener('click', ()=>{
    if (document.querySelector('#num3').value == "") {
        alert("não ah nenhum resultado")
    }
    else{
    fetch("http://localhost:3000/novo", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            "resultado": document.querySelector('#num3').value
        }),
        
    });
    }
})

document.querySelector("#mostrar").addEventListener('click',()=>{
    fetch('http://localhost:3000/todos').then((resposta)=>{
        resposta.json().then((data)=>{
            document.querySelector("#conteudo").innerHTML = data
        })
    })
})

document.querySelector("#deletar").addEventListener('click', ()=>{
    fetch('http://localhost:3000/apagar', {
        method: "DELETE"
    },
    )
})
