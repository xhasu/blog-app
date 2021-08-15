import React, { useContext, useEffect } from 'react'
import useSWR from 'swr'
import Avatar from 'components/ui/avatar';
import { UserContext } from 'app/contexts/contexts'
import { fetcher } from 'app/services/dummyapi';


export const UserDetail = ({ data }) => {

  const {
    registerDate = '',
    gender = '',
    email = '',
    phone = '',
    location: {
      country = '',
      city = '',
    } = {}
  } = data || {};

  return (
    <div className="profile-detail">
      <div className="profile-email">{email}</div>
      <div className="profile-phone">{phone}</div>
      <hr />
      <address>
        <h4>{country}</h4>
        <div>{city}</div>
      </address>
    </div>
  )
}

const User = () => {

  const [user, setUser] = useContext(UserContext);

  const { data, error } = useSWR('/user/' + user.id, fetcher);

  useEffect(() => {
    if (data && user.id === data.id) {
      setUser(data);
    }
  }, [data]);

  if (error) {
    return <div>Error</div>
  }

  return (
    <div className="profile">
      <div className="profile-avatar">
        <Avatar src={user.picture} type="profile" />
      </div>
      <div className="profile-name">{user.firstName} {user.lastName}</div>
      {data && <UserDetail data={data} />}
    </div>
  )
}

export default User