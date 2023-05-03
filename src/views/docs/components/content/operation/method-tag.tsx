import React from 'react'

interface MethodTagProps {
  method: 'get' | 'post' | 'put' | 'patch' | 'delete'
}

const MethodTag: React.FC<MethodTagProps> = ({ method }) => {
  return (
    <span
      style={{
        backgroundColor: '#EDEDED',
        color: '#374151',
        letterSpacing: '0.01em',
        fontSize: '12px',
        lineHeight: '15px',
        fontWeight: 600,
        padding: '4px 6px'
      }}
    >
      {method.toUpperCase()}
    </span>
  )
}

export default MethodTag
