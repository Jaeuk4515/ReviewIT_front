import { useEffect, useState } from "react";
import { categoryList, categoryType } from "../ReviewCreate/ReviewCreate";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { 
  ReviewCreatePage, 
  ReviewInfoArea, 
  TextInfoArea, 
  InputArea, 
  SelectBox, 
  Seleted, 
  SelectedValue, 
  Arrow, 
  OptionBox, 
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
  CompleteButton,
  OptionWrapper,
  ArrowWrapper,
  TextLimit,
  InputTitle,
  TextInputArea,
  TextBox,
  InputBox,
  MaxImageText
} from "../ReviewCreate/ReviewCreate.styles";
import Stars from "../../blocks/Stars/Stars";
import { PageDes, PageTitle } from "../Home/Home.styles";
import AlertModal from "../../blocks/Modal/AlertModal/AlertModal";
import x_button from "../../../assets/icons/x-button.svg";
import camera_light from "../../../assets/icons/camera_light.svg";
import camera_dark from "../../../assets/icons/camera_dark.svg";
import { Img } from "../../atoms/Category/Category.styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/RootState";
import { setNewContent, setReviewTitle, setCategory, setProductName, setProductLink, setProductImages, setNewProductImages, setDeletedProductImages, setReviewContent } from "../../../store/slices/newContentSlice";
import { origin_URL } from "../../../App";

export default function ReviewUpdate() {
  const param = useParams();
  const login = useSelector((state: RootState) => state.login);
  const newContent = useSelector((state: RootState) => state.newContent);
  const dispatch = useDispatch();
  const [ option, setOption ] = useState(false);
  const [ alertModal, setAlertModal ] = useState(false);
  const [ showImages, setShowImages ] = useState<string[]>([]);
  const navigate = useNavigate();
  const { theme } = useSelector((state: RootState) => state.theme);
  const [ textCount, setTextCount ] = useState(0);

  useEffect(() => {
    if (!login) {
      navigate("/");
    };
  }, [login]);

  useEffect(() => {
    const getReviewInfo = async () => {
      try {
        const response = await axios.get(`${origin_URL}/review/${param.pId}`);
        dispatch(setNewContent(response.data));
        setTextCount(response.data.reviewContent.length);
        setShowImages(response.data.productImages);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          if (error.response?.data.message === "internal error") {
            navigate("/error/not_found");
          };
        };
      };
    };

    getReviewInfo();
  }, []);

  const handleOption = () => {
    setOption(!option);
  };

  const changeCategory = (name: categoryType) => {
    dispatch(setCategory(name));
    setOption(!option);
  };

  const imagePreview = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imgFiles = e.target.files;
    if (!imgFiles) return;
    let imgUrls = [ ...showImages ];  // 기존에 업로드 했던 이미지 보존 
    const filesArray = Array.from(imgFiles);  // 새로 추가된 파일 배열로 변환
    for (let i = 0; i < imgFiles.length; i++) {
      if (imgUrls.length >= 4) {
        filesArray.splice(i);
        console.log('사용자가 업로드한 img 파일 : ', imgFiles);
        break;  // 이미지 개수는 최대 4개
      }
      imgUrls.push(URL.createObjectURL(imgFiles[i]));
    };
    setShowImages(imgUrls);

    // 이전에 새로 추가한 이미지를 유지한채 또다시 새로 추가한 이미지가 있으면 추가
    const combinedFilesArray = Array.from(newContent.newProductImages || []);
    combinedFilesArray.push(...filesArray);

    // combinedFilesArray를 FileList 타입의 값으로 변환 
    const dataTransfer = new DataTransfer();
    Array.from(combinedFilesArray).forEach((file) => {
      dataTransfer.items.add(file);
    });

    const newImgFiles = dataTransfer.files;

    dispatch(setNewProductImages(newImgFiles));
  };

  const handleDeleteImage = (idx: number) => {
    let prevImageCount = 0;
    showImages.map(imageUrl => {
      if (imageUrl.slice(0, 4) !== "blob") {
        prevImageCount++;
      };
    });

    // 미리보기 이미지 중 삭제한게 수정페이지에서 새로 추가한 이미지가 아닌 기존 이미지면 deletedProductImages에 추가하고 productImages 에서는 제거 
    if (showImages[idx].slice(0, 4) !== "blob") {
      let deletedImage = [...(newContent.deletedProductImages || [])];
      let productImages = newContent.productImages || [];
      deletedImage.push(showImages[idx]);
      const newProductImages = productImages.filter(image => !deletedImage.includes(image));
      dispatch(setProductImages(newProductImages));
      dispatch(setDeletedProductImages(deletedImage));
    } else {  // 미리보기 이미지 중 삭제한게 수정페이지에서 새로 추가한 이미지라면 newContent의 newProductImages 에서 제거 
      // 현재 미리보기 이미지 리스트(showImages)에서의 인덱스(idx)와 실제 newContent.newProductImages 에서의 인덱스(index)를 맞추기 위해 idx 에서 prevImageCount 를 빼줌 
      const updatedImages = newContent.newProductImages ? Array.from(newContent.newProductImages).filter((_, index) => index !== idx - prevImageCount) : null;
      dispatch(setNewProductImages(updatedImages as FileList | null));
    }

    // 미리보기 이미지 갱신
    setShowImages(showImages.filter((_, index) => index !== idx));
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 1000) {
      dispatch(setReviewContent(inputValue));
      setTextCount(inputValue.length);
    };
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { reviewTitle, category, productName, productLink, reviewContent } = newContent;
    if (!reviewTitle || !productName || !productLink || !reviewContent || !category || showImages.length <= 0) {
      setAlertModal(true);
      return;
    };
    
    const formData = new FormData();

    formData.append("reviewTitle", newContent.reviewTitle);
    formData.append("category", newContent.category);
    formData.append("productName", newContent.productName);
    formData.append("productLink", newContent.productLink);
    formData.append("reviewContent", newContent.reviewContent);
    formData.append("grade", newContent.grade.toString());  // formData는 문자열만 가능 
    formData.append("userId", newContent.userId);

    // 기존 이미지 파일
    if (newContent.productImages) {
      const productImages = Array.isArray(newContent.productImages) ? newContent.productImages : [newContent.productImages];
      for (let i = 0; i < newContent.productImages.length; i++) {
        if (newContent.productImages[i].slice(0, 4) !== "blob") {
          formData.append("productImages", productImages[i]);
        }
      };
    };

    // 새로 추가한 이미지 파일
    if (newContent.newProductImages) {
      for (let i = 0; i < newContent.newProductImages.length; i++) {
        formData.append("newProductImages", newContent.newProductImages[i]);
      };
    };

    // 기존 이미지 파일중 삭제한 파일
    if (newContent.deletedProductImages) {
      const deletedProductImages = Array.isArray(newContent.deletedProductImages) ? newContent.deletedProductImages : [newContent.deletedProductImages];
      for (let i = 0; i < newContent.deletedProductImages.length; i++) {
        formData.append("deletedProductImages", deletedProductImages[i]);
      };
    };

    console.log(formData);

    // 서버로 전송
    const response = await axios.patch(`${origin_URL}/review/update/${param.pId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (response.data.message === 'success') {
      navigate(`/posts/detail/${param.pId}`);
    };
  };

  return (
      <ReviewCreatePage onSubmit={handleSubmit}>
        <ReviewInfoArea>
          <TextInfoArea>
            <InputArea>
              <InputTitle>제목</InputTitle>
              <InputBox type="text" className="" color={theme === "light" ? "white" : "#626265"} width="100%" height="40px" name="reviewTitle" value={newContent.reviewTitle} onChange={(e) => { dispatch(setReviewTitle(e.target.value)) }} />
            </InputArea>
            <InputArea>
              <InputTitle>카테고리</InputTitle>
              <SelectBox>
                <Seleted theme={theme}><SelectedValue>{newContent.category}</SelectedValue></Seleted>
                <ArrowWrapper onClick={handleOption}><Arrow /></ArrowWrapper>
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
              <InputTitle>제품명</InputTitle>
              <InputBox type="text" className="" color={theme === "light" ? "white" : "#626265"} width="100%" height="40px" name="productName" value={newContent.productName} onChange={(e) => { dispatch(setProductName(e.target.value)) }} />
            </InputArea>
            <InputArea>
              <InputTitle>제품 링크</InputTitle>
              <InputBox type="text" className="" color={theme === "light" ? "white" : "#626265"} width="100%" height="40px" name="productLink" value={newContent.productLink} onChange={(e) => { dispatch(setProductLink(e.target.value)) }} />
            </InputArea>
            <InputArea><InputTitle>별점</InputTitle><Stars mode="edit" grade={newContent.grade} /></InputArea>
          </TextInfoArea>
          <ImageInfoArea>
            <InputArea>
              <PageTitle style={{alignItems: "flex-end"}}>
                <InputTitle>제품 사진</InputTitle>
                <MaxImageText>(최대 4개)</MaxImageText>
              </PageTitle>
              <InputPicture areatheme={theme} isgrid={(showImages.length > 0).toString()}>
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
        <TextInputArea>
          <InputTitle>리뷰</InputTitle>
          <TextBox className="" color={theme === "light" ? "white" : "#626265"} width="100%" name="reviewContent" value={newContent.reviewContent} onChange={handleTextAreaChange} />
          <TextLimit>{`( ${textCount} / 1000 )`}</TextLimit>
        </TextInputArea>
        <ButtonArea>
          <CompleteButton buttontype="cancel" type="button" onClick={ () => { navigate(-1) } }>취소</CompleteButton>
          <CompleteButton buttontype="write" type="submit">등록</CompleteButton>
        </ButtonArea>
        { alertModal && <AlertModal mode="createAlert" setAlertModal={setAlertModal} />}
      </ReviewCreatePage>
  )
}