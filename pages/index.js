import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/'); 
  }, [])
  
  return (
    <div>Hello World</div>
  );
  
}

export default NotFound;
