import { slugify } from "$lib/utils";
import { depData } from "../data";
import type {Entry} from "$lib/utils";
import type { PageLoad } from "../$types";

export const load: PageLoad = ({params}) =>{

    const {slug} = params as {slug:string};

    // get the entry with the appropriate name
    const entry: Entry | undefined = depData.find((entry) => slugify(entry.cardInfo.departmentName) === slug) as Entry | undefined;

    if(!entry) {
        // convert to redirect later
        throw new Error("Service not found"); 
    }
    
    return {entry};
}
