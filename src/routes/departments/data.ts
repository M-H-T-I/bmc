

export const depData: Entry[] = [
    {
        cardInfo:{
            departmentName: "Nephrology Department",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porttitor volutpat sem nec hendrerit. Sed fermentum consectetur tincidunt. Quis euismod libero velit id ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            imgAlt: "empty",
            imgPath: "",
        },
        pageInfo:{  
            desc: `The Section of Cardiothoracic & Vascular Surgery under the Department of Surgery at the Hameed Latif Hospital provides quality care for common and complex cardiothoracic (involving heart, lungs, and other organs in the chest) & vascular conditions (such as blockages in the arteries and veins, blood clots, and any other disorder requiring the surgical intervention of blood vessels). 
            
            The field of cardiovascular surgery is extremely diverse, demanding technical specialties, which our trained cardio vascular surgeon excels in. In the operating room, our specialized surgeons, physicians, ECG technicians, and nursing staff provide compassionate care, streamlined services using the latest technologies, resulting in excellent outcomes. 

The department takes pride in its skilled staff, backed by modern cardiac and vascular surgery services, a state-of-the-art multipurpose Operation Theatre, and a fully equipped Coronary Care Unit and Cardiothoracic ICU (CCU) for critical patients. Our department performs a wide range of surgeries, from the repair of congenital heart defects in infants to bypass of heart surgery in octogenarians. Our multidisciplinary team includes highly qualified surgeons, anesthetists, technicians, perfusionists, and nurses. For emergency patients, we have a 24-hour Accident & Emergency Centre and a specialized team for stabilization and treatment.`,
            images: [{path: "/images/services/nephrology/department-images/img1.webp", alt:"equipment (beds) in department"}, {path: "/images/services/nephrology/department-images/img2.jpg", alt: "medicine storage in deprtment"}],
            serviceList: ["Ureter replacement", "Penile implants", "Get a Life treatment", "We will charge you service", "Provision of water bottle", "Cancer treatments"],
            doctorList: [{name: "Doctor Ahmed", imgPath: "/images/services/nephrology/doctors/doctor1.jpg", imgAlt: "doctor nazir", socialLink: "#"}, {name: "Doctor Mehreen", imgPath: "/images/services/nephrology/doctors/doctor2.jpg", imgAlt: "portrait of doctor mehreen", socialLink: "#"}]
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