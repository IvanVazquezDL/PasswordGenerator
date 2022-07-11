
const CheckBox = (props) => {
    function configurationHandler(event) {
        props.onCheck(event.target.checked, event.target.id);
    }
    return(
    <div className="form-check pt-4" onClick={configurationHandler}>
        <input className="form-check-input" type="checkbox" value="" id={props.id}/>
        <label className="form-check-label">{props.text}</label>
    </div>
    );

}

export default CheckBox;