import Item from "./Item";

function List() {
    return ( 
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca='Ferrari' lancamento={1985}/>
                <Item marca= 'Bugari' lancamento={1994}/>
                <Item marca='Fiat' lancamento={2003}/>
                <Item/>
            </ul>
        </>
     );
}

export default List;