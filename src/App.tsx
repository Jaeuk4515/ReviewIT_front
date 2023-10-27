import React from 'react';
import './App.css';
import Button from './components/atoms/Button/Button';
import Divider from './components/atoms/Divider/Divider';
import Comment from './components/atoms/Comment/Comment';
import Likey from './components/atoms/Likey/Likey';
import Input from './components/atoms/Input/Input';
import Search from './components/atoms/Search/Search';
import Category from './components/atoms/Category/Category';
import ImageCard from './components/atoms/ImageCard/ImageCard';
import image from './assets/icons/image.webp'
import UserProfile from './components/atoms/UserProfile/UserProfile';
import Star from './components/atoms/Star/Star';
import DirectionButton from './components/atoms/DirectionButton/DirectionButton';

function App() {
  return (
    <div>
      <DirectionButton direction="left" state="enable" />
      <DirectionButton direction="right" state="disable" />
      <Divider />
      <Comment amount={1} />
      <Likey amount={2} />
      <Input color="#FFF" width="500px" height="60px" />
      <Search color="#FFF" width="370px" height="40px" />
      <Category categoryName="컴퓨터" />
      <Category categoryName="노트북" />
      <Category categoryName="핸드폰" />
      <Category categoryName="가전제품" />
      <ImageCard url={image} />
      <UserProfile url={image} />
      <Star status="full" />
      <Star status="empty" />
    </div>
  );
}

export default App;