import './App.css'

// eslint-disable-next-line react/prop-types
export function Light({color,opacity}){
    return(
        <>
        <div className="light" style={{background:color, opacity:opacity}} />
        </>
    )
}