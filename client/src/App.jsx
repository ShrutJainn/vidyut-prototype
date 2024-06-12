import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CitiesProvider } from "./contexts/CitiesContext";
import { Suspense, lazy } from "react";
import { RecoilRoot } from "recoil";
import Form from "./components/Form";
import SpinnerFullPage from "./components/SpinnerFullPage";
import StreetDetails from "./pages/StreetDetails";
import Donation from "./pages/Donation";
import Intensity from "./pages/Intensity";
// import AuthPage from "./pages/AuthPage";

// import Product from "./pages/Product";
// import Pricing from "./pages/Pricing";
// import Homepage from "./pages/Homepage";
// import PageNotFound from "./pages/PageNotFound";
// import AppLayout from "./pages/AppLayout";
// import Login from "./pages/Login";

const Homepage = lazy(() => import("./pages/Homepage"));
const AppLayout = lazy(() => import("./pages/AppLayout"));

function App() {
  return (
    // <AuthProvider>
    <RecoilRoot>
      <CitiesProvider>
        <Suspense fallback={SpinnerFullPage}>
          <BrowserRouter>
            <Routes>
              {/* <Route index element={<Homepage />} />
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="cities" />} />

                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
              </Route>
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<PageNotFound />} /> */}
              {/* <Route path="/auth" element={<AuthPage />} /> */}
              <Route path="/" element={<Homepage />} />
              <Route path="/app" element={<AppLayout />}>
                <Route path="form" element={<Form />} />
              </Route>
              <Route path="/street" element={<StreetDetails />} />
              <Route path="/donate" element={<Donation />} />
              <Route path="/intensity" element={<Intensity />} />
            </Routes>
          </BrowserRouter>
        </Suspense>
      </CitiesProvider>
    </RecoilRoot>
    // </AuthProvider>
  );
}

export default App;
