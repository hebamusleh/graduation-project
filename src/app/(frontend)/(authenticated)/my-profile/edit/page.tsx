import React from 'react'
import { getUser } from '../../_actions/getUser';
import EditProfilePage from './EditProfilePage';

export default async function page() {
  const user = await getUser();
  return (
    <EditProfilePage user={user}/>
  )
}
