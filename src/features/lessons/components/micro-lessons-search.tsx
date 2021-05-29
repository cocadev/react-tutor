import { useQuery } from '@apollo/client';
import grey from '@material-ui/core/colors/grey';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import InputAdornment from '@material-ui/core/InputAdornment';
import { lighten, makeStyles, Theme } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import React, { useMemo, useState } from 'react';
import isURL from 'validator/lib/isURL';

import { Cards, Chips, Forms, Loaders } from '../../../common';
import { GET_TAGS } from '../../../gql/contents/queries/tags';
import { MicroLessonModel, TagModel } from '../../../ts-types/content';
import { useCustomScroll } from '../../../styles/theme/customScroll';

const useStyles = makeStyles((theme: Theme) => ({
  searchBox: {
    maxHeight: theme.spacing(50),
    padding: theme.spacing(1),
    borderRadius: theme.spacing(1),
    backgroundColor: grey[100],
  },
  mlContainer: {
    paddingBottom: theme.spacing(0.5),
  },
  ml: {
    textAlign: 'left',
    borderWidth: 1,
    borderColor: grey[400],
    borderStyle: 'solid',
    width: '100%',
    borderRadius: theme.spacing(1.5),
    '&:focus': {
      backgroundColor: lighten(theme.palette.primary.main, 0.8),
    },
    '&:hover': {
      backgroundColor: lighten(theme.palette.primary.main, 0.8),
    },
  },
  active: {
    backgroundColor: lighten(theme.palette.primary.main, 0.5),
  },
  title: {
    textAlign: 'left',
    padding: theme.spacing(1),
    fontWeight: 600,
  },
  subtitle: {
    padding: theme.spacing(1),
  },
  noResults: {
    textAlign: 'center',
    color: grey[600],
    padding: theme.spacing(1, 0),
  },
}));

type State = {
  ml: string;
  tag: string;
};

const INITIAL_STATE: State = {
  ml: '',
  tag: '',
};

type Props = {
  loading?: boolean;
  microLessons: MicroLessonModel[];
  selectedMLIds: string[];
  setMLId: (id: string) => void;
  setTag: (tag: string) => void;
};

const MircoLessonsSearch: React.FC<Props> = ({ microLessons, loading, selectedMLIds, setMLId, setTag }) => {
  const [state, setState] = useState(INITIAL_STATE);
  const scrollClasses = useCustomScroll();
  const classes = useStyles();
  const { data: allTags } = useQuery<{ getTags: TagModel[] }>(GET_TAGS);

  const tags = useMemo(() => allTags?.getTags || [], [allTags]);

  const filteredMicroLessons = useMemo(
    () =>
      microLessons.filter(
        item =>
          item.content?.description?.toLowerCase()?.includes(state.ml?.toLowerCase() || '') ||
          item.content?.data?.toLowerCase()?.includes(state.ml?.toLowerCase() || '') ||
          item.tags?.map(item => item.text)?.includes(state.ml?.toLowerCase() || '')
      ),
    [microLessons, state]
  );

  const handleState = (type: keyof State) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setState({ ...state, [type]: e.target.value });

  const onSetMLId = (id: string) => () => setMLId(id);

  const onSetTag = (tag: string) => () => setTag(tag);

  return (
    <>
      <Forms.BaseInput
        label={`Micro Lessons (Total: ${microLessons?.length})`}
        placeholder="Search for microlessons"
        value={state.ml}
        onChange={handleState('ml')}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="primary" />
            </InputAdornment>
          ),
        }}
      />
      {loading ? (
        <Loaders.Basic />
      ) : (
        <Grid className={clsx(classes.searchBox, scrollClasses.scroll)}>
          {filteredMicroLessons.length ? (
            filteredMicroLessons.map(ml => (
              <Grid key={ml._id} className={classes.mlContainer}>
                <ButtonBase
                  className={clsx(classes.ml, selectedMLIds.includes(ml._id) && classes.active)}
                  onClick={onSetMLId(ml._id)}
                >
                  <Grid container direction="column">
                    {isURL(`${ml.content?.data}`) ? (
                      <Cards.Video data={ml.content?.data} preventClick />
                    ) : (
                      <Typography className={classes.title}>{ml.content?.data}</Typography>
                    )}
                    {ml.content?.description ? (
                      <Typography className={classes.subtitle} variant="body2">
                        {ml.content?.description}
                      </Typography>
                    ) : null}
                  </Grid>
                </ButtonBase>
              </Grid>
            ))
          ) : (
            <Grid>
              <Typography variant="h3" className={classes.noResults}>
                No results...
              </Typography>
            </Grid>
          )}
        </Grid>
      )}

      <div className="mt-25">
        <Forms.BaseInput
          label={`Tag Search (Total: ${tags.length})`}
          placeholder="Search for tags"
          value={state.tag}
          onChange={handleState('tag')}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="primary" />
              </InputAdornment>
            ),
          }}
        />
        <Grid>
          {state.tag &&
            tags
              .filter(tag => tag.text.includes(state.tag))
              .map(tag => <Chips.Base clickable onClick={onSetTag(tag.text)} key={tag._id} label={tag.text} />)}
        </Grid>
      </div>
    </>
  );
};

export default MircoLessonsSearch;
