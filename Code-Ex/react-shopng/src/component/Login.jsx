
import "./Login.css"
export function Login(){
    return(
        <div className="container-fluid">
         <form>
            <h1>
                User Login Page
            </h1>
            <dl>
                <dt>UserName</dt>
                <dd><input type="text" className="form-control"></input></dd>
               
               <dt>Password</dt>
               <dd><input type="password" className="form-conrols"></input></dd>
            </dl>
            <button className="btn btn-primary w-50">Register</button>
         </form>
        </div>
    )
}