import React from 'react'
import {Stack, Text} from '@sanity/ui'
export default function Preview({document: {published}, documentId}: any) {
  if (published) {
    return (
      <Stack padding={4}>
        <pre>
          <code>{JSON.stringify(published, null, 2)}</code>
        </pre>
      </Stack>
    )
  }

  return (
    <Stack
      padding={4}
      margin={4}
      style={{
        backgroundColor: 'rgba(555,122,122,0.2)',
        border: '1px solid #e11d48',
        borderRadius: '0.25rem',
        height: '12rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{
          color: 'f87171',
        }}
      >
        <path
          fillRule="evenodd"
          d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
          clipRule="evenodd"
        />
      </svg>

      <Text
        style={{
          color: '#f87171',
          textAlign: 'center',
          letterSpacing: '0.3em',
        }}
        weight="bold"
      >
        NOTHING FOUND!
      </Text>
      <Text
        style={{
          color: '#fff',
          textAlign: 'center',
          padding: '12px',
          fontSize: '12px',
        }}
        weight="bold"
      >
        You need to `Publish` document to see result!
      </Text>
    </Stack>
  )
}
