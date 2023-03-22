export default function PostDetil({params} : {params: {postId: string}}) {
  return (
    console.log(params),
    <div>Post {params.postId[0]}</div>
  )
}
