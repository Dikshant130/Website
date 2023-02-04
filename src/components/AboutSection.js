import React from "react";
import styled from "styled-components";
import home1 from "../img/home1.png";
import { Link } from "react-router-dom";
import { Layout, Description, ImageContainer, Hide } from "../styles";
// Animation
import { motion } from "framer-motion";
import { titleAnimation, fade, photoAnimation } from "../animation";
import Wave from "./Wave";

const Header = styled(motion.div)`
  @media only screen and (min-width: 540px) and (max-width: 820px) {
    h2 {
      font-size: 3rem;
    }
  }
`;

const AboutSection = () => {
  // Framer-motion variant
  const container = {
    hidden: { x: 100 },
    show: {
      x: 0,
      transition: {
        duration: 0.75,
        ease: "easeOut",
        staggerChildren: 0.8,
        when: "afterChildren",
      },
    },
  };

  return (
    <Layout>
      <Description style={{ zIndex: 2 }}>
        <Header
          variants={container}
          initial="hidden"
          animate="show"
          className="title"
        >
          <Hide>
            <motion.h2 variants={titleAnimation}>QUALITY BAKERY </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
               <span>EQUIPMENTS</span> &
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              <span>MACHINES.</span>
            </motion.h2>
          </Hide>
        </Header>

        <motion.p variants={fade}>
          Falana
        </motion.p>

        <Link className="non-styled-link" to="/contact">
          <motion.button variants={fade}>Contact Us</motion.button>
        </Link>
      </Description>
      <ImageContainer>
        <motion.img
          variants={photoAnimation}
          initial="hidden"
          animate="show"
          src={home1}
          alt="Fully automatic bakery"
        />
      </ImageContainer>
      <Wave />
    </Layout>
  );
};

export default AboutSection;
