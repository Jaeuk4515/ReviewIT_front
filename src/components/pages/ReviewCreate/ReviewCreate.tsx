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
  CompleteButton
} from "./ReviewCreate.styles";
import arrow from "../../../assets/icons/bottom-arrow.svg";
import TextArea from "../../atoms/TextArea/TextArea";
import camera from "../../../assets/icons/camera.svg";
import { PageDes, PageTitle } from "../Home/Home.styles";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import x_button from "../../../assets/icons/x-button.svg";
import getUserInfo from "../../../services/getUserInfo";
import { authContext } from "../../../App";
import { useNavigate } from "react-router-dom";
import AlertModal from "../../blocks/AlertModal/AlertModal";
import { Img } from "../../atoms/Category/Category.styles";

export interface content {
  userId: string;
  reviewTitle: string;
  category: string;
  productName: string;
  productLink: string;
  productImages: FileList | null;
  reviewContent: string;
  grade: 0 | 1 | 2 | 3 | 4 | 5;
}

export const starContext = createContext<{ content: content; setContent: React.Dispatch<React.SetStateAction<content>>; }>({
  content: {
    userId: "",
    reviewTitle: "",
    category: "",
    productName: "",
    productLink: "",
    productImages: null,
    reviewContent: "",
    grade: 0,
  },
  setContent: () => {},
});

export default function ReviewCreate() {
  const [ option, setOption ] = useState(false);
  const [ content, setContent ] = useState<content>({
    userId: "",
    reviewTitle: "",
    category: "",
    productName: "",
    productLink: "",
    productImages: null,
    reviewContent: "",
    grade: 0,
  });
  const { isLogin, setIsLogin } = useContext(authContext)!;
  const [ alertModal, setAlertModal ] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // 로그인 중인데 리뷰 작성 페이지에서 브라우저를 새로고침 하면 isLogin이 false로 되서 튕김.. 왜이런지 모르겠다. 리렌더링 되도 그러네
    // if (!isLogin) { 
    //   alert("로그인이 필요한 서비스입니다.");
    //   navigate("/");
    // }
    const getData = async () => {
      const userInfo = await getUserInfo();
      console.log(userInfo);
      setContent({
        ...content,
        userId: userInfo._id
      });
    };

    getData();
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent({
      ...content,
      [e.target.name]: e.target.value,
    });
  }

  console.log(content);
  console.log('alertModal : ', alertModal);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { reviewTitle, category, productName, productLink, productImages, reviewContent } = content;
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
    formData.append("grade", content.grade.toString()); // formData는 문자열만 가능 
    formData.append("userId", content.userId);
    // 이미지 파일 추가
    if (content.productImages) {
      for (let i = 0; i < content.productImages.length; i++) {
        formData.append("productImages", content.productImages[i]);
      }
    }
    // 서버로 전송
    const response = await axios.post("http://localhost:3001/review/create", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response);
    if (response.data.message === 'success') {
      navigate(`/posts/detail/${response.data.reviewId}`);
      // console.log(response.data.reivewId);
    }
  }

  const handleOption = () => {
    setOption(!option);
  }

  const changeCategory = (name: "컴퓨터" | "노트북" | "핸드폰" | "가전제품") => {
    setContent({
      ...content,
      category: name, 
    });
    setOption(!option);
  }

  const [ showImages, setShowImages ] = useState<string[]>([]);

  const imagePreview = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imgFiles = e.target.files;
    if (!imgFiles) return;
    let imgUrls = [];
    for (let i = 0; i < imgFiles.length; i++) {
      imgUrls.push(URL.createObjectURL(imgFiles[i]));
    }
    console.log(imgUrls);
    setShowImages(imgUrls);
    setContent({
      ...content,
      productImages: imgFiles
    })
  }

  const handleDeleteImage = (idx: number) => {
    setShowImages(showImages.filter((_, index) => index !== idx));
    const updatedImages = content.productImages ? Array.from(content.productImages).filter((_, index) => index !== idx) : null;
    setContent({
      ...content,
      productImages: updatedImages as FileList | null,
    })
  }

  return (
    <starContext.Provider value={{ content, setContent }}>
      <ReviewCreatePage onSubmit={handleSubmit}>
        <ReviewInfoArea>
          <TextInfoArea>
            <InputArea>
              <h3>제목</h3>
              <Input type="text" className="" color="white" width="100%" height="40px" name="reviewTitle" value={content.reviewTitle} onChange={handleChange} />
            </InputArea>
            <InputArea>
              <h3>카테고리</h3>
              <SelectBox>
                <Seleted><SelectedValue>{content.category}</SelectedValue></Seleted>
                <Arrow category={arrow} onClick={handleOption} />
                <OptionBox on={option.toString()}>
                  <Option onClick={() => changeCategory("컴퓨터")}>컴퓨터</Option>
                  <Option onClick={() => changeCategory("노트북")}>노트북</Option>
                  <Option onClick={() => changeCategory("핸드폰")}>핸드폰</Option>
                  <Option onClick={() => changeCategory("가전제품")}>가전제품</Option>
                </OptionBox>
              </SelectBox>
            </InputArea>
            <InputArea>
              <h3>제품명</h3>
              <Input type="text" className="" color="white" width="100%" height="40px" name="productName" value={content.productName} onChange={handleChange} />
            </InputArea>
            <InputArea>
              <h3>제품 링크</h3>
              <Input type="text" className="" color="white" width="100%" height="40px" name="productLink" value={content.productLink} onChange={handleChange} />
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
                    <PictureIcon category={camera} />
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
          <TextArea color="white" width="100%" height="400px" fontSize="18px" name="reviewContent" value={content.reviewContent} onChange={handleChange} />
        </InputArea>
        <ButtonArea>
          <CompleteButton buttontype="cancel">취소</CompleteButton>
          <CompleteButton buttontype="write" type="submit">등록</CompleteButton>
        </ButtonArea>
        { alertModal && <AlertModal setAlertModal={setAlertModal} />}
      </ReviewCreatePage>
    </starContext.Provider>
  )
}