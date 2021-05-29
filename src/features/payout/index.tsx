import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';

import { Cards } from '../../common';
import { IMAGES } from '../../common/data/images';

const Payout = () => {
  return (
    <div>
      <Box p={5}>
        <Typography variant="h2">Your Payouts</Typography>
      </Box>
      <Grid container spacing={5}>
        <Grid item xs={12} md={9}>
          <div className="blipCard" title="Choose A Payment Method">
            <div className="payment">
              <div className="payment__row">
                <div className="payment__details">
                  <div className="payment__preview bg-purple-light">
                    <img className="payment__pic" src={IMAGES.FIGURE1} alt="" />
                  </div>
                  <div className="payment__mail title">payout@ui8.net</div>
                  <div className="payment__info caption-sm">
                    Your selected payout method was confirmed on Feb 24, 2019.
                  </div>
                  <div className="payment__logo">
                    <img className="payment__pic" src={IMAGES.paypal} alt="" />
                  </div>
                </div>
                <div className="payment__variants">
                  <label className="payment__label">
                    <input className="payment__radio" type="radio" name="payment" />
                    <span className="payment__in">
                      <span className="payment__tick" />
                      <span className="payment__desc">
                        <span className="payment__logo">
                          <img className="payment__pic" src={IMAGES.paypal} alt="" />
                        </span>
                        <span className="payment__info caption-sm">
                          Your Paypal account has been authorized for payouts.
                        </span>
                        <button className="payment__btn btn btn_gray">Deauthorize</button>
                      </span>
                    </span>
                  </label>
                  <label className="payment__label">
                    <input className="payment__radio" type="radio" name="payment" />
                    <span className="payment__in">
                      <span className="payment__tick" />
                      <span className="payment__desc">
                        <span className="payment__logo">
                          <img className="payment__pic payment__pic_black" src={IMAGES.payoneer} alt="" />
                          <img className="payment__pic payment__pic_white" src={IMAGES.FIGURE1} alt="" />
                        </span>
                      </span>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} md={3}>
          <Cards.Blip
            title="Your earning this month"
            goal={'479.9'}
            description={'Update your payout method in Settings'}
            btnText={'Withdraw All Earning'}
          />
        </Grid>
      </Grid>
    </div>
  );
};
export default Payout;
