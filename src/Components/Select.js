
const Select = (props) => {

    function configurationHandler(event) {
        const value = event.target.value;

        if (value !== 'Select password length') {
            props.onSelect(parseInt(value), 'length');
        }
    }

    return(
    <select className="form-select" aria-label="Default select example" onClick={configurationHandler}>
        <option>Select password length</option>
        {props.elements.map(element => <option key={element.toString()} value={element.toString()}>{element}</option>)}
    </select>
    );
}

export default Select;