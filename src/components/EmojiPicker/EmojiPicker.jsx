import React from "react";
import styled from "styled-components";

import { defaultEmojiList } from '../../data/emojiData';

import SearchForm from "./SearchForm";
import EmojiResults from "./EmojiResults";
import EmojiFooter from "./EmojiFooter";
import { useSkinTone } from "../../hooks/useEmojiHistory";

const SyledContainer = styled.div`
  background-color: #EEE;
  width: 400px;
  overflow: hidden;
  border-radius: 4px;
`;


function createSkinToneEmoji(baseEmoji, skinTone) {
  if (baseEmoji.length > 2) return baseEmoji;
  // only handles skintones for emojis with one skintone
  const pointcodes = [
    baseEmoji.codePointAt(0),
    skinTone.pointcode
  ];

  return String.fromCodePoint(...pointcodes);
}

function applySkinTones(emojiList, skinTone) {
  if (skinTone.pointcode === null) return emojiList;

  return emojiList.map(emojiData => {
    if (/\p{Emoji_Modifier_Base}/u.test(emojiData.emoji)) {
      return {
        ...emojiData,
        emoji: createSkinToneEmoji(emojiData.emoji, skinTone),
      };
    } else {
      return emojiData;
    }
  })
  
}
function filterEmojis(emojiList, filterText) {
  return emojiList.filter(emoji => emoji.name.includes(filterText));
}

export default function EmojiPicker({ onSelectEmoji }) {
  const [filterText, setFilterText] = React.useState('');
  const [currentEmoji, setCurrentEmoji] = React.useState(defaultEmojiList[0]);
  const [skinTone, setSkinTone] = useSkinTone();
  let emojiList = filterEmojis(defaultEmojiList, filterText);
  emojiList = applySkinTones(emojiList, skinTone);

  return (
    <SyledContainer>
      <SearchForm onSearch={setFilterText} />

      <EmojiResults
        emojiList={emojiList}
        setCurrentEmoji={setCurrentEmoji}
        onSelectEmoji={onSelectEmoji}
      />

      <EmojiFooter currentEmoji={currentEmoji} setSkinTone={setSkinTone} currentSkinTone={skinTone} />
    </SyledContainer>
  );
}
