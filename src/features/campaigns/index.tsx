import React from 'react';
import { BarChart, Bar, CartesianGrid, YAxis, Tooltip, XAxis, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Grid, Typography, Box, Button } from '@material-ui/core';
import { AffiliateBarData, BarData, incomeBarData, lineChart, smallBarData } from '../../common/data/data';
import { IMAGES } from '../../common/data/images';
import './index.scss';

const detailItems = () => {
  return (
    <>
      <div className="details__item">
        <div className="details__head">
          <div className="details__preview bg-purple">
            <img className="details__pic" src={IMAGES.Folder} alt="" />
          </div>
          <div className="details__text caption-sm">Users</div>
        </div>
        <div className="details__counter h3">36k</div>
        <div className="details__indicator">
          <div className="details__progress bg-purple" style={{ width: '55%' }} />
        </div>
      </div>
      <div className="details__item">
        <div className="details__head">
          <div className="details__preview bg-pink">
            <img className="details__pic" src={IMAGES.activity} alt="" />
          </div>
          <div className="details__text caption-sm">Clicks</div>
        </div>
        <div className="details__counter h3">1m</div>
        <div className="details__indicator">
          <div className="details__progress bg-purple" style={{ width: '55%' }} />
        </div>
      </div>
      <div className="details__item">
        <div className="details__head">
          <div className="details__preview bg-blue">
            <img className="details__pic" src={IMAGES.MicrolessionSVG} alt="" />
          </div>
          <div className="details__text caption-sm">Sales</div>
        </div>
        <div className="details__counter h3">327$</div>
        <div className="details__indicator">
          <div className="details__progress bg-purple" style={{ width: '55%' }} />
        </div>
      </div>
      <div className="details__item">
        <div className="details__head">
          <div className="details__preview bg-red">
            <img className="details__pic" src={IMAGES.Folder} alt="" />
          </div>
          <div className="details__text caption-sm">Items</div>
        </div>
        <div className="details__counter h3">68</div>
        <div className="details__indicator">
          <div className="details__progress bg-purple" style={{ width: '55%' }} />
        </div>
      </div>
    </>
  );
};

const Overview = () => {
  return (
    <div>
      <Box p={5}>
        <Typography variant="h2">Campaingns</Typography>
      </Box>

      <Grid container spacing={6}>
        <Grid item xs={12} md={9}>
          <Box className="blipCard" p={4} mb={3} title="Active Users right now 💡">
            <div className="details__row">
              <div className="details__col">
                <div className="details__top">
                  <div className="details__number h1">478</div>
                  <a className="details__line" href="/">
                    <div className="details__preview">
                      <img className="details__pic" src={IMAGES.detailsPic1} alt="" />
                    </div>
                    <div className="details__info caption-sm">Page views per minute</div>
                  </a>
                </div>
                <div className="details__bottom">
                  <div className="details__statistics">
                    <div className="details__chart details__chart_activity" style={{ position: 'relative' }}>
                      <ResponsiveContainer>
                        <LineChart data={lineChart}>
                          <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} dot={false} />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="details__status">
                      <div className="details__icon bg-blue" />
                      <div className="details__percent caption-sm color-blue-dark">6%</div>
                    </div>
                  </div>
                  <div className="details__info caption-sm">Update your payout method in Settings</div>
                </div>
              </div>
              <div className="details__col">
                <div className="details__box">
                  <div className="details__chart details__chart_counter" style={{ position: 'relative' }}>
                    <ResponsiveContainer>
                      <BarChart
                        barSize={10}
                        data={BarData}
                        barGap={0}
                        margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
                      >
                        <XAxis axisLine={false} tick={{ fill: '#3f8bff' }} stroke="#3f8bff" />
                        <YAxis axisLine={false} tick={{ fill: '#fff' }} stroke="#efefef" />
                        <Tooltip
                          labelFormatter={() => ''}
                          contentStyle={{ background: '#242731' }}
                          cursor={{
                            fill: '#7393E2',
                            background: 'transparent',
                          }}
                          itemStyle={{ fontSize: '15px' }}
                        />

                        <Bar dataKey="users" stackId="a" fill="#fff" />
                        <Bar dataKey="New_Users" stackId="a" style={{ background: 'transparent' }} fill="#e3e6ec" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <button className="details__remove">
                    <img
                      className="details__pic"
                      style={{ height: '10px', margin: 'auto' }}
                      src={IMAGES.close}
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="details__list details__list_four">{detailItems()}</div>
          </Box>

          <div className="page__widgets">
            <div className="widget widget_users widget_shadow widget_p0 blipCard">
              <div className="widget__head">
                <div className="widget__title">Users</div>
              </div>
              <div className="widget__body">
                <div className="widget__flex">
                  <div className="widget__desc">
                    <div className="widget__category caption-sm">New Users</div>
                    <div className="widget__number h4">57m</div>
                    <div className="widget__percent">21.77%</div>
                  </div>
                  <div className="widget__chart widget__chart_users" style={{ position: 'relative' }}>
                    <ResponsiveContainer>
                      <BarChart barSize={20} data={smallBarData} margin={{ top: 5, bottom: 5 }}>
                        <XAxis hide dataKey="name" />
                        <YAxis hide />
                        <Tooltip cursor={{ fill: '#f2f2f9' }} itemStyle={{ fontSize: '15px' }} />

                        <Bar dataKey="users" fill="#aeddea" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <div className="widget__flex">
                  <div className="widget__desc">
                    <div className="widget__category caption-sm">New Users</div>
                    <div className="widget__number h4">36m</div>
                    <div className="widget__percent">21.77%</div>
                  </div>
                  <div className="widget__chart widget__chart_users" style={{ position: 'relative' }}>
                    <ResponsiveContainer>
                      <BarChart barSize={20} data={smallBarData} margin={{ top: 5, bottom: 5 }}>
                        <XAxis hide dataKey="name" />
                        <YAxis hide />
                        <Tooltip cursor={{ fill: '#f2f2f9' }} itemStyle={{ fontSize: '15px' }} />

                        <Bar dataKey="users" fill="#8075d9" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
              <div className="widget__foot">
                <a className="widget__link caption" href="/">
                  Go to settings
                </a>
              </div>
            </div>
            <div className="widget widget_chart widget_purple">
              <div className="widget__title color-white">Income</div>
              <div className="widget__wrap">
                <div className="widget__chart widget__chart_earning" style={{ position: 'relative' }}>
                  <ResponsiveContainer>
                    <BarChart data={incomeBarData} margin={{ top: 10, right: 10 }} barGap={0}>
                      <XAxis axisLine={false} dataKey="name" />
                      <YAxis axisLine={false} />
                      <Tooltip
                        cursor={{
                          fill: '#f2f2f9',
                          background: 'transparent',
                        }}
                      />
                      <Bar dataKey="pv" fill="#8884d8" />
                      <Bar dataKey="uv" fill="#aad9e6" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="widget__btns">
                  <button className="widget__btn btn btn_black btn_wide">Withdraw Earnings</button>
                </div>
              </div>
            </div>
          </div>
          <div className="page__widgets">
            <Box className="widget widget_shadow blipCard" p={4} pb={0}>
              <div className="blipTitle">Icon Progress</div>
              <div className="quality">
                <div className="quality__list">
                  <div className="quality__item quality__item_chart">
                    <div className="quality__preview bg-pink-opacity">
                      <img className="quality__pic" src={IMAGES.FIGURE1} alt="" />
                    </div>
                    <div className="quality__details">
                      <div className="quality__title title" style={{ marginBottom: '0px' }}>
                        Unity Comps
                      </div>
                      <div className="quality__info caption-sm">New 3D Kit</div>
                    </div>
                    <div className="quality__chart">
                      <div className="progress-circle p40">
                        <span>40%</span>
                        <div className="left-half-clipper">
                          <div className="first50-bar purple" />
                          <div className="value-bar purple_value" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="quality__item quality__item_chart">
                    <div className="quality__preview bg-yellow-opacity">
                      <img className="quality__pic" src={IMAGES.FIGURE2} alt="" />
                    </div>
                    <div className="quality__details">
                      <div className="quality__title title" style={{ marginBottom: '0px' }}>
                        Folio Designer
                      </div>
                      <div className="quality__info caption-sm">UI Design Kit</div>
                    </div>
                    <div className="quality__chart">
                      <div className="progress-circle over50 p62">
                        <span>62%</span>
                        <div className="left-half-clipper">
                          <div className="first50-bar green" />
                          <div className="value-bar green_value" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="quality__item quality__item_chart">
                    <div className="quality__preview bg-blue-light-opacity">
                      <img className="quality__pic" src={IMAGES.FIGURE3} alt="" />
                    </div>
                    <div className="quality__details">
                      <div className="quality__title title" style={{ marginBottom: '0px' }}>
                        Folio Agency
                      </div>
                      <div className="quality__info caption-sm">UI Design Kit</div>
                    </div>
                    <div className="quality__chart">
                      <div className="progress-circle over50 p75">
                        <span className="purple">75%</span>
                        <div className="left-half-clipper">
                          <div className="first50-bar orange" />
                          <div className="value-bar orange_value" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="quality__btn btn btn_black btn_wide">Discover More</button>
              </div>
            </Box>
            <Box className="widget widget_shadow blipCard" p={4} pb={0}>
              <div className="blipTitle">Latest Sales</div>
              <div className="quality__item">
                <div className="quality__preview bg-pink-opacity">
                  <img className="quality__pic" src={IMAGES.FIGURE1} alt="" />
                </div>
                <div className="quality__details">
                  <div className="quality__line">
                    <div className="quality__title title" style={{ marginBottom: '0px' }}>
                      Unity Comps
                    </div>
                    <div className="quality__price">+$35</div>
                  </div>
                  <div className="quality__info caption-sm">New 3D Kit</div>
                </div>
              </div>
              <div className="quality__item">
                <div className="quality__preview bg-pink-opacity">
                  <img className="quality__pic" src={IMAGES.FIGURE3} alt="" />
                </div>
                <div className="quality__details">
                  <div className="quality__line">
                    <div className="quality__title title" style={{ marginBottom: '0px' }}>
                      Unity Comps
                    </div>
                    <div className="quality__price">+$35</div>
                  </div>
                  <div className="quality__info caption-sm">New 3D Kit</div>
                </div>
              </div>
              <div className="quality__item">
                <div className="quality__preview bg-blue-opacity">
                  <img className="quality__pic" src={IMAGES.FIGURE5} alt="" />
                </div>
                <div className="quality__details">
                  <div className="quality__line">
                    <div className="quality__title">Unity Comps</div>
                    <div className="quality__price">+$35</div>
                  </div>
                  <div className="quality__info caption-sm">New 3D Kit</div>
                </div>
              </div>
              <Button className="" color="primary" variant="contained">
                Show all reports
              </Button>
            </Box>
          </div>
        </Grid>

        <Grid item xs={12} md={3}>
          <div className="blipCard" title="2020 Goal">
            <Box className="goal" p={2}>
              <div className="goal__container">
                <div className="goal__slider owl-carousel js-slider-goal owl-loaded owl-drag">
                  <div className="owl-stage-outer">
                    <div className="owl-stage">
                      <div className="owl-item cloned" style={{ width: '265px' }}>
                        <div className="goal__preview">
                          <img className="goal__pic" src={IMAGES.FIGURE1} alt="" />
                          <div className="goal__bg bg-blue-light" />
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
                  </div>
                </div>
              </div>
              <div className="goal__list">
                <div className="goal__item">
                  <div className="goal__head">
                    <div className="goal__title">Bento Illustration</div>
                    <div className="goal__percent title">40%</div>
                  </div>
                  <div className="goal__indicator">
                    <div className="goal__progress bg-purple" style={{ width: '40%' }} />
                  </div>
                </div>
                <div className="goal__item">
                  <div className="goal__head">
                    <div className="goal__title title">Bento Illustration</div>
                    <div className="goal__percent title">25%</div>
                  </div>
                  <div className="goal__indicator">
                    <div className="goal__progress bg-green" style={{ width: '25%' }} />
                  </div>
                </div>
                <div className="goal__item">
                  <div className="goal__head">
                    <div className="goal__title title">Bento Illustration</div>
                    <div className="goal__percent title">50%</div>
                  </div>
                  <div className="goal__indicator">
                    <div className="goal__progress bg-yellow" style={{ width: '50%' }} />
                  </div>
                </div>
                <div className="goal__item">
                  <div className="goal__head">
                    <div className="goal__title title">Bento Illustration</div>
                    <div className="goal__percent title">80%</div>
                  </div>
                  <div className="goal__indicator">
                    <div className="goal__progress bg-pink" style={{ width: '80%' }} />
                  </div>
                </div>
              </div>
            </Box>
          </div>

          <Box className="widget widget_empty widget_p0 blipCard" mt={3}>
            <div className="blipTitle">Affiliate Impressions</div>
            <div className="widget__chart widget__chart_impressions" style={{ position: 'relative' }}>
              <ResponsiveContainer>
                <BarChart data={AffiliateBarData} barGap={0}>
                  <CartesianGrid vertical={false} strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis axisLine={false} />
                  <Tooltip cursor={{ fill: '#f2f2f9', background: 'transparent' }} />
                  <Bar dataKey="pv" fill="#8884d8" />
                  <Bar dataKey="uv" fill="#aad9e6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};
export default Overview;
