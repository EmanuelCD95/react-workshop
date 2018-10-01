import React from "react";
import ReactDOM from "react-dom";

import env from '@env';

const App = () =>
    console.log({env}) ||   // add
    (
        <div>
            <h1>Hello, worlds!</h1>
        </div>
    );

ReactDOM.render(<App />, document.getElementById("root"));