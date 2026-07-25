"use client";
import React from "react";
import Loader from "./Loader";
import styled from "styled-components";

export default function EmConstrucao() {
  return (
    <StyledWrapper>
      <section className="flex flex-col gap-20 sm:scale-125 duration-400 ease-in-out">
        <Loader />
        <div className="textos text-center">
          <h1 className="font-bold text-xl">Oi, Entony aqui! 😎</h1>
          <h3 className="text-stone-500">Em construção...</h3>
        </div>
      </section>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .textos {
    opacity: 0;
    animation: fadeIn 3s linear forwards;
    animation-delay: 0.5s;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
