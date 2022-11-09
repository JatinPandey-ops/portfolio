import { Container, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { getAuth } from "firebase/auth";

export default function LoginPage() {
  return (
    <Container>
        <Stack>
            <Typography>Admin login</Typography>
        </Stack>
    </Container>
  )
}
