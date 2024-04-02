import {Outlet, Link} from 'react-router-dom';

const Aboutpage = () => {
    return (
        <>
         <div>
            <h1>About us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ullam debitis qua
                s eaque repudiandae. Nobis, cumque, aliquam consequuntur ab illo magni a sapiente
                 excepturi vitae unde expedita sint necessitatibus velit.</p>
                 <ul>
                    <li><Link to="contact" > OUR contact</Link></li>
                    <li><Link to="team" >OUR team</Link></li>
                 </ul>
                 {/* outlet - в каком месте мы хотим разместить вложенный компонент */}
                 <Outlet/>

        {/* <Routes>
            <Route path='contact' element={<p>Our contact</p>}/>
            <Route path='team' element={<p>Our team </p>}/>
        </Routes> */}
           
        </div>
        
        </>
       
    );
}

export default Aboutpage;
