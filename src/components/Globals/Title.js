import React from 'react'

export default function Title({title}) {
    return (
        <div className="row">
            <div className="col mb-3 text-right">
                <h1 className="display-4 text-capitalize font-weight-bold">
                    {title}
                </h1>
            </div>
            
        </div>
    )
}
