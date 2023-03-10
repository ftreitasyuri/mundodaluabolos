import './Corpo.css';
import { useState } from 'react';

function Corpo() {


    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")
    const [descricao, setDescricao] = useState("")



    function handleChange(e) {
        return (
            e.preventDefault(),
            console.log(nome, email, telefone, descricao)

        )

    }

    // Limpando os inpus
    function limpaCampos() {

        
        let v1 = document.getElementById('nome').value
        let v2 = document.getElementById('email').value
        let v3 = document.getElementById('telefone').value
        let v4 = document.getElementById('descricao').value
        let valor =[`${v1}`, `${v2}`, `${v3}`, `${v4}`]

        let inc = 0
        while(inc <= 3){      

        if (valor[inc] === false) {
            alert(`Verifique o formulário, há campos não preenchidos`)
            break            
        }
        inc++
        
        }
        document.getElementById('nome').value=''
        document.getElementById('email').value=''
        document.getElementById('telefone').value=''
        document.getElementById('descricao').value=''
        alert('Formulário enviados')

    }

    return (
        <div id="corpoForms">

            <div id="latealEsquerda">
                <div id="destaquePag">
                    <p>Clique aqui para conferir nossas promoções de pascoa</p>
                </div>
            </div>


            <div id="latealDireita">
                <section>
                    <form action="" onSubmit={handleChange}>


                        <h2>Faça já seu orçamento</h2>

                        {/* <p className="ParaG">Nome</p> */}
                        <input className="Inputar"
                            type="text"
                            placeholder="Nome"
                            value={nome}
                            id="nome"
                            onChange={(e) => setNome(e.target.value)}
                        />

                        {/* <p className="ParaG">Email</p> */}
                        <input className="Inputar"
                            type="text"
                            placeholder="E-mail"
                            value={email}
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        {/* <p className="ParaG">Telefone</p> */}
                        <input 
                            className="Inputar"
                            type="text"
                            maxLength={11}
                            placeholder="Telefone"
                            value={telefone}
                            id="telefone"
                            onChange={(e) => setTelefone(e.target.value)}
                        />

                        {/* <p className="ParaG" >Descrição</p> */}
                        <textarea cols="30" rows="10"
                            className="Inputar"
                            type="text"
                            placeholder="Descrição"
                            value={descricao}
                            id="descricao"
                            onChange={(e) => setDescricao(e.target.value)}
                        ></textarea>

                        <button onClick={limpaCampos} id="botaoEnviar" type="submit">Enviar</button>
                    </form>

                </section>

            </div>

        </div>
    )

}

export default Corpo