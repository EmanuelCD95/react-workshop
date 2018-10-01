import React from "react";

import env from '@env';

const App = () => {
    console.log('env', env);
    return (
        <div>
            <h1>Hello, worlds!</h1>
        </div>
    )
};

export default App;