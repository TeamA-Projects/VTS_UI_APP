export interface ICourseType {
    CourseTypeID: number,
    CourseType: string,
    CategoryID: number,
    CategoryName: string
}

export interface ICourseTypes extends Array<ICourseType> {}
