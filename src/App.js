import ExpenseItem from "./Components/ExpenseItem";
import Home from "./Components/Home";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import UserContextProvider from "./Context/UserContextProvider";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
         <Route path='/Login' element={<Login />} />
       <Route path='/SignUp' element={<SignUp />} />
       <Route path='/Expense/:id' element={<ExpenseItem />} />
        {/* <Route path='/' element={<ProtectedRoutes />}>
          <Route path='/Expense/:id' element={<ExpenseItem />} />
        </Route>
        <Route path='*' element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
    </UserContextProvider>
  
  );
}

export default App;
