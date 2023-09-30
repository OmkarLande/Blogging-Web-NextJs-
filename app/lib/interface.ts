export interface Post {
    title: string;
    overview: string;
    content: string;
    _id: string;
    slug: {
        current: string;
    };
    author: string;
    image: string;
    _createdAt: string;
}