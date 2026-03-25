import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

const DashBoard = lazy(() => import("./pages/Dashboard"));
const SendMoney = lazy(() => import("./pages/SendMoney"));
const Signup = lazy(() => import("./pages/Signup"));
const Signin = lazy(()=> import('./pages/Signin'));

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/signup" element={<Signup />}></Route>
              <Route path="/signin" element={<Signin />}></Route>
              <Route path="/dashboard" element={<DashBoard />}></Route>
              <Route path="/send-money" element={<SendMoney />}></Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
