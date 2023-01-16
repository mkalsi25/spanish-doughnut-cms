import React from 'react'
import {Stack, Text} from '@sanity/ui'
import QRCode from 'react-qr-code'
export default function Preview({document: {displayed}, documentId}: any) {
  return (
    <Stack padding={4}>
      <QRCode value={documentId} />
      <Text>
        <pre>{JSON.stringify(displayed, null, 1)}</pre>{' '}
      </Text>
    </Stack>
  )
}
