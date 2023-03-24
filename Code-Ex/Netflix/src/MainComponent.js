import { RegisterComponent } from "./RegisterComponent"

export function MainComponent(){ //here we use export function so need to import component
    return(
        <main>
            <div>
                <h1>Unlimited movies, TV shows and more.</h1>
                <p>Watch anywhere. Cancel anytime.</p>
                <RegisterComponent />
            </div>
        </main>
    )
}