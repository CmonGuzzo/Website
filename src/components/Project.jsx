
function Project({name, desc, img}) {
    return (
        <div className="project">
            <h2>{name}</h2>
            <p>{desc}</p>
            <img src={img} alt="project"/>
        </div>
    )
}

export default Project
