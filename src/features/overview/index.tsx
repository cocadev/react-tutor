import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { useSelector } from 'react-redux';
import { Cards } from '../../common';
import { IMAGES } from '../../common/data/images';
import { LineData } from '../../common/data/data';
import { IRootReducerState } from '../../store/IRootReducer';

const Index = () => {
  const { microLessons } = useSelector((state: IRootReducerState) => state.microLessonReducer);

  return (
    <div>
      <div>
        <Box p={5}>
          <Typography variant="h2">Overview</Typography>
        </Box>
        <Grid container spacing={5}>
          <Grid item xs={12} md={9}>
            <div>
              <div className="slider">
                <div className="slider__container">
                  <div className="slider__inner owl-carousel js-slider owl-loaded owl-drag">
                    <div className="owl-stage-outer">
                      <div className="owl-stage">
                        <div className="owl-item cloned">
                          <div className="slider__item">
                            <div className="slider__details">
                              <div className="slider__title h5">Set a Google Analytics Code</div>
                              <div className="slider__text">
                                Did you know you can set a Google Analytics code for your products?
                              </div>
                              <a
                                className="slider__btn btn btn_white js-popup-open"
                                href="#popup-settings"
                                data-effect="mfp-zoom-in"
                              >
                                Settings
                              </a>
                            </div>
                            <div className="slider__preview">
                              <img className="slider__pic" src={IMAGES.SliderImg} alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="owl-dots">
                      <button className="owl-dot active">
                        <span />
                      </button>
                      <button className="owl-dot">
                        <span />
                      </button>
                      <button className="owl-dot">
                        <span />
                      </button>
                    </div>
                  </div>
                  <button className="slider__close">
                    <img className="icon icon-remove" style={{ margin: 'auto' }} src={IMAGES.CLOSE} alt="" />
                  </button>
                </div>
              </div>
              <Box>
                <div className="widget_chart widget_pink blipCard">
                  <div className="blipTitle">Earnings</div>
                  <div className="widget__wrap">
                    <div className="widget__chart widget__chart_earning">
                      <ResponsiveContainer>
                        <LineChart data={LineData}>
                          <XAxis dataKey="name" axisLine={false} />
                          <YAxis axisLine={false} />
                          <Tooltip />
                          <Line
                            type="monotone"
                            strokeWidth={2}
                            dataKey="series_1"
                            stroke="#8884d8"
                            activeDot={{ r: 2 }}
                          />
                          <Line type="monotone" strokeWidth={2} dataKey="series_2" stroke="#aeddea" />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="widget__btns">
                      <button className="widget__btn btn btn_purple btn_wide">Analytics</button>
                    </div>
                  </div>
                </div>
              </Box>
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <Cards.Blip
              title="Total MicroLesson Counts"
              goal={microLessons?.length + ''}
              description={'Update your payout method in Settings'}
              btnText={'Withdraw All Earning'}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Index;
