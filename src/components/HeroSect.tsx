"use client";
import React from "react";
import styled from "styled-components";
import Button from "./Button";

const HeroSection = styled.div`
  height: 100vh;
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  background-image: url("https://images.unsplash.com/photo-1561180796-dbaa5caf76e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2369&q=80");
  background-size: cover;
  background-repeat: no-repeat;
`;
const Heroh1 = styled.h1`
  font-size: 130px;
  max-width: 70%;
  padding-left: 100px;
`;

const HeroP = styled.p`
  max-width: 50%;
  font-size: 17px;
  padding-left: 100px;
  margin-top: 30px;
  line-height: 1.8;
`;

const ButtonSec = styled.div`
      padding-left: 100px;
      margin-top: 30px;
`

const HeroP1 = styled.p`
    color: grey;
    padding-left: 100px;
`

export default function HeroSect() {
  return (
    <HeroSection>
        <HeroP1>
            Made with love by Array
        </HeroP1>
      <Heroh1>HYDRO FLASK</Heroh1>
      <HeroP>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
        repudiandae accusantium voluptate illo sapiente distinctio tenetur vitae
        eum repellat a, voluptatum ipsum exercitationem nihil quos eos earum?
        Neque, corrupti quam.
      </HeroP>
      <ButtonSec> 
      <Button />
      </ButtonSec>
    </HeroSection>
  );
}
