export interface ICategory {
    CategoryID: number,
    CategoryName: string,
    TrendID: number,
    TrendName: string,
}

export interface ICategories extends Array<ICategory> {}
