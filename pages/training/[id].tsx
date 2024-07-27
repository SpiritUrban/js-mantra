import { useRouter } from 'next/router';

const BlogPost = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>training: {id}</h1>
    </div>
  );
};

export default BlogPost;
