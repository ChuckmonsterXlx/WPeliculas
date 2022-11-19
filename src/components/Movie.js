import React from 'react';

const Movie = (props) => {
    return (
        <div className="col s12 m6 l3">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    {
                        props.image == null ? <img src={`https://sm.ign.com/ign_latam/news/s/spider-man/spider-man-remastered-is-playstation-studios-second-biggest_drr8.jpg`} alt="" style={{width: "100%", height: 360}} /> : <img src={`https://image.tmdb.org/t/p/w500${props.image}`} alt="" style={{width: "100%", height: 360}} />
                    }
                </div>
                <div className="card-content">
                    <p><a href="#">View details</a></p>
                </div>
            </div>
        </div>
    )
}

export default Movie;