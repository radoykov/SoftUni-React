import { Route, Routes, useParams } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const MasterAboutPage = lazy(() => import("./AboutPage/MasterAboutPage"));
const MasterContactPage = lazy(() => import("./ContactPage/MasterContactPage"));
const MasterHomePage = lazy(() => import("./HomePage/MasterHomePage"));
const MasterPricingPage = lazy(() => import("./PricingPage/MasterPricingPage"));
const MasterWorkPage = lazy(() => import("./WorkPage/MasterWorkPage"));
const MasterWorkSinglePage = lazy(() => import('./WorkSinglePage/MasterWorkSinglePage'));

function AdditionalPage() {
    const { additional } = useParams();
    return additional ? <h2>{additional}</h2> : <MasterHomePage />;
}

const App = () => (
    <Routes>
        <Route
            path="/about"
            element={
                <Suspense fallback={<div>Loading...</div>}>
                    <MasterAboutPage />
                </Suspense>
            }
        />
        <Route
            path="/work"
            element={
                <Suspense fallback={<div>Loading...</div>}>
                    <MasterWorkPage />
                </Suspense>
            }
        />
        <Route
            path="/pricing"
            element={
                <Suspense fallback={<div>Loading...</div>}>
                    <MasterPricingPage />
                </Suspense>
            }
        />
        <Route
            path="/contact"
            element={
                <Suspense fallback={<div>Loading...</div>}>
                    <MasterContactPage />
                </Suspense>
            }
        />
        <Route
            path="/digital-marketing"
            element={
                <Suspense fallback={<div>Loading...</div>}>
                    <MasterWorkSinglePage />
                </Suspense>
            }
        />
        <Route
            path="/"
            element={<MasterHomePage />}
        />
        <Route
            path="/home/:additional?"
            element={<AdditionalPage />}
        />
    </Routes>
);

export default App;