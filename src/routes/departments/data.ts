export const depData: Entry[] = [
    {
        cardInfo:{
            departmentName: "Nephrology Department",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porttitor volutpat sem nec hendrerit. Sed fermentum consectetur tincidunt. Quis euismod libero velit id ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            imgAlt: "empty",
            imgPath: "",
        },
        pageInfo:{  
            desc: "aadjifuei ajdnjaf a ajdfdnc aaods asjdoiaueocnZL  fjc dioja sadjaj coajoiejc odf odvjodv Pellentesque porttitor volutpat sem nec hendrerit. Sed fermentum consectetur tincidunt. Quis euismod libero velit id ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            serviceList: ["Ureter replacement", "Penile implants", "Get a Life treatment", "We will charge you service", "Provision of water bottle", "Cancer treatments"],
            doctorList: [{name: "Doctor Nazir", imgPath: "/images/services/nephrology/doctors/doctor2.jpg", imgAlt: "doctor nazir"}]
        }       
    }
]

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

}

export interface DoctorInfo{
    name: string,
    imgPath: string,
    imgAlt: string,
    socialLink?: string
}