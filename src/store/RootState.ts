import { CategoryType } from './slices/categorySlice';
import { ContentState } from './slices/contentSlice';
import { ModalType } from './slices/modalSlice';
import { newContentState } from './slices/newContentSlice';
import { PageObject } from './slices/pageSlice';
import { PostObject } from './slices/postInfoSlice';
import { ReviewInfo } from './slices/reviewInfoSlice';
import { ThemeType } from './slices/themeSlice';
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
  modal: ModalType;
  login: boolean;
  theme: ThemeType;
}