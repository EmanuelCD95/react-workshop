import React from "react";

const Home = ({ counter, decrement, increment }) => (
    <div>
        <h1>Home works!</h1>
        <hr />
        <button type="button" class="btn btn-danger" onClick={increment}>+</button>
        <button type="button" class="btn btn-danger" onClick={decrement}>-</button>
        <pre class="bg-warning">{JSON.stringify(counter, null, 2)}</pre>
    </div>
);

export default Home;