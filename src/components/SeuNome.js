function SeuNome( {setNome} ) {
    return ( 
        <div>
            <p>Digite seu nome</p>
            <input 
            type="text" 
            placeholder="Qual seu nome?" 
            onChange={(e) => setNome(e.target.value)}
            />
        </div>
     );
}

export default SeuNome;

// const [nome, setNome] = useState() - colocar no app.js para funcionar