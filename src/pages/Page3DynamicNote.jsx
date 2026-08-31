import React from 'react';
import InteractiveEnvelope from '../components/InteractiveEnvelope';
import StoryFooterNav from '../components/StoryFooterNav';
import { storyContent } from '../config/storyContent';
import { playChime } from '../utils/audioHelper';

export default function Page3DynamicNote({ onNext, onPrev }) {
  const { nextButtonText } = storyContent.page3_note;

  const handleNext = () => {
    playChime(659.25, 0.4, 'sine');
    onNext();
  };

  const handlePrev = () => {
    playChime(587.33, 0.4, 'sine');
    onPrev();
  };

  return (
    <div className="page-wrapper bg-envelope-world">
      <div className="page-container" style={{ justifyContent: 'center' }}>
        <InteractiveEnvelope onFinish={handleNext} />
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
