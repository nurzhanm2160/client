import React from 'react'

import btc from '../../assets/img/btc.png'

export const Transactions = () => {
    return <div class="s-transactions section dark-section">
        <div class="container">
            <h2 class="section-headline">Recent transactions</h2>

            <table class="home-table">
                <tr>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>TXID</th>
                    <th>TYPE</th>
                </tr>
                <tr>
                    <td>
                        <div class="amount d-flex align-items-center">
                            <div class="amount-img">
                                <img src={btc} alt="BTC" />
                            </div>
                            <span>84.000000000 BNB</span>
                        </div>
                    </td>
                    <td>2022-07-07 19:19:14</td>
                    <td>489fd0fd......465061fbc25eab54d76af</td>
                    <td><span class="badge badge-success">DEPOSIT</span></td>
                </tr>
                <tr>
                    <td>
                        <div class="amount d-flex align-items-center">
                            <div class="amount-img">
                                <img src={btc} alt="BTC" />
                            </div>
                            <span>84.000000000 BNB</span>
                        </div>
                    </td>
                    <td>2022-07-07 19:19:14</td>
                    <td>489fd0fd......465061fbc25eab54d76af</td>
                    <td><span class="badge badge-success">DEPOSIT</span></td>
                </tr>
                <tr>
                    <td>
                        <div class="amount d-flex align-items-center">
                            <div class="amount-img">
                                <img src={btc} alt="BTC" />
                            </div>
                            <span>84.000000000 BNB</span>
                        </div>
                    </td>
                    <td>2022-07-07 19:19:14</td>
                    <td>489fd0fd......465061fbc25eab54d76af</td>
                    <td><span class="badge badge-success">DEPOSIT</span></td>
                </tr>
                <tr>
                    <td>
                        <div class="amount d-flex align-items-center">
                            <div class="amount-img">
                                <img src={btc} alt="BTC" />
                            </div>
                            <span>84.000000000 BNB</span>
                        </div>
                    </td>
                    <td>2022-07-07 19:19:14</td>
                    <td>489fd0fd......465061fbc25eab54d76af</td>
                    <td><span class="badge badge-success">DEPOSIT</span></td>
                </tr>
            </table>

        </div>
    </div>
}