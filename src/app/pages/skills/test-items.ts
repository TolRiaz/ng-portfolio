export interface ACCORDION_ITEM_INFO {
    name : string,
    percentage?: number,
}
export interface ACCORDION_ITEM {
    section : string,
    info : Array<ACCORDION_ITEM_INFO>
}

export const ACCORDION_ITEMS: Array<ACCORDION_ITEM> = [
    {
        "section": "Cloud",
        "info": [{
            "name": "LxD",
            "percentage": 80
        },
        {
            "name": "Kubernetes",
            "percentage": 70
        },
        {
            "name": "Desktop as a Service",
            "percentage": 80
        }]
    },
    {
        "section": "AI",
        "info": [{
            "name": "Darknet - Yolo",
            "percentage": 90
        },
        {
            "name": "Stable-Diffusion",
            "percentage": 60
        }]
    },
    {
        "section": "Backend",
        "info": [{
            "name": "Go-lang",
            "percentage": 80
        },
        {
            "name": "Python",
            "percentage": 80
        }] 
    },
    {
        "section": "Frontend",
        "info": [{
            "name": "React",
            "percentage": 60
        },
        {
            "name": "Angular",
            "percentage": 70
        }]
    },
    {
        "section": "Skills",
        "info": [{ "name": "API server" }, { "name": "grpc" }]
    }
]