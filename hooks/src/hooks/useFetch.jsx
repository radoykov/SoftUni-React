import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [result, setResult] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                const apiData = data.results.reduce((arr, obj) => {
                    const [key, value] = Object.entries(obj)[0];
                    arr.push(value);
                    return arr;

                }, []);
                setResult(apiData);
            })
            .catch(err => console.log(err))
    }, [url]);

    return result;
}

export default useFetch;