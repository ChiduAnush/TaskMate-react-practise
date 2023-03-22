import React from 'react'

export const Footer = () => {
    let footerStyle = {
        position: "absolute",
        bottom: "0vh",
        width: "100%"
    }

    return (
        <footer className="bg-dark text-light py-2" style={footerStyle}>
            <p className="text-center">
                Taskmate, made by chidu
            </p>
        </footer>
    )
}
