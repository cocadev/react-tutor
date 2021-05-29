import React, { useState, useEffect } from 'react';
import { Typography, Box, Button, makeStyles } from '@material-ui/core';
import { CREATE_COURSE, UPDATE_COURSE } from './gql/mutations';
import { useHistory } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';
import { useSelector } from 'react-redux';
import Lottie from 'lottie-react';
import groovyWalkAnimation from '../../common/utils/loading.json';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { GET_LESSONS_QUERY } from '../lessons/gql/queries';
import { useMutation, useQuery } from '@apollo/client';
import { Cards } from '../../common';
import { IMAGES } from '../../common/data/images';
import { ROUTES } from '../../constants/routes';

const CreateCourse = (props: any) => {
  const history = useHistory();
  const [title, setTitle] = useState();
  const [nav, setNav] = useState<boolean>(false);
  const [startDate, setStartDate] = useState<any>(new Date());
  const [endDate, setEndDate] = useState<any>(new Date());
  const [courseId, setCourseId] = useState<any>('');
  const [searchKey, setSearchKey] = useState<any>();
  const [lessonIds, setLessonIds] = useState<any>([]);
  const classes = useStyles();

  const [createCourse, { loading: mutationCreateLoading }] = useMutation(CREATE_COURSE);
  const [updateCourse, { loading: mutationUpdateLoading }] = useMutation(UPDATE_COURSE);
  const { data: allLessons } = useQuery(GET_LESSONS_QUERY);

  const defaultLessons = allLessons?.me?.createdLessons;
  const microLessons = allLessons?.me?.createdLessons
    .slice()
    .sort((a: any, b: any) => b.id - a.id)
    .filter(
      (item: any) =>
        item.description?.toLowerCase()?.includes(searchKey?.toLowerCase() || '') ||
        item.title?.toLowerCase()?.includes(searchKey?.toLowerCase() || '') ||
        item.tags.map((item: any) => item.text)?.includes(searchKey?.toLowerCase() || '')
    );

  const courseReducer = useSelector((state: any) => state.courseReducer);

  const loading = mutationCreateLoading || mutationUpdateLoading;

  useEffect(() => {
    if (courseReducer?.course) {
      const { course } = courseReducer;
      const { description, id, start_date, end_date, navigation } = course;
      setTitle(description);
      setCourseId(id);
      setStartDate(new Date(start_date));
      setStartDate(new Date(end_date));
      setNav(navigation === 'random');
      // setMicroIds(microlessons.map((item: any) => item._id));
      // setMicroOldIds(microlessons.map((item: any) => item._id));
    }
  }, [props, courseReducer]);
  // TODO need refactoring
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const onSaving = async () => {
    if (!title) {
      NotificationManager.error('You must add description content!');
      return false;
    }
    if (!courseId) {
      try {
        createCourse({
          variables: {
            createCourseInput: {
              title,
              description: title,
              start_date: startDate,
              end_date: endDate,
              navigation: nav ? 'Random' : 'Seq',
            },
          },
        });
        NotificationManager.success('New Course Created!');
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        updateCourse({
          variables: {
            updateCourseInput: {
              id: courseId,
              description: title,
              start_date: startDate,
              end_date: endDate,
              navigation: nav ? 'Random' : 'Seq',
            },
          },
        });
        NotificationManager.success('This Course Updated!');
      } catch (e) {
        console.log(e);
      }
    }

    setTimeout(() => {
      history.push({
        pathname: ROUTES.courses,
      });
    }, 1000);
  };

  const onEditLessonIds = (id: number) => {
    const newArray = [...lessonIds];

    if (!lessonIds.includes(id)) {
      newArray.push(id);
    } else {
      newArray.splice(
        newArray.findIndex((item: any) => item === id),
        1
      );
    }
    setLessonIds(newArray);
  };

  return (
    <>
      <Box p={5}>
        <Typography variant="h2">{!courseId ? 'Create Course' : 'Update Course'}</Typography>
      </Box>
      <div className="blipCard">
        <div className="popup__field field pt-25 ">
          <div className="d-flex d-row-column">
            <div className="flex-1 p-12 payment__details text-left">
              <div className="field__label">Title</div>
              <div className="field__wrap">
                <input className="field__input" value={title} onChange={(e: any) => setTitle(e.target.value)} />
              </div>

              {/* <div className="field__label mt-25">Description</div>
              <div className="field__wrap">
                <textarea
                  name="Content"
                  className="field__textarea"
                  spellCheck="false"
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  maxLength={500}
                />
              </div> */}

              {/* <div className="field__label">Image/Video URL</div>
              <div className="field__wrap">
                <input
                  className="field__input"
                  value={title}
                  onChange={(e: any) => setTitle(e.target.value)}
                />
              </div> */}

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                }}
              >
                <div>
                  <div className="field__label mt-12">Start Date</div>
                  <div className="field__wrap d-flex d-row">
                    <DatePicker className="field__input" selected={startDate} onChange={date => setStartDate(date)} />
                  </div>
                </div>
                <div>
                  <div className="field__label mt-12">End Date</div>
                  <div className="field__wrap d-flex d-row">
                    <DatePicker
                      className="field__input"
                      selected={endDate}
                      onChange={date => setEndDate(date)}
                      // selected={endDate}
                      // onChange={date => setEndDate(date)}
                      /*readOnly={true}*/
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className="field__label mt-12">Time to Complete (Days)</div>
                <div className="field__wrap">
                  <input
                    type="number"
                    className="field__input"
                    // value={title}
                    // onChange={(e: any) => setTitle(e.target.value)}
                    max={1000}
                  />
                </div>
              </div>

              <div className="field__label mt-12">Navigation</div>
              <div className="field__wrap d-flex d-row">
                <div className={`m-12 ${!nav ? 'chip' : 'chip-active'}`} onClick={() => setNav(false)}>
                  Seq
                </div>
                <div className={`m-12 ${nav ? 'chip' : 'chip-active'}`} onClick={() => setNav(true)}>
                  Random
                </div>
              </div>

              <div className="field__label mt-25">Selected Lessons</div>
              <div className="d-flex d-row d-wrap">
                {lessonIds.map((item: any, i: number) => (
                  <div key={i} className="chip1" onClick={() => onEditLessonIds(item)}>
                    <span>{defaultLessons.find((x: any) => x.id === item).title}</span>
                    &nbsp;&nbsp;
                    <img src={IMAGES.CloseSVG} alt="img" />
                  </div>
                ))}
              </div>
              <Button className={classes.btn} variant="contained" color="primary" onClick={() => onSaving()}>
                {!loading ? (
                  'Save'
                ) : (
                  <div style={{ width: 70, height: 70 }}>
                    <Lottie animationData={groovyWalkAnimation} />
                  </div>
                )}
              </Button>
            </div>

            <div className="flex-1 p-12 payment__details text-left">
              <div className="field__label">Lessons (Total: {defaultLessons?.length})</div>
              <div className="field__wrap">
                <div>
                  <div className="sorting__search">
                    <button className="sorting__open">
                      <svg className="icon icon-search">
                        <svg id="icon-search" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M9.612 0C4.303 0 0 4.208 0 9.4c0 5.19 4.303 9.399 9.612 9.399 2.27 0 4.356-.77 6.001-2.058l3.124 3.048.083.07c.29.21.701.186.964-.072a.713.713 0 0 0-.002-1.023l-3.087-3.012A9.253 9.253 0 0 0 19.223 9.4C19.223 4.21 14.92 0 9.612 0zm0 1.448c4.49 0 8.13 3.56 8.13 7.951 0 4.392-3.64 7.952-8.13 7.952-4.491 0-8.132-3.56-8.132-7.952 0-4.391 3.64-7.951 8.132-7.951z"
                          />
                        </svg>
                      </svg>
                    </button>
                    <input
                      className="sorting__input"
                      type="text"
                      placeholder="Search"
                      value={searchKey}
                      onChange={(e: any) => setSearchKey(e.target.value)}
                    />
                  </div>
                </div>

                <div className="search-box custom_scroll">
                  {microLessons?.map((item: any, i: number) => (
                    <div
                      key={i}
                      className={`search-box__item ${lessonIds.includes(item.id) ? 'search-box__item__active' : ''}`}
                      onClick={() => onEditLessonIds(item.id)}
                    >
                      <div>
                        <div className="quality__info caption-sm">{item.title}</div>
                        <div className="d-flex d-row d-wrap mt-12">
                          {item.tags.map((item: any, index: number) => (
                            <div key={index} className="chip1">
                              {item.text}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="search-box__item__no">
                        <p>{item.id}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="d-flex d-column d-wrap">
                {microLessons
                  ?.filter((item: any) => lessonIds.includes(item.id))
                  .map((x: any, k: number) => (
                    <div style={{ position: 'relative' }} key={k}>
                      <Cards.Lesson key={k} lesson={x} onClick={() => onEditLessonIds(x.id)} />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const useStyles = makeStyles(() => ({
  btn: {
    padding: '15px 50px',
    borderRadius: 12,
    marginTop: 25,
  },
}));

export default CreateCourse;
