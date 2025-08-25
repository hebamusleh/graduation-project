import React from 'react'
import { getUser } from '../../_actions/getUser';
import SettingsPage from './SettingPage';

export default async function page() {
  const user = await getUser();
  return (
    <SettingsPage user={user}/>
  )
}
