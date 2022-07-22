import './App.css';
import SideBar from './components/SideBar';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import Profile from './components/Profile';
import Account from './components/Account';
function App() {
  let data={
    monthly:40000,
    yearly:480000,
    task:50,
    pending:18
  }
  return <>
  <div id="wrapper">
    <BrowserRouter>
      <SideBar/>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content"> 
          <Routes>
            <Route path='/dashboard' element={<Dashboard data={data}/>}>
              <Route path='profile' element={<Profile/>}/>
              <Route path='account' element={<Account/>}/>
            </Route>
            <Route path='/add-user' element={<CreateUser data={data}/>}/>
            <Route path='/edit-user/:id' element={<EditUser data={data}/>}/>
            <Route path='*' element={<Navigate to='/dashboard'/>}/>
          </Routes> 
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
    
  </div>
  </>
}

export default App;
