import './trader';

/**
 * A trade occurs when the price from 2 orders from different traders overlap. 
 */
export interface Trade {
    /** The ticker being traded. A ticker is typically a 1-4 length character identifier of a stock - 
     * For example: TW, F, IBM, AAPL, CSCO, GOOG*/
    ticker: string;

    /**The price of the trade (if prices from Buy and Sell orders overlap, the trade price is at the mid-point)*/
    price: number;

    /**How many shares were traded*/
    quantity: number;

    /**The buy order that caused the trade (note: the order identifies the buying trader)*/
    buyOrder: string;

    /**The sell order that caused the trade (note: the order identifies the selling trader)*/
    sellOrder: string;

    /**The date and time an order was created*/
    createdAt: Date;
    
  }