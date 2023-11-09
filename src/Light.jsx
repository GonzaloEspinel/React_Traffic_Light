/* eslint-disable react/prop-types */
import './light.css'

export function Light({ color, opacity }) {
    return (
        <>

            <div className="light" style={{ background: color, opacity: opacity }} />

        </>
    )
}