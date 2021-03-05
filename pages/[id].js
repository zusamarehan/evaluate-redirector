import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>The ID is {id} </div>
  );
  
}

export default NotFound;
