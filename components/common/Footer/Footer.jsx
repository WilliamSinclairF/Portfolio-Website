import { useState } from 'react';
import { SocialLinks } from '../SocialLinks';
import { FooterContainer, FooterText, OnHoverEmojiContainer } from './FooterStyles';

export const Footer = () => {
  const [showEmoji, setShowEmoji] = useState(false);
  const handleShowEmoji = (isShown) => {
    setShowEmoji(isShown);
  };
  return (
    <FooterContainer onMouseEnter={() => handleShowEmoji(true)}>
      <FooterText>
        Let&apos;s chat! <OnHoverEmojiContainer show={showEmoji}>👋</OnHoverEmojiContainer>
      </FooterText>
      <SocialLinks />
    </FooterContainer>
  );
};
