// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Login from './components/Login';
// import SignUp from './components/Sigup';
// import Error from './components/Error';

// import { Route } from 'react-router-dom';
// import ProtectedRoutes from './Services/ProtectedRoutes';

// const root = ReactDOM.createRoot(document.getElementById('root'));

// let allRouters  = createBrowserRouter(
//   [
//     {
//       path: '/',
//       element: <Login />
//     },
//     {
//       path: '/Home/:id',
//       element: <App />
//     },
//     {
//       path: '/Signup',
//       element: <SignUp />
//     },
//     {
//       path: '*',
//       element: <Error />
//     },

//   ]
// )



// root.render(
//   <React.StrictMode>
//   <RouterProvider router= {allRouters} />
//     {/* <App /> */}
//   </React.StrictMode>
// );


// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Error from './components/Error';
import SignUp from './components/Signup';
import ExpenseItem from './components/ExpenseItem';
import ProtectedRoutes from './Services/ProtectedRoutes';
// import ProtectedRoutes from './Services/ProtectedRoutes';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/Login' element={<Login />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/' element={<ProtectedRoutes />}>
          <Route path='/Home/:id' element={<ExpenseItem />} />
        </Route>
        <Route path='*' element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





