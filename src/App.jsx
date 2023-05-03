
import './App.css';
import { Routes , Route  } from 'react-router-dom';
import Edit from './Components/Edit';
import Create from './Components/Create';
import Contact from './Components/Contact';

function App() {
  return (
   <div className='container mx-auto gap-4 p-10'>

<div className='mb-4'>

<Routes >
    <Route path='/' element={<Contact></Contact>} />
      <Route path='/edit/:id' element={<Edit></Edit>} />
      <Route path='/create' element={<Create></Create>} />
    </Routes>
</div>
    

   </div>
  );
}

export default App;
