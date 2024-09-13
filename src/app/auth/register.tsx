import { View, Text } from 'react-native'
import React from 'react'
import RegisterView from '@/src/components/views/auth/register'

const RegisterPage = () => {
  return (
    <View style={{ flex: 1 }}>
      <RegisterView />
    </View>
  )
}

export default RegisterPage