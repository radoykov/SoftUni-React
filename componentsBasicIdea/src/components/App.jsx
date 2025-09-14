import { Nav } from './Navigation'
import { Footer } from './Footer'
import { Pages } from './Pages/Pages'
import { useState } from 'react';

export const App = () => {
    const [currPage, setCurrPage] = useState(1);

    return (
        <>
            <Nav setter={setCurrPage} />
            <Pages currPage={currPage} />
            <Footer />
        </>
    );
}