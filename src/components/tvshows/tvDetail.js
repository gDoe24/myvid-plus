import React, { useEffect } from "react";

function TvDetail({ match }){
    
    useEffect(() => {
        console.log(match);
    }, [])

    return (
        <h1>TV Detail</h1>
    )
};

export default TvDetail;