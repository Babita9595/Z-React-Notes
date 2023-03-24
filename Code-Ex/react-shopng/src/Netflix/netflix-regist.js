
export function NetflixRegister(){
    return(
           <div className=" register-box">
           <p>Ready to watch? Enter your email to create or restart your membership.</p>
            
        <div className="input-group ">
            <input className="inputbox w-50" type="email"  />
           <button className="btn btn-danger">
            Register<span className=" bi-chevron-right"></span>
           </button>
        </div>
        </div>
    )
}