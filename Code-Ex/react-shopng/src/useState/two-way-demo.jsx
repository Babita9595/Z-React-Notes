import {useState} from "react";


export  function Two_way_Demo(){


    const [userName,setName] = useState("babita");

    function nameChange(event){
        setName(event.target.value);
    }

    return(
        <div className="container-fluid">
             <input type="text" name={userName} onChange={nameChange}/>
        
            <p>hello ! {userName}</p>
        </div>

        
    )
}