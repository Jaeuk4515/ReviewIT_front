import Input from "../../atoms/Input/Input";
import Stars from "../../blocks/Stars/Stars";
import { 
  ReviewCreatePage, 
  ReviewInfoArea, 
  TextInfoArea, 
  InputArea, 
  SelectBox, 
  Seleted, 
  SelectedValue,
  ArrowWrapper,
  Arrow, 
  OptionBox, 
  OptionWrapper,
  Option,
  ImageInfoArea,
  InputPicture,
  ImageWrapper,
  XButton,
  IconWrapper, 
  PictureIcon, 
  FileBox,
  ImageUploadButton,
  ImageInput,
  ButtonArea,
  CompleteButton
} from "./ReviewCreate.styles";
import TextArea from "../../atoms/TextArea/TextArea";
import camera_light from "../../../assets/icons/camera_light.svg";
import camera_dark from "../../../assets/icons/camera_dark.svg";
import { PageDes, PageTitle } from "../Home/Home.styles";
import { useEffect, useState } from "react";
import axios from "axios";
import x_button from "../../../assets/icons/x-button.svg";
import getUserInfo from "../../../services/getUserInfo";
import { useNavigate } from "react-router-dom";
import AlertModal from "../../blocks/Modal/AlertModal/AlertModal";
import { Img } from "../../atoms/Category/Category.styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/RootState";
import { setUserId, setReviewTitle, setCategory, setProductName, setProductLink, setProductImages, setReviewContent, resetContent } from "../../../store/slices/contentSlice";

export interface content {
  userId: string;
  reviewTitle: string;
  category: string;
  productName: string;
  productLink: string;
  productImages: FileList | null;
  reviewContent: string;
  grade: 0 | 1 | 2 | 3 | 4 | 5;
};

export const categoryList = [ "컴퓨터", "노트북", "핸드폰", "모니터", "키보드", "마우스", "태블릿" ];
export type categoryType = "컴퓨터" | "노트북" | "핸드폰" | "모니터" | "키보드" | "마우스" | "태블릿";

export default function ReviewCreate() {
  const [ option, setOption ] = useState(false);
  const content = useSelector((state: RootState) => state.content);
  const dispatch = useDispatch();
  const login = useSelector((state: RootState) => state.login);
  const [ alertModal, setAlertModal ] = useState(false);
  const navigate = useNavigate();
  const { theme } = useSelector((state: RootState) => state.theme);

  useEffect(() => {
    if (!login) {
      navigate("/");
    };
  }, [login]);

  useEffect(() => {
    const getData = async () => {
      if (login) {
        const userInfo = await getUserInfo();
        console.log(userInfo);
        dispatch(setUserId(userInfo._id));
      };
    };

    getData();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const { reviewTitle, category, productName, productLink, productImages, reviewContent } = content;
    // if (!reviewTitle || !productName || !productLink || !reviewContent || !productImages || productImages.length === 0 || !category) {
    //   setAlertModal(true);
    //   return;
    // };
    
    // 함수로 빼기
    const formData = new FormData();
    formData.append("reviewTitle", content.reviewTitle);
    formData.append("category", content.category);
    formData.append("productName", content.productName);
    formData.append("productLink", content.productLink);
    formData.append("reviewContent", content.reviewContent);
    formData.append("grade", content.grade.toString());  // formData는 문자열만 가능 
    formData.append("userId", content.userId);
    // 이미지 파일 추가
    if (content.productImages) {
      for (let i = 0; i < content.productImages.length; i++) {
        formData.append("productImages", content.productImages[i]);
      };
    };
    // 서버로 전송
    const response = await axios.post("http://localhost:3001/review/create", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response);
    if (response.data.message === 'success') {
      navigate(`/posts/detail/${response.data.reviewId}`);
      dispatch(resetContent());
    };
  };

  const handleOption = () => {
    setOption(!option);
  };

  const changeCategory = (name: categoryType) => {
    dispatch(setCategory(name));
    setOption(!option);
  };

  const [ showImages, setShowImages ] = useState<string[]>([]);

  const imagePreview = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imgFiles = e.target.files;
    if (!imgFiles) return;
    let imgUrls = showImages;  // 기존에 업로드 했던 이미지 보존 
    for (let i = 0; i < imgFiles.length; i++) {
      if (imgUrls.length >= 4) break;  // 이미지 개수는 최대 4개
      imgUrls.push(URL.createObjectURL(imgFiles[i]));
    };
    console.log(imgUrls);
    setShowImages(imgUrls);

    // 이전에 새로 추가한 이미지를 유지한채 또다시 새로 추가한 이미지가 있으면 추가
    const combinedFilesArray = Array.from(content.productImages || []);
    combinedFilesArray.push(...Array.from(imgFiles));

    // combinedFilesArray를 FileList 타입의 값으로 변환 
    const dataTransfer = new DataTransfer();
    Array.from(combinedFilesArray).forEach((file) => {
      dataTransfer.items.add(file);
    });

    const newImgFiles = dataTransfer.files;
    dispatch(setProductImages(newImgFiles));
  };

  const handleDeleteImage = (idx: number) => {
    setShowImages(showImages.filter((_, index) => index !== idx));
    const updatedImages = content.productImages ? Array.from(content.productImages).filter((_, index) => index !== idx) : null;
    dispatch(setProductImages(updatedImages as FileList | null));
  };

  return (
    <ReviewCreatePage onSubmit={handleSubmit}>
      <ReviewInfoArea>
        <TextInfoArea>
          <InputArea>
            <h3>제목</h3>
            <Input type="text" className="" color={theme === "light" ? "white" : "#626265"} width="100%" height="40px" name="reviewTitle" value={content.reviewTitle} onChange={(e) => { dispatch(setReviewTitle(e.target.value)) }} />
          </InputArea>
          <InputArea>
            <h3>카테고리</h3>
            <SelectBox>
              <Seleted theme={theme}><SelectedValue>{content.category}</SelectedValue></Seleted>
              <ArrowWrapper><Arrow onClick={handleOption} /></ArrowWrapper>
              <OptionBox on={option.toString()}>
                <OptionWrapper>
                  {categoryList.map((name, idx) => (
                    <Option key={idx} onClick={() => changeCategory(name as categoryType)}>{name}</Option>
                  ))}
                </OptionWrapper>
              </OptionBox>
            </SelectBox>
          </InputArea>
          <InputArea>
            <h3>제품명</h3>
            <Input type="text" className="" color={theme === "light" ? "white" : "#626265"} width="100%" height="40px" name="productName" value={content.productName} onChange={(e) => { dispatch(setProductName(e.target.value)) }} />
          </InputArea>
          <InputArea>
            <h3>제품 링크</h3>
            <Input type="text" className="" color={theme === "light" ? "white" : "#626265"} width="100%" height="40px" name="productLink" value={content.productLink} onChange={(e) => { dispatch(setProductLink(e.target.value)) }} />
          </InputArea>
          <InputArea><h3>별점</h3><Stars mode="edit" /></InputArea>
        </TextInfoArea>
        <ImageInfoArea>
          <InputArea>
            <PageTitle style={{alignItems: "flex-end"}}>
              <h3>제품 사진</h3>
              <span style={{fontSize: "14px", color: "#B7B7B7", paddingBottom: "2px"}}>(최대 4개)</span>
            </PageTitle>
            <InputPicture isgrid={(showImages.length > 0).toString()}>
              {showImages.length > 0 
                ? 
                showImages.map((image, idx) => (
                  <ImageWrapper key={idx}>
                    <Img category={image} style={{width: "100%", height: "100%", backgroundSize: "cover"}} />
                    <XButton category={x_button} onClick={() => handleDeleteImage(idx)} />
                  </ImageWrapper>
                ))
                : 
                <IconWrapper>
                  <PictureIcon category={theme === "light" ? camera_light : camera_dark} />
                  <PageDes>제품 사진을 등록해보세요</PageDes>
                </IconWrapper>
              }
            </InputPicture>
          </InputArea>
          <FileBox>
            <ImageUploadButton htmlFor="img_file">파일 업로드</ImageUploadButton>
            <ImageInput type="file" id="img_file" multiple accept="image/*" onChange={imagePreview} />
          </FileBox>
        </ImageInfoArea>
      </ReviewInfoArea>
      <InputArea style={{"width": "50%", "minWidth": "800px"}}>
        <h3>리뷰</h3>
        <TextArea color={theme === "light" ? "white" : "#626265"} width="100%" height="400px" fontSize="18px" name="reviewContent" value={content.reviewContent} onChange={(e) => { dispatch(setReviewContent(e.target.value)) }} />
      </InputArea>
      <ButtonArea>
        <CompleteButton buttontype="cancel" type="button" onClick={ () => { navigate(-1) } }>취소</CompleteButton>
        <CompleteButton themeProps={theme} buttontype="write" type="submit">등록</CompleteButton>
      </ButtonArea>
      { alertModal && <AlertModal mode="createAlert" setAlertModal={setAlertModal} /> }
    </ReviewCreatePage>
  )
}