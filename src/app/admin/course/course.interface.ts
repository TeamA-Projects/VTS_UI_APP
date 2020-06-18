export interface ICourse {
    CourseID: number,
    CourseName: string,
    CourseTypeID: number,
    CourseType: string,
    AdditionalInfo?: string
}

export interface ICourses extends Array<ICourse> {}
