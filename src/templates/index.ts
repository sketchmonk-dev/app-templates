import type { Template } from "../types";

import bookable from "./bookable";

type Templates = {
    version: string;
    templates: Template[];
}

const templates: Templates = {
    version: '2',
    templates: [
        bookable
    ],
}

export default templates;