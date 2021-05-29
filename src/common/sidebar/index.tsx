import { useMediaQuery } from '@material-ui/core';
import React, { ReactNode, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import { ROUTES } from '../../constants/routes';
import { useAuth } from '../../hooks';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import { Logo, Icons, Buttons } from '../../common';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: theme.spacing(30),
    flexShrink: 0,
  },
  drawerPaper: {
    width: theme.spacing(30),
  },
  logo: {
    padding: theme.spacing(2, 0),
    [theme.breakpoints.down('xs')]: {
      padding: 0,
    },
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'grey',
  },
  item: {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    height: theme.spacing(7),
    margin: theme.spacing(0.25, 1),
    paddingLeft: theme.spacing(2),
    borderRadius: theme.spacing(1.5),
    background: 'transparent',
    fontWeight: 600,
    color: 'grey',
    transition: 'all .25s',
    [theme.breakpoints.down('xs')]: {
      height: theme.spacing(6),
    },
    '&:hover': {
      background: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
    '&:active': {
      background: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
    '&:focus': {
      background: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
  },
  icon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    width: theme.spacing(3),
    height: theme.spacing(3),
    marginRight: theme.spacing(2),
    fontSize: 0,
  },
  active: {
    background: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
}));

const Sidebar = () => {
  const [opened, setOpened] = useState(false);
  const classes = useStyles();
  const theme = useTheme();
  const isTemporary = useMediaQuery(theme.breakpoints.down('sm'));
  const { onLogout, isLoggedIn } = useAuth();
  const handleClose = () => setOpened(false);
  const handleOpen = () => setOpened(true);
  const onKeyDownLogout = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onLogout();
    }
  };
  return isLoggedIn ? (
    <>
      <Drawer
        className={classes.root}
        variant={isTemporary ? 'temporary' : 'permanent'}
        anchor="left"
        open={opened}
        onClose={handleClose}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Grid className={classes.logo}>
          <Logo />
        </Grid>
        <Grid className={classes.wrapper}>
          <MenuItem href={ROUTES.overview} icon={<Icons.Overview />} title="Overview" onClick={handleClose} />
          <MenuItem
            href={ROUTES.microLessons}
            icon={<Icons.MicroLesson />}
            title="Micro Lessons"
            onClick={handleClose}
          />
          <MenuItem href={ROUTES.lessons} icon={<Icons.MicroLesson />} title="Lesson Plan" onClick={handleClose} />
          <MenuItem href={ROUTES.courses} icon={<Icons.MicroLesson />} title="Courses" onClick={handleClose} />
          <MenuItem href={ROUTES.campaigns} icon={<Icons.Campaigns />} title="Campaigns" onClick={handleClose} />
          <MenuItem href={ROUTES.payout} icon={<Icons.Payouts />} title="Payouts" onClick={handleClose} />
          <MenuItem href={ROUTES.statements} icon={<Icons.Statements />} title="Statements" onClick={handleClose} />
          <MenuItem href={ROUTES.settings} icon={<Icons.Settings />} title="Settings" onClick={handleClose} />
          <Grid role="button" tabIndex={0} onClick={onLogout} onKeyDown={onKeyDownLogout} className={classes.item}>
            <Grid className={classes.icon}>
              <Icons.Logout />
            </Grid>
            <span>{'Sign Out'}</span>
          </Grid>
        </Grid>
      </Drawer>
      {isTemporary ? <Buttons.FixedFab onClick={handleOpen} /> : null}
    </>
  ) : null;
};

export default Sidebar;

type Props = {
  href: string;
  title: string;
  icon: ReactNode;
  onClick?: () => void;
};

function MenuItem({ href, title, icon, onClick }: Props) {
  const classes = useStyles();
  return (
    <NavLink activeClassName={classes.active} to={href} className={classes.item} onClick={onClick}>
      <Grid className={classes.icon}>{icon}</Grid>
      <span>{title}</span>
    </NavLink>
  );
}
