import React, { useContext, useEffect } from 'react'
import useSWR from 'swr'
import Avatar from 'components/ui/avatar';
import { UserContext } from 'app/contexts/contexts'
import { fetcher } from 'app/services/dummyapi';

const User = () => {

  const [user, setUser] = useContext(UserContext);

  const { data, error } = useSWR('/user/' + user.id, fetcher);

  useEffect(() => {
    if(data && user.id === data.id) {
      setUser(data);
    }
  }, [data]);

  if (error) {
    return <div>Error</div>
  }

  return (
    <div>
      <code>
        {JSON.stringify(user, null, 2)}
      </code>
    </div>
  )
}

export default User
