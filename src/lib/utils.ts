export function slugify(inputText: string): string{
    
    return inputText.toLowerCase().replace(/\s+/g, "-");

}




export interface Entry{
    cardInfo: Card,
    pageInfo: Page
}

export interface Card{
    departmentName: string,
    desc: string,
    imgPath: string,
    imgAlt: string,
}

export interface Page{

    desc: string,
    serviceList: string[],
    doctorList: DoctorInfo[],
    images: DepartmentPhoto[]

}

export interface DepartmentPhoto{
    path: string,
    alt: string
}

export interface DoctorInfo{
    name: string,
    imgPath: string,
    imgAlt: string,
    socialLink: string
}