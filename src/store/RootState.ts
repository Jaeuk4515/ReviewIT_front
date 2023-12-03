import { ContentState } from './contentSlice';
import { newContentState } from './newContentSlice';
import { PostObject } from './postInfoSlice';

export interface RootState {
  postInfo: PostObject[];
  content: ContentState;
  newContent: newContentState;
}