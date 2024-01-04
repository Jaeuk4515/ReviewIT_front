const sizes = {
  small: "600px",
  medium: "1024px",
  large: "1025px"
};

export const lightTheme = {
  backgroundColor: "#fff",
  textColor: "black",
  headerColor: "#fff",
  footerColor: "#f3f7ff",
  footerText: "#9A9A9A",
  loginButtonColor: "#fff",
  loginTextColor: "#2d2d2d",
  registerButtonColor: "#E8F2FF",
  registerTextColor: "#256FFF",
  writeButtonColor: "#256FFF",
  writeTextColor: "white",
  modalButtonColor: "#256FFF",
  modalLinkText: "#4375F5",
  rightIconColor: "#696969",
  pageButtonColor: "#f3f7ff",
  pageButtonIconColor: "#256FFF",
  searchIconBoxColor: "#89CFF3",
  myPageBgColor: "#F8F8F8",
  selectBoxColor: "#fff",
  arrowColor: "#696969",
  optionBoxColor: "#fff",
  optionHoverColor: "#EAEAEA",
  optionIconColor: "#8A8A8A",
  reviewCardColor: "#F5F5F5",
  commentFormColor: "#F2F8FF",
  commentColor: "#F8F8F8",
  commentIconColor: "#333333",
  noAuthTextColor: "#8D98A4",
  errorTextColor: "#ff1919",
  errorPageTextColor: "#4370FF",
  mediaQuery: {
    small: `screen and (max-width: ${sizes.small})`,
    medium: `screen and (max-width: ${sizes.medium})`,
    large: `screen and (min-width: ${sizes.large})`
  }
};

export const darkTheme = {
  backgroundColor: "#424242",
  textColor: "white",
  headerColor: "#2d2d2d",
  footerColor: "#2d2d2d",
  footerText: "white",
  loginButtonColor: "#2d2d2d",
  loginTextColor: "white",
  registerButtonColor: "#525C69",
  registerTextColor: "white",
  writeButtonColor: "#364F6B",
  writeTextColor: "white",
  modalButtonColor: "#525C69",
  modalLinkText: "white",
  rightIconColor: "white",
  pageButtonColor: "#525C69",
  pageButtonIconColor: "white",
  searchIconBoxColor: "#577886",
  myPageBgColor: "#2d2d2d",
  selectBoxColor: "#626265",
  arrowColor: "#fff",
  optionBoxColor: "#626265",
  optionHoverColor: "#4A4A4A",
  optionIconColor: "#fff",
  reviewCardColor: "#4C4F54",
  commentFormColor: "#50545A",
  commentColor: "#626265",
  commentIconColor: "#fff",
  noAuthTextColor: "#fff",
  errorTextColor: "#ff5e5e",
  errorPageTextColor: "#fff",
  mediaQuery: {
    small: `screen and (max-width: ${sizes.small})`,
    medium: `screen and (max-width: ${sizes.medium})`,
    large: `screen and (min-width: ${sizes.large})`
  }
};

export const theme = {
  lightTheme,
  darkTheme
};