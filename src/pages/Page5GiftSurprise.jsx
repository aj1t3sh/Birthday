import React from 'react';
import SurpriseGiftBox from '../components/SurpriseGiftBox';
import StoryFooterNav from '../components/StoryFooterNav';
import { storyContent } from '../config/storyContent';
import { playCelebrationSound, playChime } from '../utils/audioHelper';

export default function Page5GiftSurprise({ onNext, onPrev }) {
  const { nextButtonText } = storyContent.page5_gift;

  const handleNext = () => {
    playCelebrationSound();
    onNext();
  };

  const handlePrev = () => {
    playChime(587.33, 0.4, 'sine');
    onPrev();
  };

  return (
    <div className="page-wrapper bg-gift-surprise">
      <div className="page-container" style={{ justifyContent: 'center' }}>
        <SurpriseGiftBox />
      </div>

      {/* Navigation Footer */}
      <StoryFooterNav
        onPrev={handlePrev}
        onNext={handleNext}
        nextLabel={nextButtonText}
        isDark={true}
      />
    </div>
  );
}
