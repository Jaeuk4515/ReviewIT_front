import { CategoryType } from './slices/categorySlice';
import { ContentState } from './slices/contentSlice';
import { newContentState } from './slices/newContentSlice';
import { PageObject } from './slices/pageSlice';
import { PostObject } from './slices/postInfoSlice';
import { ReviewInfo } from './slices/reviewInfoSlice';
import { User } from './slices/userSlice';

export interface RootState {
  postInfo: PostObject[];
  content: ContentState;
  newContent: newContentState;
  page: PageObject;
  category: CategoryType;
  user: User;
  reviewInfo: ReviewInfo;
  searchText: string;
}