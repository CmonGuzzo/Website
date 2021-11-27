
function ring({offset, name}) {
    return (
        <div className="ringContainer" style={{transform:"rotate("+offset+")"}}>
            <svg
            className={name}
            width="75%"
            height="75%">
            <circle
                className="progress-ring__circle"
                stroke="white"
                strokeWidth="3%"
                strokeDasharray=" 1% 10%"
                fill="transparent"
                r="47%"
                cx="50%"
                cy="50%"/>
            </svg>
        </div>
    )
}

export default ring
