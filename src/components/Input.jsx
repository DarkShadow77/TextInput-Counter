const TextInput = (props) => {
    return ( 
        <>
            <h1>Input text: {props.text}</h1>
            <input type="text" onChange={props.change}/>
        </>
     );
}
 
export default TextInput;