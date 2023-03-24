export function DataBinding3()
{
     var categories = ["Electronics", "Footwear", "Fashion"];
     return(
        <div className="container-fluid">
            <h2>Categories</h2>
            <ul className="list-unstyled">
                {
                    categories.map((category)=>
                     <li><a href="#">{category}</a></li>
                    )
                }
            </ul>

           <ol className="list-unstyled">
              
              {
                categories.map((category) => 
                
                <li><input type="checkbox"/>{category}</li>

                )
              }
           </ol>



           <ol>
                {
                    categories.map((category)=>
                        <li>{category}</li>
                    )
                }
            </ol>
            <select>
                {
                    categories.map((category)=>
                      <option>{category}</option>
                    )
                }
            </select>


            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Categories</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        categories.map((category)=>
                          <tr>
                            <td>{category}</td>
                          </tr>
                        )
                    }
                </tbody>
            </table>

         </div>
     )
 }           