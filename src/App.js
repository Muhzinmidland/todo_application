import logo from './logo.svg';
import './App.css';
import Addtodo from './components/Addtodo';
import Listtodo from './components/Listtodo';
import { useState } from 'react';

function App() {
  const [uploadTodoStatus, setUploadTodoStatus] = useState({})
  return (
<div className=' pt-5 pb-5' style={{backgroundImage:'url("https://images.pexels.com/photos/2736499/pexels-photo-2736499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
  <h2 className='text-center  fw-bold' style={{fontFamily:'-moz-initial', color:'#b8997a'}}>TO DO APPLICATION</h2>
    <div className='d-flex justify-content-evenly align-items-center' >
      <div >
        <Addtodo setUploadTodoStatus={setUploadTodoStatus} />
      </div>
      <div>
        <Listtodo uploadTodoStatus={uploadTodoStatus} />
      </div>
    </div>
    </div>
  );
}

export default App;
