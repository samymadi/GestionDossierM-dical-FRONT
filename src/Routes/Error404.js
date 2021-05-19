import {useEffect} from 'react'
import {useHistory} from 'react-router-dom'

function Error404() {

    const history = useHistory();

    useEffect(()=>{
        console.log(history);
    })

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