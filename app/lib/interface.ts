export interface Post {
    title: string;
    overview: string;
    content: TypeObject;
    _id: string;
    slug: {
        current: string;
    };
    author: string;
    image: string;
    _createdAt: string;
}
export interface TypeObject  {
    _type:string;
    _key: string;
}