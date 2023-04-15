import React from "react";

function ProjectSection({data}){
    return(
        <div style={{marginBottom: 50, boxShadow: '1px 2px 15px #bcbcbc', borderRadius: 25, padding: 20, height: 70}}>
            <div style={{ width: "100%", display: "flex", alignItems: "center" }}>
                <text style={{ fontSize: 25, fontWeight: "bold", marginLeft: 25, marginBottom: 15 }}>{`Project:  ${data.title}`}</text>
                
            </div>
            <text style={{ fontSize: 20, marginLeft: 25 }}>{`Technologies:  ${data.techs.join(", ")}`}</text>
        </div>
    );
}

export default ProjectSection;