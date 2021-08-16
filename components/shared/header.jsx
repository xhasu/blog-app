import React from 'react'
import { useSession, signOut } from 'next-auth/client'

const Header = () => {
  
  const [session, loading] = useSession()

  if (loading) return null

  if (!loading && !session) return null

  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-profile">
          <div className="navbar-profile-avatar">
            <img src={session.user.image} alt="" />
          </div>
          <div>
            <div className="navbar-profile-name">{session.user.name}</div>
            <div className="navbar-profile-email">{session.user.email}</div>
          </div>
        </div>
        <div className="navbar-auth">
          <span onClick={() => {signOut()}}>Logout</span>
        </div>
      </nav>
    </header>
  )
}

export default Header
