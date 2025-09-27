import { useState } from "react";
import useFetch from "../hooks/useFetch";
import OurStoryDiv from "./OurStoryDiv";

const OurStory = () => {
    const [url, setUrl] = useState('https://swapi.dev/api/planets');
    let arr = useFetch(url);

    return (
        <div className="tabs-content" id="our-story">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <div className="wrapper">
                            <section id="first-tab-group" className="tabgroup">
                                {arr.map((el, i) => <OurStoryDiv key={i} id={`tab${i + 1}`} src={`img/${i + 1}nd-tab.jpg`} text={el} />)}
                            </section>
                            <ul className="tabs clearfix" data-tabgroup="first-tab-group">
                                <li><a onClick={() => setUrl('https://swapi.dev/api/people')} href="#tab1" className="active">2008 - 2014</a></li>
                                <li><a onClick={() => setUrl('https://swapi.dev/api/films')} href="#tab2">2014 - 2016</a></li>
                                <li><a onClick={() => setUrl('https://swapi.dev/api/species')} href="#tab3">2016 - 2019</a></li>
                                <li><a onClick={() => setUrl('https://swapi.dev/api/starships')} href="#tab4">2019 - Now</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default OurStory;