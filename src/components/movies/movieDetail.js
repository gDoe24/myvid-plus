import React, {useEffect} from "react";

function MovieDetail({ match }){

    useEffect(() => {
        console.log(match);
    }, [])

    return (
        <h1>Movie Detail</h1>
    )
};

export default MovieDetail;