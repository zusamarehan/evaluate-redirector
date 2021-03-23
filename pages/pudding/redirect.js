import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const PuddingRedirect = () => {
  const router = useRouter();
  const { id } = router.query;
  
  useEffect(() => {
    router.push('https://apps.pudding.test/asdfcallback/run') 
  }, [id])
  
  return (
    <div>Loading quiz...</div>
  );
  
}

export default PuddingRedirect;
