import React from "react";
import styled from "styled-components";

import { skinTones } from '../../data/emojiData';
import styleConstants from "../../styles/styleConstants";

const StyledFooter = styled.footer`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  padding: 8px ${styleConstants.LEFT_RIGHT_PADDING};
  & > * {
    display: flex;
  }

  & > div {
    max-width: 100px;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  & p {
    margin-left: 12px;
    color: #666;
    font-size: 1rem;
    line-height: 2rem;
  }

  -webkit-box-shadow: -3px 9px 22px 5px rgba(77,77,77,0.5);
  -moz-box-shadow: -3px 9px 22px 5px rgba(77,77,77,0.5);
  box-shadow: -3px 9px 22px 5px rgba(77,77,77,0.5);
`;

const SkinColorInput = styled.select`
  height: 20px;
  width: 60px;
  height: 40px;
  border: 1px solid #CCC;
  font-size: 1.8rem;
  cursor: pointer;
`;

export default function EmojiFooter({ currentEmoji, setSkinTone, currentSkinTone }) {
  return (
    <StyledFooter>
      <div>
        {
          currentEmoji ? (
            <>
              <span>{currentEmoji.emoji}</span>
              <p>{currentEmoji.name}</p>
            </>
          ) : null
        }
      </div>
      <form>
          <SkinColorInput
            id="skintone"
            name="skintone"
            value={currentSkinTone.id}
            onChange={(e) => { e.preventDefault(); setSkinTone(skinTones.filter(s => s.id === e.target.value)[0]); }}
          >
            {
              skinTones.map(s => (
                <option key={s.id} value={s.id}>{s.emoji}</option>
              ))
            }
          </SkinColorInput>
      </form>
    </StyledFooter>
  );
}