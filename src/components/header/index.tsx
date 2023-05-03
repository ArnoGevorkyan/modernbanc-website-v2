import React from 'react'
import { Burger } from '@mantine/core'
import useStyles from './styles'
import ModernbancLogo from '~/components/modernbanc-logo'
import RightNav from '../right-navbar'

interface HeaderProps {
  navbar_is_open: boolean
  toggleNavbar: () => void
}

export function Header({ navbar_is_open, toggleNavbar }: HeaderProps) {
  const { classes } = useStyles()
  const burger_title = navbar_is_open ? 'Open navigation' : 'Hide navigation'

  return (
    <div className={classes.header}>
      <div className={classes.mainSection}>
        <Burger
          opened={navbar_is_open}
          className={classes.burger}
          color={'#3D3D3D'}
          size="sm"
          onClick={toggleNavbar}
          title={burger_title}
          aria-label={burger_title}
        />
      </div>
    </div>
  )
}
