import React from "react";
import styled from "styled-components";

import Icons from '../icons';

const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 4px;
  border-bottom: 1px solid #CCC;

  & > * {
    display: flex;
  }

  & > span {
    position: absolute;
    padding: 0 8px;
  }

  & > input {
    font-size: 1rem;
    padding: 4px 4px 4px 24px;
    width: 100%;
    line-height: 1.5rem;
    background-color: #CCC;
    border: none;
    border-radius: 4px;
    letter-spacing: 1px;
  }
`;

export default function SearchForm({ onSearch }) {
  return (
    <StyledForm
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <span><Icons.IconSearch color="#666" size={12} /></span>
      <input
        name="searchText"
        type="text"
        placeholder="Search"
        autoComplete="off"
        onChange={(e) => {
          onSearch(e.target.value);
        }}
      />
    </StyledForm>
  );
}