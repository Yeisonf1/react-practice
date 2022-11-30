import React from "react";

    const nam = 'Rodolfo';
    const int = '?';
    
    const link = <a href="https://www.reactjs.org">Link to document</a>;
    const elementChildJavas = (<div>
        <h1>Titulo mas grande</h1>
        <h2>Titulo penultimo mas grande</h2>
    </div>)

    const elementCreate = React.createElement(
        'h1',
        {clasName:'greeting'},
        'Hola Create Element'

        )
function Solo(){
    const element = <h1>Holas {nam}, como has estado{int}</h1>;
    
    return(
        <div>{link}
        <div> {element}</div>
        {elementChildJavas}
        {elementCreate}
        </div>
        
    
    )


         
    
}


export default Solo;