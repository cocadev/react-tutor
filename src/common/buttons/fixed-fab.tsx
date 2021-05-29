import { darken, makeStyles, SvgIconTypeMap, Theme } from '@material-ui/core';
import Fab, { FabProps } from '@material-ui/core/Fab';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import _noop from 'lodash/fp/noop';
import React, { Fragment } from 'react';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) => ({
  fab: {
    color: theme.palette.common.white,
    zIndex: 1000,
    position: 'fixed',
    bottom: theme.spacing(2),
    left: theme.spacing(2),
    alignSelf: 'flex-end',
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: darken(theme.palette.primary.main, 0.1),
    },
  },
}));

type OwnProps = {
  /**
   * Button id for testing
   */
  fabId?: string;
  /**
   * Custom Icon element, default is MenuIcon
   */
  Icon?: OverridableComponent<SvgIconTypeMap>;
};

/**
 * Fixed fab button located in the right bottom
 */
const FixedFab: React.FC<OwnProps & Omit<FabProps, 'children'>> = ({
  fabId,
  onClick = _noop,
  Icon = MenuIcon,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Fab id={fabId} className={classes.fab} onClick={onClick} {...rest}>
        <Icon />
      </Fab>
    </Fragment>
  );
};

export default FixedFab;
