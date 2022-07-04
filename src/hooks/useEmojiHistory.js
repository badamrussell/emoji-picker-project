
import React from "react";

import { skinTones } from "../data/emojiData";

const EmojiHistoryContext = React.createContext();

export function EmojiHistoryProvider(props) {
  const [skinTone, setSkinTone] = React.useState(skinTones[0]);
  const [emojiHistory, setEmojiHistory] = React.useState([]);
  const value = [{ emojiHistory, skinTone }, { setSkinTone, setEmojiHistory }];

  return (
    <EmojiHistoryContext.Provider value={value} {...props} />
  );
}

export function useEmojiHistory() {
  const [{ emojiHistory }, { setEmojiHistory }] = React.useContext(EmojiHistoryContext);
  return [emojiHistory, setEmojiHistory];
}

export function useSkinTone() {
  const [{ skinTone }, { setSkinTone }] = React.useContext(EmojiHistoryContext);
  return [skinTone, setSkinTone];
}