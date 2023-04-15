import React from 'react';
import EducationSection from '../components/EducationSection';
import Header from '../components/Header';

const data = [
    {
        semester: 1,
        courses: [
            "Programming Fundamentals",
            "English Composition and Comprehension",
            "Islamiat and Religous Studies",
            "Applied Physics",
            "Introduction of Communication Technologies",
            "Calculus"
        ]
    },
    {
        semester: 2,
        courses: [
            "Object Oriented Programming",
            "Communication and Presentation Skills",
            "Pakistan Studies",
            "Digital Logic Design",
            "Differential Equations",
        ]
    },
    {
        semester: 3,
        courses: [
            "Data Structures",
            "Computer Organization and Assembly Language",
            "Discrete Structures",
            "Linear Algebra",
            "Marketing Management",
        ]
    },
    {
        semester: 4,
        courses: [
            "Operating Systems",
            "Numerical Computing",
            "Theory of Automata",
            "Probability and Statistics",
            "Pyschology",
        ]
    },
    {
        semester: 5,
        courses: [
            "Design and Analysis of Alogrithms",
            "Parallel and Districuted Computing",
            "Software Design and Analysis",
            "Database Systems",
            "Multivariable Calculus",
        ]
    },
    {
        semester: 6,
        courses: [
            "Artificial Intelligence",
            "Computer Networks",
            "Software Engineering",
            "Information Retrieval",
            "Technial and Business Writing",
        ]
    },
    {
        semester: 7,
        courses: [
            "Information Security",
            "Professional Practices in IT",
            "E-Commerce",
            "Information Processing Techniques",
            "Final Year Project I",
        ]
    },
    {
        semester: 8,
        courses: [
            "DevOps",
            "Introduction to Cloud Computing",
            "Entrpreneurship",
            "Agile Software Project Management",
            "Final Year Project I",
        ]
    },
]

function Education() {
    return (
        <div>
            <Header route="education" />
            <div style={{ flex: 1, display: "flex", justifyContent: "center", marginTop: 50 }}>
                <div style={{ width: '80%' }}>
                    {
                        data?.map((data_, index) => {
                            return (
                                <EducationSection data={data_} />
                            );
                        })
                    }
                </div>
            </div>

        </div>
    );
}

export default Education;
