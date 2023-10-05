import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Loader from 'react-loaders'

import React, { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
            natus id nihil quos maxime deserunt ut, adipisci, ipsam tempora
            labore laborum illo ipsum iure iste?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            magnam temporibus consequatur deleniti maiores dicta, cupiditate in
            perspiciatis itaque.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
            obcaecati qui accusantium fugiat accusamus voluptatum quo culpa
            quod, voluptates laboriosam?
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#dd0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#f06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#ec4d28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
