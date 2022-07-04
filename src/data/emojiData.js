import unicode from 'emoji-unicode-map';

export const defaultEmojiList = Object.entries(unicode.emoji).map(([emoji,  name], i) => ({ id: i, emoji, name }));

export const skinTones = [
  {
    id: 'skin-tone-default',
    pointcode: null,
    name: 'default',
    emoji: '🤚',
  },
  {
    id: 'skin-tone-light',
    pointcode: 0x1F3FB.toString(),
    name: 'light skin tone',
    emoji: '🤚🏻',
  },
  {
    id: 'skin-tone-medium-light',
    pointcode: 0x1F3FC.toString(),
    name: 'medium-light skin tone',
    emoji: '🤚🏼',
  },
  {
    id: 'skin-tone-medium',
    pointcode: 0x1F3FD.toString(),
    name: 'medium skin tone',
    emoji: '🤚🏽',
  },
  {
    id: 'skin-tone-medium-dark',
    pointcode: 0x1F3FE.toString(),
    name: 'medium-dark skin tone',
    emoji: '🤚🏾',
  },
  {
    id: 'skin-tone-dark',
    pointcode: 0x1F3FF.toString(),
    name: 'dark skin tone',
    emoji: '🤚🏿',
  },
];
