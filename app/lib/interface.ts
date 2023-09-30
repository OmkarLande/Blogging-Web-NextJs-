export interface Post {
    title: string;
    overview: string;
    content: TypeObject;
    _id: string;
    slug: {
        current: string;
    };
    author: TypeObject;
    _createdAt: string;
}
export interface TypeObject  {
    _type:string;
    _key: string;
}