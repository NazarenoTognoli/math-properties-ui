import './Root.css'

function Root({index, children, radicandStyle = {}}){
    return (
        <div className='root' title='root'>
            <div className='index' title='index'>
                <span>{index}</span>
            </div>
            <div className='clip-path-separation'>
                <div></div>
            </div>
            <div className='radicand' title='radicand' style={radicandStyle}>
                <span>{children}</span>
            </div>
        </div>
    )
}

export default Root