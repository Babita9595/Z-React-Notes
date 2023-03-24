import { HeaderComponent } from "./HeaderComponent"
import { MainComponent } from "./MainComponent"

export function IndexComponent(){            //function is not access by outside thats why we use export keyword
    return(
        <div className="netflix-back">
          <section>
             <HeaderComponent />  
             <MainComponent />
          </section>
        </div>
    )
}

//these two component is here but we have to import this first