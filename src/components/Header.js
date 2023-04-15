import React from 'react';

function Header({ route }) {
    return (
        <div style={{ flex: 1, display: "flex", alignSelf: "center", backgroundColor: "#16537e", height: 100 }}>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <a href='/' style={{textDecoration: "none", fontSize: 50, fontWeight: "bold", color: "#cfe2f3", marginLeft: 50 }}>DevOps</a>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginLeft: 40, marginTop: 10 }}>
                    <a href='/' style={{fontWeight: route === "home" ? "bold" : "normal", textDecoration: route === "home" ? "underline" : "none", fontSize: 20, margin: 15, color: "#cfe2f3" }}>Home</a>
                    <a href='/education' style={{fontWeight: route === "education" ? "bold" : "normal", textDecoration: route === "education" ? "underline" : "none", fontSize: 20, margin: 15, color: "#cfe2f3" }}>Education</a>
                    <a href='/projects' style={{fontWeight: route === "projects" ? "bold" : "normal", textDecoration: route === "projects" ? "underline" : "none", fontSize: 20, margin: 15, color: "#cfe2f3" }}>Projects</a>
                </div>
            </div>
        </div>
    );
}

export default Header;
