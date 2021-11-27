
function Project({name, desc, img, link}) {
    return (
        <div className="project">
            <a href={link} target="_blank" rel="noreferrer noopener"><h2>{name}</h2></a>
            <p>{desc}</p>
            <img src={img} alt="project"/>
        </div>
    )
}

export default Project
