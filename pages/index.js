import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const Home = () => {
  const router = useRouter();
  const { id } = router.query;
  
  useEffect(() => {
    router.push('https://getevaluate.app') 
  }, [id])
  
  return (
    <div>Loading...</div>
  );
  
}

export default Home;
