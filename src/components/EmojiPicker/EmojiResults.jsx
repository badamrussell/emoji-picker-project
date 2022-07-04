import React from "react";
import styled from "styled-components";

import styleConstants from "../../styles/styleConstants";


const StyledEmojiItem = styled.div`
  font-size: 32px;
  vertical-align: middle;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${styleConstants.LEFT_RIGHT_PADDING};
  height: 48px;
  width: 50px;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

function EmojiItem({ emojiItem, setCurrentEmoji, onSelectEmoji }) {
  return (
    <StyledEmojiItem onClick={() => onSelectEmoji(emojiItem)}>
      <div title={emojiItem.name} key={emojiItem.id} onMouseOver={() => { setCurrentEmoji(emojiItem); }}>{emojiItem.emoji}</div>
    </StyledEmojiItem>
  );
}

const StyledEmojiList = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;
function EmojiList({ emojiList, setCurrentEmoji, onSelectEmoji }) {

  return (
    <StyledEmojiList>
      {
        emojiList.map(emojiItem => (
          <EmojiItem key={emojiItem.id} emojiItem={emojiItem} setCurrentEmoji={setCurrentEmoji} onSelectEmoji={onSelectEmoji} />
        ))
      }
    </StyledEmojiList>
  );
}

const StyledContent = styled.div`
  height: 300px;
  width: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 12px 0;
  background-color: #EEE;
`;
export default function EmojiResults({ emojiList, setCurrentEmoji, onSelectEmoji }) {
  return (
    <StyledContent>
      <EmojiList emojiList={emojiList} setCurrentEmoji={setCurrentEmoji} onSelectEmoji={onSelectEmoji} />
    </StyledContent>
  );
}