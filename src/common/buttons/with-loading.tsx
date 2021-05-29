import Button, { ButtonProps } from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import classNames from 'classnames';
import Lottie, { LottieComponentProps } from 'lottie-react';

import groovyWalkAnimation from '../utils/loading.json';

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
  },
  loading: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'inherit',
  },
  label: ({ isLoading }: { isLoading?: boolean }) => ({
    visibility: isLoading ? 'hidden' : 'visible',
  }),
  loader: {
    height: '100%',
    backgroundColor: 'inherit',
  },
}));

type OwnProps = {
  isLoading?: boolean;
  loaderColor?: string;
  lottieProps?: LottieComponentProps;
};

type Props = OwnProps & ButtonProps;

const WithLoading: React.FC<Props> = ({
  children,
  lottieProps,
  isLoading,
  disabled,
  loaderColor,
  className,
  ...otherProps
}) => {
  const classes = useStyles({ isLoading });

  return (
    <Button className={classNames(classes.root, className)} {...otherProps} disabled={disabled || isLoading}>
      {isLoading && (
        <div className={classes.loading}>
          <Lottie className={classes.loader} animationData={groovyWalkAnimation} color={loaderColor} {...lottieProps} />
        </div>
      )}
      <span className={classes.label}>{children}</span>
    </Button>
  );
};

export default WithLoading;
