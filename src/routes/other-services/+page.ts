import {depData} from "./data";
import type { Entry } from "$lib/utils";
import type { PageLoad } from "./$types";

export const load: PageLoad = (() => {
    
    return {depData};
}) satisfies PageLoad<{depData: Entry[]}>;

