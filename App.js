import React from "react";
import ReactDOM from "react-dom/client";

const mainRoot = document.getElementById("root");
const mainDom = ReactDOM.createRoot(mainRoot);


const App = function () {
    return (
        <>
            <h1>Hello World</h1>

            <p>Hello Naveen</p>
        </>
    );
};

mainDom.render(<App />);