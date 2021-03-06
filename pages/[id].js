import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
  const router = useRouter();
  const { id } = router.query;
  
  useEffect(() => {
    router.push('https://getevaluate.app/session/'+id) 
  }, [id])
  
  return (
    <div>Loading quiz...</div>
  );
  
}

export default NotFound;
