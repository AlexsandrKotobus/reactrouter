import {useState} from 'react';




const BlogFilter = ({postQuery, latest, setSearchParams }) => {
const [search, setSearch] = useState(postQuery); //зависит от postQuery
const [checked, setChecked] = useState(latest); //зависит от latest

    const handlerSubmit =(e) => {
        e.preventDefault();
        const form = e.target;
        const query = form.search.value; 
        console.log('query = ',query);
        const isLatest = form.latest.checked;
    
        const params ={} //пустой объект для параметров
        if(query.length) params.post = query;  //параметр поиска, что ввел пользователь в поиск
        if(isLatest) params.latest = true;
        setSearchParams(params);
    
    }
    return (
        <div>
            <form autoComplete='off' onSubmit={handlerSubmit}>
                {/* значение value зависит от searchб value={search}  */}
                {/* и обновляем значение value */}
                <input type='search' name='search' value={search} onChange={e => setSearch(e.target.value)} />
                <label style={{padding: '0.1rem'}}>
                    <input type='checkbox' name='latest' checked={checked} onChange={e => setChecked(e.target.checked)}/> New only
                </label>
                <input type='submit' value='Search'/>
            </form>
            
        </div>
    );
}

export default BlogFilter;
