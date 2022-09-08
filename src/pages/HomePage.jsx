import React from "react";

const HomePage = () =>{
    return(
        <>
            <p>Hello world</p>
            <input type={"file"} accept={"jpg/png"} capture="camera"/>
            <input accept={"image/*"} id="icon-button-file" type="file" capture="environment"/>
        </>


    )
}
export default  HomePage;