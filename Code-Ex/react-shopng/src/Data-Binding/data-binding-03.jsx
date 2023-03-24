export function DataBinding03(){
    
    let Categories = ["electronics" , "footwear" , "fashion"];
   
    return(
       <div className="container">
          <h1>Categories</h1>
         
          <ul>
            { //binding start by cerly bracket
             Categories.map( item  => 
              
             <li ><a href="#">{item}</a></li>
           )
            }
          </ul>


          <ul className="list-unstyled">
                {
                    Categories.map((item)=>
                     <li><input type="checkbox"/> {item}</li>
                    )
                }
            </ul>


            <ol>
                {
                    Categories.map((item)=>
                        <li>{item}</li>
                    )
                }
            </ol>


            <select>
                {
                    Categories.map((item)=>
                      <option>{item}</option>
                    )
                }
            </select>

   <table className="table-hover border-2 mt-4">
   <thead >
                    <tr >
                        <th>product</th>
                       
                    </tr>
                </thead>

       <tbody>
          {
            Categories.map((item) =>
              
            
            <tr >
            <td>{item}</td>
            
            </tr>
            )

          }


         
       </tbody>
   </table>

       </div>

   )


}