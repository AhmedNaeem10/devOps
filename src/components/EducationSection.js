import React from 'react';

function CourseLine({ course, last }) {
    return (
        <div style={{ backgroundColor: "#cfe2f3", width: "100%", borderBottomLeftRadius: last ? 25 : 0, borderBottomRightRadius: last ? 25 : 0, height: 65, display: "flex", alignItems: "center" }}>
            <text style={{ fontSize: 20, marginLeft: 25 }}>{course}</text>
        </div>
    )
}

function EducationSection({ data }) {
    return (
        <div style={{marginBottom: 50, boxShadow: '1px 2px 15px #bcbcbc', borderRadius: 25}}>
            <div style={{ backgroundColor: "#9fc5e8", width: "100%", borderTopLeftRadius: 25, borderTopRightRadius: 20, height: 65, display: "flex", alignItems: "center" }}>
                <text style={{ fontSize: 25, fontWeight: "bold", marginLeft: 25 }}>{`Semester:  ${data.semester}`}</text>
            </div>
            {
                data.courses.map((course, index)=>{
                    return(
                        <CourseLine course={course} last={index === data.courses.length - 1} />
                    );
                })
            }
        </div>
    );
}

export default EducationSection;