import React, { useState } from 'react';
import TopForm from './TopForm';
import TaskItems from './TaskItems';
import { Testcontext } from './Context';

const App = () => {

    const [Array, setArray] = useState([
        {
            id: "1",
            title: "کار شماره 1",
            done: false
        },
        {
            id: "2",
            title: "کار شماره 2",
            done: true
        }
    ])

    return (
        <div className="container w-100 h-100 p-3">
            <div className="row h-100 justify-content-center align-align-items-start">
                <div className="col-12 col-md-8 col-lg-6 bg-light shadow rounded-3 p-3 h_fit">
                    <Testcontext.Provider value={{Array:Array,setArray:setArray}}>

                    <TopForm />
                    <TaskItems />
                    </Testcontext.Provider>
                </div>
            </div>
        </div>
    )
}


export default App;
