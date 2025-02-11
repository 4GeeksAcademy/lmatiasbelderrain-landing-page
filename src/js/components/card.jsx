import React from "react";

const Card = () => {
    return (
        <>
            {/* style={{marginRight: spacing + 'em'}} */}
            <div className="card mt-4" style={{ width: "18rem" }}>
                <img src="https://th.bing.com/th/id/R.fb53d42cf7b4678c61b5df9ab7cfdcca?rik=q%2fB%2b%2bKfVro3HHQ&riu=http%3a%2f%2f2.bp.blogspot.com%2f-pgjjn9bZCl0%2fT0f766jh7iI%2fAAAAAAAAxVI%2fhYexk8ES5ns%2fs1600%2fmascotas-perritos-cute-dogs.jpg&ehk=DZihTOkTlagsgJMarCwAFxEPJiaC%2bOB6C%2bVuvH00ojI%3d&risl=&pid=ImgRaw&r=0" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    )
}
export default Card