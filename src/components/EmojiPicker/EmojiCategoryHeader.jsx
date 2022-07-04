import React from "react";
import styled from "styled-components";

import Icons from '../icons';

const StyledHeader = styled.div`
  button {
    margin: 0;
    padding: 0;
    line-height: 0;
  }
`;

export default function EmojiCategoryHeader() {

  return (
    <StyledHeader>
      <button><Icons.IconClock /></button>
      <button><Icons.IconClock /></button>
      <button><Icons.IconClock /></button>
      <button><Icons.IconClock /></button>
      <button><Icons.IconClock /></button>
      <button><Icons.IconClock /></button>
      <button><Icons.IconClock /></button>
      <button><Icons.IconClock /></button>
      <button><Icons.IconClock /></button>
      <button><Icons.IconClock /></button>
    </StyledHeader>
  );
}