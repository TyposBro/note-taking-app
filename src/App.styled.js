import styled from "styled-components";

export const Keywords = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: space-evenly;
  min-width: 600px;
  width: 60vw;
  height: 70vh;
  border-radius: 1rem;
  background: #fff;
  color: gray;
  border: 2px solid gray;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const Checkbox = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid gray;
  border-radius: 5px;
  position: relative;
  background: transparent;
  z-index: 1;

  &::after {
    content: "";
    background: url("https://www.svgrepo.com/show/79008/check-mark.svg") no-repeat center center/cover;
    position: absolute;

    top: 0px;
    left: 0px;
    width: 20px;
    height: 20px;
    z-index: 10;
    opacity: 0;
    transition: opacity 200ms ease-in-out;
  }
`;
export const Input = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;
export const Option = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  ${Input}:checked ~ ${Label} > ${Checkbox}::after {
    opacity: 1;
  }
`;
