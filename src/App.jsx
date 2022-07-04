import React from "react";
import styled from "styled-components";
import EmojiPicker from "./components/EmojiPicker";
import Popup from "./components/Popup";
import { useEmojiHistory } from "./hooks/useEmojiHistory";


const StyledApp = styled.div`
  height: 100vh;
`;

export default function App() {
  const [clickPosition, setClickPosition] = React.useState({ isVisible: false, x: 0, y: 0 });
  const [emojiHistory, setEmojiHistory] = useEmojiHistory();

  return (
    <StyledApp
      onClick={(e) => {
        e.preventDefault();
        if (clickPosition.isVisible) {
          setClickPosition({ isVisible: false });
        } else {
          setClickPosition({
            isVisible: true,
            x: e.clientX,
            y: e.clientY,
          });
        }
      }}
    >
      <h2>Emoji Picker Project</h2>

      <Popup clickPosition={clickPosition}>
        <EmojiPicker
          emojiHistory={emojiHistory}
          onSelectEmoji={(emojiData) => {
            setEmojiHistory(emojiHistory.concat({
              id: +new Date(),
              emojiData: emojiData,
              x: clickPosition.x,
              y: clickPosition.y,
            }));
            setClickPosition({ isVisible: false });
          }}
        />
      </Popup>
      
      <div>
        {
          emojiHistory.map(emoji => (
            <ScreenEmoji key={emoji.id} {...emoji} />
          ))
        }
      </div>
    </StyledApp>
  );
}

const StyledEmoji = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  font-size: 36px;
  left: ${props => props.x}px;
  top: ${props => props.y}px;
`;

function ScreenEmoji({ emojiData, x, y }) {
  return (
    <StyledEmoji x={x - 18} y={y - 18} title={emojiData.name}>{emojiData.emoji}</StyledEmoji>
  );
}