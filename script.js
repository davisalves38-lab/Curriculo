async function carregarPessoa(david) {
    const response = await fetch('pessoa.json');
    const dados = await response.json();
    const pessoa = dados[david];

    document.getElementById('nomeCompleto').textContent = pessoa.nome;
    document.getElementById('nome').textContent = pessoa.nome;
    document.getElementById('foto').src = pessoa.foto;
    document.getElementById('nascimento').textContent = pessoa.nascimento;
    document.getElementById('email').textContent = pessoa.email;
    document.getElementById('telefone').textContent = pessoa.telefone;

    document.getElementById('linkedin').href = pessoa.linkedin;
    document.getElementById('github').href = pessoa.github;

    const listaConhecimento = document.getElementById('conhecimento');
    listaConhecimento.innerHTML = '';

    pessoa.conhecimento.forEach(c => {
        let li = document.createElement('li');
        li.innerText = c;
        listaConhecimento.appendChild(li);
    });
    
    const listaExperiencia = document.getElementById('experiencia');
    listaExperiencia.innerHTML = '';

    pessoa.experiencia.forEach(exp => {
        let div = document.createElement('div')

        div.innerHTML = `
        <p><b>${exp.cargo}</b></p>
        <p>${exp.empresa}</p>
        <p>${exp.descricao}</p>
        <p>${exp.inicio} - ${exp.fim}</p>
        <hr>
        `
        listaExperiencia.appendChild(div)
        
    });

    const listaFormacao = document.getElementById('listaFormacao');
    listaFormacao.innerHTML = "";

    pessoa.formacao.forEach(f => {
        let div = document.createElement('div');
        div.innerHTML = `
            <p><b>${f.curso}</b></p>
            <p>${f.instituicao}</p>
            <p>${f.inicio} - ${f.fim}</p>
            <hr>
        `;
        listaFormacao.appendChild(div);
    });
}