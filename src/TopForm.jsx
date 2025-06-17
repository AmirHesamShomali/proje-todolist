import React, { useContext, useState } from 'react';
import { Testcontext } from './Context';

const TopForm = ()=>{
    const[task,settask]=useState("")
    const{Array,setArray}=useContext(Testcontext)
    const handeltask=(e)=>
    {
        settask(e.target.value)
        
    }

    const Addtask=(e)=>
    {
        e.preventDefault()

        setArray([...Array,{id:Math.random(),title:task,done:false}])

    }
    return(
        <>
            <h4 className="text-center text-info text_shdow">به پروژه من  خوش اومدید</h4>
            <form>
                <div className="form-group d-flex">
                    <input type="text" className="form-control" value={task} onChange={handeltask}  />
                    <button type="submit" className="btn btn-success me-1" onClick={Addtask}>ثبت</button>
                </div>
            </form>
        </>
    )
}

export default TopForm;