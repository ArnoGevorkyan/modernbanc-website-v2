// import { Image } from '@mantine/core'
import React, { useMemo } from 'react'
import Image from 'next/image'
import object_icon from '~/images/object-icon.svg'

interface SchemaIconProps {
  icon?: React.ReactNode
  size?: 'sm' | 'base'
  color?: string
  is_search_item?: boolean
}

export const SchemaIcon: React.FC<SchemaIconProps> = ({ icon, size = 'base', color = '#D4D4D8', is_search_item = false }) => {
  const width = size === 'sm' || is_search_item ? 16 : 17.5
  const height = width

  // import logo from '~/images/mdb-logo.png'

  const final_icon = useMemo(() => {
    return icon ?? <Image style={{ width, color }} alt="Object icon" src={object_icon} />
  }, [icon, is_search_item])

  return (
    <div
      style={{
        width,
        height,
        color,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {final_icon}
    </div>
  )
}

export default SchemaIcon
