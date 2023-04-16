import React from "react";

function CertificationSection({data}){
    return(
        <div style={{marginBottom: 50, boxShadow: '1px 2px 15px #bcbcbc', borderRadius: 25, padding: 20, height: 70}}>
            <div style={{ width: "100%", display: "flex", alignItems: "center" }}>
                <text style={{ fontSize: 25, fontWeight: "bold", marginLeft: 25, marginBottom: 15 }}>{`Certification:  ${data.title}`}</text>
                
            </div>
            <text style={{ fontSize: 20, marginLeft: 25 }}>{`Date:  ${data.date}`}</text>
        </div>
    );
}

export default CertificationSection;