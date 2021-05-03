import './Checkbox.css'

function Checkbox({children}) {
    return (
        <div>
            <input class="inp-cbx" id="cbx" type="checkbox" style={{display:'none'}}/>
            <label class="cbx" for="cbx"><span>
            <svg width="12px" height="10px" viewbox="0 0 12 10">
            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
            </svg></span><span>{children}</span></label>  
        </div>
    )
}

export default Checkbox
