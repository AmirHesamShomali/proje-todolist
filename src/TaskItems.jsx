import React, { useContext } from 'react';
import { Testcontext } from './Context';

const TaskItems = () => {
    const { Array, setArray } = useContext(Testcontext)
    const handeldelete=(id)=>
    {
        setArray(Array.filter(t=>t.id!=id))
    }
    const handelchange=(id)=>
    {
        const index=Array.findIndex(i=>i.id==id)
        let newArray=[...Array]
        newArray[index].done=!newArray[index].done
        setArray(newArray)
    }
    if(Array.length)
    {
        
    return (
        <ul className="list-group m-0 p-0 mt-2">
            {Array.map((c) => (
                <li className={`list-group-item d-flex justify-content-between ${c.done==true?"list-group-item-success":""} `}
                //  style={{background:c.done==true?"#90EE90":""}}
                  >

                    {c.title}

                    <span>
                        {
                            c.done==false?(

                                <i className="me-3 pointer fas fa-check text-success transition_200 text_hover_shadow" onClick={()=>handelchange(c.id)}></i>
                            ):(

                                <i className="me-3 pointer fas fa-times text-warning transition_200 text_hover_shadow" onClick={()=>handelchange(c.id)}></i>
                            )
                        }
                        <i className="me-3 pointer fas fa-trash text-danger transition_200 text_hover_shadow"onClick={()=>handeldelete(c.id)}></i>




                    </span>




                </li>
            ))}



        </ul>
    )
}
else
{
    return(
        <h2 className='text-center text-danger'> 
            هیچ کاری وجود ندارد
        </h2>
    )
}
}

export default TaskItems;