// UserStories.js
import React, { useState } from 'react';
import Stories from 'react-insta-stories';
import './UserStories.css';

const UserStories = ({ storiesData }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [currentStories, setCurrentStories] = useState([]);

  const handleStoryClick = (index) => {
    setCurrentStoryIndex(index);
    setCurrentStories(storiesData[index].stories);
    setShowOverlay(true);
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
    setCurrentStoryIndex(0);
  };

  const handleAllStoriesEnd = () => {
    if (currentStoryIndex < storiesData.length - 1) {
      setCurrentStoryIndex(currentStoryIndex + 1);
      setCurrentStories(storiesData[currentStoryIndex + 1].stories);
    } else {
      handleCloseOverlay();
    }
  };

  return (
    <div className="user-stories">
      <div className="stories-container">
        {storiesData.map((story, index) => (
          <div key={index} className="story-ball" onClick={() => handleStoryClick(index)}>
            <img src={story.image} alt={story.title} className="story-image" />
          </div>
        ))}
      </div>
      {showOverlay && (
        <div className="overlay" onClick={handleCloseOverlay}>
          <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
            <Stories
              stories={currentStories}
              width={'100%'}
              height={500}
              onAllStoriesEnd={handleAllStoriesEnd}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserStories;
