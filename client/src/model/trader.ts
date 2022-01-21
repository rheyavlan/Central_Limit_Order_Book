/** A trader is a user of our system and are responsible for buying and selling stocks.*/

export interface Trader {
    /**the login of the trader */
    username: string;

    /** the password of the trader*/
    password: string;
  }