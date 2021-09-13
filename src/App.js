import React from 'react';


const App = () =>{
    return (<div className= "container">
        <div className="valid-keys">
            <span className="matched">ednal</span>
            <span className="remainder">do pereira</span>
        </div>
        <div className="typed-keys">asdfednalewq</div>
        <div className="completed-words">
            <ol>
                <li>Macaco cidadão</li>
                <li>Neemias</li>
                <li>Torebas</li>
            </ol>
        </div>
    </div>)
}

export default App;