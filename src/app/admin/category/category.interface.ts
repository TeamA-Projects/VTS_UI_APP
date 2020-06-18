export interface ICategory {
    CategoryID: number,
    CategoryName: string,
    AdditionalInfo?: string,
}

export interface ICategories extends Array<ICategory> {}
