import React from 'react'

function Error404() {


    const style = {
        textAlign:"center",
        fontSize:"35px",
        marginTop:"50px",
        color : "gray"
    }
    return (
        <div>
            <p style={style}>404 Page not Found</p>
        </div>
    )
}

export default Error404;