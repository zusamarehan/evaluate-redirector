import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
  const router = useRouter();
  const { id } = router.query;
  
  useEffect(() => {
    console.log('https://getevaluate.app/redirect/'+id)
    router.push('https://getevaluate.app/redirect/'+id) 
  }, [id])
  
  return (
    <div>The ID is {id} </div>
  );
  
}

export default NotFound;
