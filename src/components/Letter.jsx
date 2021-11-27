
function Letter({letter, name, handleMouse}) {
    return (
        <span className={name} style={{display:"inline-block"}} onMouseOver={handleMouse}>{letter}</span>
    )
}

export default Letter
