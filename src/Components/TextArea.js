const TextArea = (props) => {
    return(
    <div className="form-floating">
        <textarea 
            className="form-control" 
            placeholder="Leave a comment here" 
            id="floatingTextarea2" style={{height: "100px"}} 
            value={props.text}
            readOnly
        ></textarea>
        <label></label>
    </div>
    )
}

export default TextArea;