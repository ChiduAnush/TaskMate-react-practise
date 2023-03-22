import React from 'react'

export const Footer = () => {
    let footerStyle = {
        marginTop: "30px",
        position: "sticky",
        bottom: "0px",
        width: "100%",
    }

    return (
        <footer className="bg-dark text-light py-2" style={footerStyle}>
            <p className="text-center">
                Taskmate, made by chidu
            </p>
        </footer>
    )
}
