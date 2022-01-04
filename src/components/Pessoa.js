import './Pessoa.css';

function Pessoa({nome, idade, profissao, foto}) {
    return ( 
        <div className='QuadroDeInfo'>
            <img src={foto} className="" alt={nome}/>
            <h2>{nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </div>
     );
}

export default Pessoa;