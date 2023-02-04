import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import alt from "../img/alt.png";
import sin from "../img/sin.png";
import hom from "../img/hom.png";
export const PricingSection = styled.div`
  padding: 100px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #23d997;
  height: 90vh;
  /* Mobile devices iPhone, Pixel */
  @media only screen and (min-width: 320px) and (max-width: 539px) {
    height: 100%;
  }
  /* Kindel and iPad tablet  */
  @media only screen and (min-width: 540px) and (max-width: 820px) {
    height: 100%;
  }
`;
const Circle = styled.img`
  border-radius: 50%;
  width: 10.2rem;
  height: 10.2rem;
  padding: 0.5rem;
  object-fit: cover;
  opacity: 0.8;
  margin: 1rem;
  cursor: pointer;
  z-index: 100;
  background-color: #333;
  &:hover {
    opacity: 1;
  }
  /* Mobile devices iPhone, Pixel */
  @media only screen and (min-width: 320px) and (max-width: 539px) {
    margin: auto;
  }
`;
export const PricingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const PricingHeading = styled.h1`
  color: #1b1b1b;
  font-size: 48px;
  margin-bottom: 24px;
  /* Mobile devices iPhone, Pixel */
  @media only screen and (min-width: 320px) and (max-width: 539px) {
    font-size: 2rem;
    text-align: center;
  }
`;

export const PricingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* Kindel and iPad tablet  */
  @media only screen and (min-width: 540px) and (max-width: 820px) {
    flex-wrap: wrap;
    width: 100%;
  }
  /* Mobile devices iPhone, Pixel */
  @media only screen and (min-width: 320px) and (max-width: 539px) {
    flex-wrap: wrap;
    width: 100%;
  }
`;

export const PricingCard = styled(motion.div)`
  background: #242424;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 200px;
  height: 400px;
  text-decoration: none;
  border-radius: 4px;
  &:nth-child(2) {
    margin: 24px;
  }
  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }
  /* Kindel and iPad tablet  */
  @media only screen and (min-width: 540px) and (max-width: 820px) {
    &:hover {
      transform: none;
    }
  }
  /* Mobile devices iPhone, Pixel */
  @media only screen and (min-width: 320px) and (max-width: 539px) {
    width: 90vw;
    &:hover {
      transform: none;
    }
    &:nth-child(2) {
      margin: 24px 0;
    }
  }
`;

export const PricingCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 24px;
  align-items: center;
  color: #fff;
`;

export const PricingCardIcon = styled.div`
  margin: 24px 0;
`;

export const PricingCardPlan = styled.h3`
  margin-bottom: 5px;
  font-size: 24px;
`;

export const PricingCardTag = styled.h4`
  font-size: 18px;
`;

export const PricingCardLength = styled.p`
  font-size: 14px;
  padding: 1rem;
`;

const SubsAndPacks = () => {
  return (
    <PricingSection>
      <PricingWrapper>
        <PricingHeading>Different brands we sale</PricingHeading>
        <PricingContainer>
          <PricingCard>
            <PricingCardInfo>
            <Circle src={sin} alt="Sinmag icon" />
              <PricingCardPlan>SINMAG</PricingCardPlan>
              <PricingCardTag>$99.99</PricingCardTag>
              <PricingCardLength></PricingCardLength>
              <button>View</button>
            </PricingCardInfo>
          </PricingCard>
          <PricingCard>
            <PricingCardInfo>
            <Circle src={hom} alt="Homat icon" />
            <PricingCardPlan>HOMAT</PricingCardPlan>
              <PricingCardTag>$299.99</PricingCardTag>
              <PricingCardLength></PricingCardLength>
              <button>View</button>
            </PricingCardInfo>
          </PricingCard>
          <PricingCard>
            <PricingCardInfo>
            <Circle src={alt} alt="Altuntop icon" />
            <PricingCardPlan>ALTUNTOP</PricingCardPlan>
              <PricingCardTag>$999.99</PricingCardTag>
              <PricingCardLength></PricingCardLength>

              <button>View</button>
            </PricingCardInfo>
          </PricingCard>
        </PricingContainer>
      </PricingWrapper>
    </PricingSection>
  );
};

export default SubsAndPacks;
