import { PageObject } from "../store/pageSlice";

class PageControl {
  constructor(
    private page: number,
    private pageInfo: PageObject,
    private searchParams: URLSearchParams,
    private setSearchParams: (searchParams: URLSearchParams) => void
  ) {};

  public handlePageChange = (newPage: number) => {
    this.searchParams.set("page", String(newPage));
    this.setSearchParams(this.searchParams);
  };

  public moveToPrevPage = () => {
    if (this.page === 1) return;
    this.searchParams.set("page", String(this.page-1));
    this.setSearchParams(this.searchParams);
  };

  public moveToNextPage = () => {
    if (this.page === this.pageInfo.totalPage) return;
    this.searchParams.set("page", String(this.page+1));
    this.setSearchParams(this.searchParams);
  };

  public moveToFirstPage = () => {
    if (this.page === 1) return;
    this.searchParams.set("page", "1");
    this.setSearchParams(this.searchParams);
  };

  public moveToLastPage = () => {
    if (this.page === this.pageInfo.totalPage) return;
    this.searchParams.set("page", String(this.pageInfo.totalPage));
    this.setSearchParams(this.searchParams);
  };
};

export default PageControl;