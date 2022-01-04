import {useState} from 'react';

function Condicional() {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e){
        e.preventDefault()
        console.log('TESTANDO')
        setUserEmail(email)
    }

    function limpaEmail(e){
        setUserEmail('')
    }
    

    return ( 
        <div>
            <h2>Cadastre o seu e-mail</h2>
            <form>
                <input type="email" placeholder='Digite o seu e-mail...' onChange={(e) => setEmail(e.target.value)}/>
                <button type="submit" onClick={enviarEmail}>Enviar e-mail</button>
                {userEmail &&(
                    <div>
                        <p>O email do usuario é: {userEmail}</p>
                        <button onClick={limpaEmail}>Limpar</button>
                    </div>
                )}
            </form>
        </div>
     );
}

export default Condicional;