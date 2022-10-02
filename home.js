import React from "react";

const Home = () => {

    return(

        <div className="container-fluid bg-info mt-3">
            <h1 className="bg-success p-3">That is My First React with Bootstrap </h1>
           <div className="row">
                <div className="col-md-3">
                    <div className="card mb-2">
                        <div className="card-header bg-warning"><h3>That is First Card</h3></div>
                            <div className="card-body">
                                <p>
                                    These letter from card Body
                                </p>
                                <div className="card-text bg-dark text-white mb-2">Price : 3000 K</div>
                            </div>
                    </div>
                </div>
                <div className="col-md-3"><div className="card mb-2">
                        <div className="card-header bg-warning"><h3>That is First Card</h3></div>
                            <div className="card-body">
                                <p>
                                    These letter from card Body
                                </p>
                                <div className="card-text bg-dark text-white mb-2">Price : 3000 K</div>
                            </div>
                    </div></div>
                <div className="col-md-3"><div className="card mb-2">
                        <div className="card-header bg-warning"><h3>That is First Card</h3></div>
                            <div className="card-body">
                                <p>
                                    These letter from card Body
                                </p>
                                <div className="card-text bg-dark text-white mb-2">Price : 3000 K</div>
                            </div>
                    </div></div>
                <div className="col-md-3"><div className="card mb-2">
                        <div className="card-header bg-warning"><h3>That is First Card</h3></div>
                            <div className="card-body">
                                <p>
                                    These letter from card Body
                                </p>
                                <div className="card-text bg-dark text-white mb-2">Price : 3000 K</div>
                            </div>
                    </div></div>
           </div>
        </div>
       

    )


}

export default Home