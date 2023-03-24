import { NetflixHeader } from "./netflix-header";
import { NetflixMain } from "./netflix-main";
import { NetflixRegister } from "./netflix-regist";

import  "./netflix-index.css" //import css here

export function NetflixIndex(){ //this is main file of Netflix
    return(
        <div className="netflix-body">
          
          <div className="container">
            <header>
              <NetflixHeader/>
            </header>

            <section>
              <NetflixMain/>
              <NetflixRegister/>
            </section>
        </div>
          
        </div>
       
    )
}