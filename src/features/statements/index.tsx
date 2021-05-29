import React from 'react';
import { Grid, Typography, Box, Button, makeStyles } from '@material-ui/core';
import {
  Bar,
  BarChart,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { lineChart, incomeBarData, pieData, COLORS } from '../../common/data/data';
import { IMAGES } from '../../common/data/images';

const detailItems = () => {
  return (
    <>
      <div className="details__item">
        <div className="details__head">
          <div className="details__preview bg-purple">
            <img className="details__pic" src={IMAGES.Folder} alt="" />
          </div>
          <div className="details__text caption-sm">Total Earnings</div>
        </div>
        <div className="details__counter h3">$586.75</div>
        <div className="details__indicator">
          <div className="details__progress bg-purple" style={{ width: '55%' }} />
        </div>
      </div>
      <div className="details__item">
        <div className="details__head">
          <div className="details__preview bg-pink">
            <img className="details__pic" src={IMAGES.activity} alt="" />
          </div>
          <div className="details__text caption-sm">Item Earnings</div>
        </div>
        <div className="details__counter h3">$425.94</div>
        <div className="details__indicator">
          <div className="details__progress bg-purple" style={{ width: '55%' }} />
        </div>
      </div>
      <div className="details__item">
        <div className="details__head">
          <div className="details__preview bg-blue">
            <img className="details__pic" src={IMAGES.MicrolessionSVG} alt="" />
          </div>
          <div className="details__text caption-sm">Tax withheld</div>
        </div>
        <div className="details__counter h3">$25.94</div>
        <div className="details__indicator">
          <div className="details__progress bg-purple" style={{ width: '55%' }} />
        </div>
      </div>
    </>
  );
};

const Statements = () => {
  return (
    <div>
      <div>
        <Box p={5}>
          <Typography variant="h2">Earnings Report</Typography>
        </Box>
        <Grid container spacing={5}>
          <Grid item xs={12} md={9}>
            <div>
              <Box title="Earnings Report" className="blipCard" p={3}>
                <div className="details__row">
                  <div className="details__col">
                    <div className="details__top">
                      <div className="details__number h1">$586</div>
                      <a className="details__line" href="/">
                        <div className="details__preview">
                          <img className="details__pic" src={IMAGES.detailsPic1} alt="" />
                        </div>
                        <div className="details__info caption-sm">Your total earnings</div>
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
                    <div className="ddetails__chart details__chart_report" style={{ position: 'relative' }}>
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
                  </div>
                </div>
                <div className="details__list details__list_three">{detailItems()}</div>
              </Box>

              <Box className="blipCard" p={3} mt={3}>
                <div className="blipTitle">Statement</div>
                Please note: Transactions are based Time in California, USA.
                <div className="products__table">
                  <div className="products__row products__row_head">
                    <div className="products__cell">
                      <label className="checkbox">
                        <input className="checkbox__input" type="checkbox" />
                        <span className="checkbox__in">
                          <span className="checkbox__tick" />
                        </span>
                      </label>
                    </div>
                    <div className="products__cell">Date</div>
                    <div className="products__cell">Order ID</div>
                    <div className="products__cell">Amount</div>
                    <div className="products__cell">Price</div>
                    <div className="products__cell text-right">Type</div>
                  </div>
                  <div className="products__row">
                    <div className="products__cell">
                      <label className="checkbox">
                        <input className="checkbox__input" type="checkbox" />
                        <span className="checkbox__in">
                          <span className="checkbox__tick" />
                        </span>
                      </label>
                    </div>
                    <div className="products__cell color-gray">17 Aug 2020</div>
                    <div className="products__cell">39511350</div>
                    <div className="products__cell">$68.00</div>
                    <div className="products__cell color-red">-68.00</div>
                    <div className="products__cell text-right">
                      <div className="products__status caption bg-green">Sale</div>
                    </div>
                  </div>
                  <div className="products__body">
                    <div className="products__bg bg-green" />
                    <div className="products__line">
                      <div className="products__col color-gray">17 Aug 2020</div>
                      <div className="products__col">$68.00</div>
                      <div className="products__col color-red">-68.00</div>
                    </div>
                  </div>
                  <div className="products__row">
                    <div className="products__cell">
                      <label className="checkbox">
                        <input className="checkbox__input" type="checkbox" />
                        <span className="checkbox__in">
                          <span className="checkbox__tick" />
                        </span>
                      </label>
                    </div>
                    <div className="products__cell color-gray">17 Aug 2020</div>
                    <div className="products__cell">39511350</div>
                    <div className="products__cell">$68.00</div>
                    <div className="products__cell color-red">-68.00</div>
                    <div className="products__cell text-right">
                      <div className="products__status caption bg-green">Sale</div>
                    </div>
                  </div>
                  <div className="products__body">
                    <div className="products__bg bg-green" />
                    <div className="products__line">
                      <div className="products__col color-gray">17 Aug 2020</div>
                      <div className="products__col">$68.00</div>
                      <div className="products__col color-red">-68.00</div>
                    </div>
                  </div>
                </div>
                <div className="products__more">
                  <button className="products__btn btn btn_black">Load More</button>
                </div>
              </Box>
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <div>
              <Box className="widget widget_stat widget_shadow widget_after blipCard">
                <div className="widget__chart widget__chart_items" style={{ position: 'relative' }}>
                  <ResponsiveContainer>
                    <PieChart>
                      <Pie
                        data={pieData}
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="widget__title">Earnings By Item</div>
                <div className="widget__counter title title_md">479.4</div>
                <div className="widget__text widget__text_mb40">Update your payout method in Settings</div>
                <div className="widget__legend">
                  <div className="widget__color">
                    <div className="widget__bg" style={{ background: '#6C5DD3' }} />
                    <div className="widget__text">Templates</div>
                  </div>
                  <div className="widget__color">
                    <div className="widget__bg" style={{ background: '#FFA2C0' }} />
                    <div className="widget__text">Themes</div>
                  </div>
                </div>
              </Box>

              <Box className="blipCard" p={3} mt={3}>
                <div className="blipTitle">Your Top Items</div>
                {TOPITEMS.map((item, index) => (
                  <TopItem item={item} key={index} />
                ))}
                <Box mt={5} />
                <Button fullWidth size="large" color="primary" variant="contained">
                  Show all report
                </Button>
              </Box>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Statements;

const TOPITEMS = [
  { bg: '#ffe3ec', title: 'Unity UI Kit 1', description: 'UI Design', price: 25, img: IMAGES.FIGURE1 },
  { bg: '#c5dcff', title: 'Unity UI Kit 2', description: 'UI Design', price: 30, img: IMAGES.FIGURE2 },
  { bg: '#ffe3ec', title: 'Unity UI Kit 3', description: 'UI Design', price: 45, img: IMAGES.FIGURE5 },
  { bg: '#fff0d5', title: 'Unity UI Kit 9', description: 'UI Design', price: 72, img: IMAGES.FIGURE4 },
];

function TopItem(props: any) {
  const { bg, title, description, price, img } = props.item;
  const classes = useStyles();

  return (
    <Box className={classes.item} display="flex" flexDirection="row">
      <div className={classes.preview} style={{ background: bg }}>
        <img className={classes.pic} src={img} alt="" />
      </div>
      <Box ml={3}>
        {title}
        <div className={classes.description}>{description}</div>
        <div className={classes.money}>${price}</div>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles(theme => ({
  money: {
    display: 'inline-block',
    marginTop: 8,
    padding: '0 10px',
    background: theme.palette.primary.main,
    borderRadius: 8,
    color: '#fff',
  },
  description: {
    fontSize: 12,
    fontWeight: 500,
    lineHeight: 1.33333,
  },
  pic: {
    width: 80,
    height: 80,
  },
  preview: {
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    width: 80,
    height: 80,
    marginRight: 14,
    borderRadius: 12,
  },
  item: {
    padding: 12,
    borderRadius: 12,
    '&:hover': {
      cursor: 'pointer',
      background: theme.palette.primary.main,
      color: '#fff',
    },
  },
}));
