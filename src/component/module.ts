export type VIDEO_OBJECT={
    id:string,
    snippet:{
        title:string,
        thumbnails:{
            medium:{
                url:string,
                width:number,
                height:number,
            },
            high:{
                url:string,
                width:string,
                height:string,
            }
        },
        channelTitle:string,
    },
    statistics:{
        "viewCount": string,
    }
}
