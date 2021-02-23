import React, { useEffect } from "react";
import '../../styles/detail.css';

function TvDetail({ match }){
    
    useEffect(() => {
        console.log(match);
    }, [])

    return (
        <h1>TV Detail</h1>
    )
};

export default TvDetail;