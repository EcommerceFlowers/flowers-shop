import React from 'react';
import AboutIntroContent from 'components/AboutIntroContent';
import { CommentWeloveClient } from 'app/CommentWeloveClient';
import { MOCK_COMMENTS } from 'mock/comments';

const AboutPage = () => {
  const sectionStyle = {
    backgroundImage: `url('/images/flowers/026.jpg')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '50vh',
    width: '100vw',
  };

  return (
    <div className="flex flex-col">
      <div style={sectionStyle} className="flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold mb-4 text-black">ABOUT US</h1>
      </div>
      <AboutIntroContent />
      <div>
        <CommentWeloveClient comments={MOCK_COMMENTS} />
      </div>
    </div>
  );
};

export default AboutPage;
