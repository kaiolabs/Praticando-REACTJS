function Salve({nome}) {

    function gerarSalve(algunNome){
        return `Salve ${algunNome}, tudo bem?`
    }

    return ( 
        <div>
           {nome && <p>{gerarSalve(nome)}</p>}
        </div>
     );
}

export default Salve;