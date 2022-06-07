import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import { RequireAuth } from './auth'
import { RequireNoAuth } from './auth'
import LoginPage from './views/LoginPage.jsx';
import RegisterPage from './views/RegisterPage';
import DashboardPage from './views/DashboardPage';
import AddItemPage from './views/AddItemPage'
import ItemDashboard from './views/ItemDashboard'
import UpdateItemPage from './views/UpdateItemPage'
import CompanyDashboard from './views/CompanyDashboard';
import AddCompanyPage from './views/AddCompanyPage'
import UpdateCompanyForm from './views/UpadateCompanyPage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<RequireNoAuth><LoginPage /></RequireNoAuth>}></Route>
        <Route path="/register" element={<RequireNoAuth><RegisterPage /></RequireNoAuth>}></Route>
        {/* <Route path="/" element={<DashboardPage />}></Route> */}
        <Route path="/addItem" element={<RequireAuth><AddItemPage /></RequireAuth>}></Route>
        <Route path="/allItem" element={<RequireAuth><ItemDashboard /></RequireAuth>}></Route>
        <Route path="/updateItem/:itemId" element={<RequireAuth><UpdateItemPage /></RequireAuth>}></Route>
        <Route path="/company" element={<RequireAuth><CompanyDashboard /></RequireAuth>}></Route>
        <Route path="/addCompany" element={<RequireAuth><AddCompanyPage /></RequireAuth>}></Route>
        <Route path="/updateCompany/:companyId" element={<RequireAuth><UpdateCompanyForm /></RequireAuth>}></Route>
      </Routes>
    </div>
  );
}

export default App;
