export default function Page({ params }) {
    // throw new Error("Error hai");
    //Fetch your blog post by it's slug
    let languages = ["python", "javasript", "java", "c++", "c#", "c"]
    if(languages.includes(params.slug)){
        return <div>My post: {params.slug}</div>
    }else{
        return <div>Post not found</div>
    }
    // return <div>My Post: {params.slug}</div>
}