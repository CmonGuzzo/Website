
function Button({image, alt, parentClass, onClick}) {
    return (
        <button onClick = {onClick} className = {parentClass}><img src={image} alt={alt}/></button>
    )
}

export default Button
