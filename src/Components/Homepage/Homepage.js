import React from "react";
import Card from "../UI/Card";

import MyLinks from '../../assets/images/my-links-top.png';

import styles from './Homepage.module.css';
import './Homepage.scss';

const Homepage = () => {
    // const hello = <h3> Hi there! I'm</h3>
    // const myName = <h2>Alan Trieu</h2>
    // const aboutMe = (
    //     <p>
    //         Current university student, looking for opportunities to learn, create and have fun!
    //     </p>
    // )

    // return (
    //     <React.Fragment>
    //         <Card className={styles.homepage}>
    //             {hello}
    //             {myName}
    //             {aboutMe}
    //         </Card>
    //         {/* <AboutMe>

    //         </AboutMe> */}
    //         {/* projects */}
    //         {/* interests */}
    //     </React.Fragment>
    // );

    return (
        <div className="container homepage">
            <div className="welcome-text">
                <h1>Hey!</h1>
                <h2>I'm Alan</h2>
                <p>
                    Current university student, looking for opportunities to learn, create and have fun!
                </p>
            </div>
        </div>
    );
};

export default Homepage;