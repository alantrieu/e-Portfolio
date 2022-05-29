import './AboutMe.scss';

const AboutMe = () => {
    const skills = ['C', 'Java', 'Javascript', 'React', 'SQL', 'R'];

    return (
        <div className='aboutme'>
            <div className='aboutme-text'>
                {/* <img src='https://www.unsw.edu.au/content/dam/images/photos/campus/kensington/2021-09-comp-sci-eng-about-us/2021-09-comp-sci-eng-about-us-1.cropimg.width=700.crop=square.jpeg' alt='cse'/> */}
                <p className='text-top'>
                    I was previously working towards a Commerce degree with a major in finance — while interesting, it turns out I didn't have a huge passion for it!
                </p>
                <p>
                    I've been exploring the different branches of computer science outside of uni, and I thought front-end would be a fun first step. 
                    <br/>
                    I began with Maximilian Schwarzmüller's&nbsp;
                    <a href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/" target="_blank" rel="noreferrer">Udemy React course</a> in late 2021 and eventually built this personal website using React. I've also recently dipped my toes into mobile development through Java and Android Studio!
                </p>
                <p className='text-bottom'>
                    My current semester courses for 22T2 involve learning C++, shell programming, and web application security exploitation.
                </p>

                <div className='skills'>
                    {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
                </div>
            </div>
        </div>
    );
};

export default AboutMe;