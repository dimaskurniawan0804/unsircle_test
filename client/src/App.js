import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import LoginPage from './views/LoginPage.jsx';
import RegisterPage from './views/RegisterPage';
import DashboardPage from './views/DashboardPage';
import AddItemPage from './views/AddItemPage'
import ItemDashboard from './views/ItemDashboard'
import UpdateItemPage from './views/UpdateItemPage'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/" element={<DashboardPage />}></Route>
        <Route path="/addItem" element={<AddItemPage />}></Route>
        <Route path="/allItem" element={<ItemDashboard />}></Route>
        <Route path="/updateItem/:itemId" element={<UpdateItemPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
