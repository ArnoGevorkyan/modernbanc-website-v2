import { Box, Text } from '@mantine/core'
import React from 'react'
import useStyles from './styles'

export interface VideoEmbedProps {
  videoLink: string
  title: string
  description: string
}

export const VideoEmbed: React.FC<VideoEmbedProps> = ({ title, videoLink, description }) => {
  const { classes } = useStyles()
  return (
    <>
      <Box className={classes.header}>
        <Text className={classes.title}>{title}</Text>
        <Text className={classes.description}>{description}</Text>
      </Box>
      <Box>
        <iframe className={classes.videoWrapper} src={videoLink} />
      </Box>
    </>
  )
}

export default VideoEmbed
