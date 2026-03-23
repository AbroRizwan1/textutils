import React from 'react';

export default function Practice(props) {

    return (

        <>
            <div className="card" >
                <img className="card-img-top" src="..." alt="Card image cap" />
                <div className="card-body">
                    <h3>{props.cardHeading}</h3>
                    <p className="card-text">{props.desc}.</p>
                </div>
            </div>

        </>
    )

}



