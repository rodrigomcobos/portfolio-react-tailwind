import React from 'react'
import CSSIcon from '../assets/css.svg'
import ExpressIcon from '../assets/express.svg'
import HtmlIcon from '../assets/html.svg'
import JavascriptIcon from '../assets/javascript.svg'
import NodeIcon from '../assets/node.svg'
import PostgresIcon from '../assets/postgres.svg'
import ReactIcon from '../assets/react.svg'
import ReduxIcon from '../assets/redux.svg'
import SequelizeIcon from '../assets/sequelize.svg'
import TailwindIcon from '../assets/tailwind.svg'
import FigmaIcon from '../assets/figma.svg'
import XdIcon from '../assets/xd.svg'


const skills = [
    { name: 'HTML 5', icon: HtmlIcon },
    { name: 'CSS 3', icon: CSSIcon },
    { name: 'Vanilla Javascript', icon: JavascriptIcon },
    { name: 'React', icon: ReactIcon },
    { name: 'Redux', icon: ReduxIcon },
    { name: 'TailwindCSS', icon: TailwindIcon },
    { name: 'Postgresql', icon: PostgresIcon },
    { name: 'Sequelize ORM', icon: SequelizeIcon },
    { name: 'Express', icon: ExpressIcon },
    { name: 'Node', icon: NodeIcon },
    { name: 'Figma', icon: FigmaIcon },
    { name: 'Adobe XD', icon: XdIcon }
];

const Skills = () => {
    return (
        <div id='skills' className="max-w-7xl max-md:max-w-md mx-auto md:mt-52 mt-24 px-6">
            <p className="text-sm flex justify-center items-center font-bold text-blue-600 mb-2"><span className="rotate-90 inline-block mr-2">|</span> SKILLS</p>
            <h2 className="text-gray-800 sm:text-4xl text-3xl font-extrabold text-center mb-16">Tools of the Trade</h2>
            <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-8 lg:gap-10">
                {skills.map((skill, index) => (
                    <div key={index} className="text-center">
                        <img src={skill.icon} alt={skill.name} className="sm:w-20 w-14 mb-6 inline-block" />
                        <h3 className="text-gray-800 text-xl font-semibold mb-3">{skill.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};



export default Skills