import './trader';

/**
 * An order is an instruction to buy or sell a stock.
 */
export interface Order {
    /** The ticker being traded. A ticker is typically a 1-4 length character identifier of a stock - 
     * For example: TW, F, IBM, AAPL, CSCO, GOOG*/
    ticker: string;

    /**The user who created the order.  */
    Trader: string;

    /**side can be either 'buy' or 'sell' depending if the trader wants to buy or sell */
    side: string;

    /**the price at which the stock is being bought or sold*/
    limit: number;

    /**the number of desired shares of a stock that is being bought or sold*/
    quantity: number;

    /**the number of shares that has been traded from this order*/
    filedQuantity: number;

    /**the status of the order. Typically one of 'open', 'canceled', 'completed'*/
    status: string;

    /**the date and time an order was created*/
    createdAt: Date;
    
  }