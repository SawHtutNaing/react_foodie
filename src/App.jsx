
import './App.css';
import { Routes , Route } from 'react-router-dom';
import Nav from './Nav';
import Details from './Details';
import Meals from './Meals'
function App() {
  return (
   <div className='container mx-auto gap-4 p-10'>
    <div>
      <Nav></Nav>
    </div>
    
<div>
  
<Routes>
<Route path="/" element={<Meals></Meals>}></Route>
<Route path='/details/:id' element={<Details></Details>}></Route>

</Routes>
</div>
   </div>
  );
}

export default App;
