import React from 'react';
import Header from '../components/Header';
import image from '../images/myself.jpeg';

function Home() {
    return (
        <div>
            <Header route="home" />
            <div style={{ flex: 1, display: "flex", justifyContent: "center", marginTop: 50 }}>
                <div style={{ width: '90%' }}>
                    <div style={{ display: "flex", flexDirection: "row", width: "70%", alignItems: "center" }}>
                        <img src={image} style={{ width: 250, height: 250, borderRadius: 250 }} />
                        <text style={{ margin: 20 }}>Insightful Computer Science student who excels at Full Stack Development along with Mobile Application Development. Currently in final semester of BSCS from FAST  NU, Karachi. Have maintained an average of 3.8 GPA in core Computer Science  courses such as Programming Fundamentals, Object Oriented  Programming, Data Structures and  Algorithms and CGPA is 3.9. My technical expertise includes NodeJS, Python, .NET6.0, ReactJS, React Native and Java.</text>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
