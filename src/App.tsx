import React from 'react';
import "./styles/App.css"
import "./styles/tikstyles.css"
const App = () => {
    return (
        <div className="TodoApp h-100p f-c-col">
            <div className="container w-100p">
                <div className="TodoContent f-column gap-20">
                    <h1 className="TodoContentTitle ">Задачи</h1>
                    <div className="TodoBlock bg-white w-100p">
                    </div>
                </div>

            </div>
        </div>
    );
};

export default App;