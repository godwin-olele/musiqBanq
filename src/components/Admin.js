import React from 'react';

const Admin = () => {
  return <>
            <div className="adminComtainer">
                <div className="a1"></div>
                <div className="a2">
                    <div className="topZone">
                       <div className="userNameAndSearchBar">
                          <div className="userImgAndName">
                             <div className="userImg"></div>
                             <div className="userName">Godwin Daniel Olele</div>
                          </div>
                         <form>
                            <input type="search" name="search" id="search" placeholder='Search user...' className="userSearchBox" />
                            <button type="submit" className="submitSearchBtn"><img src="https://img.icons8.com/officel/20/ffffff/search-client.png" alt=""/></button>
                         </form>
                       </div>
                       <div className="userEarningAndCard">
                          <div className="totalEarning"></div>
                          <div className="userCard"></div>
                          <div className="c-Or-d-Btn"></div>
                       </div>
                    </div>
                    <div className="bottomZone"></div>
                </div>
                <div className="a3">
                    <div className="adminName"><img src="https://img.icons8.com/external-itim2101-blue-itim2101/40/000000/external-admin-devices-service-itim2101-blue-itim2101.png" alt=""/>&nbsp;&nbsp;Godwin Olele</div>
                    <div className="cardNbtn">
                      <div className="adminCard">
                          <div className='myPort'>My Portfolio</div>
                          <div className='portAmount'>$150,000.00</div>
                      </div>
                      <div className="adminBtnContainer">
                          <button className="deposit">Deposit</button>
                          <button className="withdraw">Withdraw</button>
                      </div>
                    </div>
                    <div className="topSongContainer">
                        <p className="tsText">Top Song's &nbsp;&nbsp;<span className="bb">- Billboard -</span></p>
                        <div className='topSong'></div>
                    </div>
                    <div className="transHeader">
                            <div className="t">Transaction's</div>
                            <div className="s">See All</div>
                        </div>
                    <div className="trans">
                    <div className="transMadeContainer">
                                <div className="transMade">
                                    <div className="imgg">
                                    <img src="https://img.icons8.com/color/48/000000/transaction.png" alt=""/>
                                    </div>
                                   <div className="transId">
                                      <div>
                                         <div className="ids">ID-00001</div>
                                         <div className="date">December 27, 09:47 AM</div>
                                      </div>
                                   </div>
                                   <p className="transAmount">$7,000</p>
                                </div>
                                <div className="transMade">
                                <div className="imgg">
                                    <img src="https://img.icons8.com/color/48/000000/transaction.png" alt=""/>
                                    </div>
                                   <div className="transId">
                                      <div>
                                         <div className="ids">ID-00002</div>
                                         <div className="date">july 1, 12:01 PM</div>
                                      </div>
                                   </div>
                                   <p className="transAmount">$50,000</p>
                                </div>
                                <div className="transMade">
                                <div className="imgg">
                                    <img src="https://img.icons8.com/color/48/000000/transaction.png" alt=""/>
                                    </div>
                                   <div className="transId">
                                      <div>
                                         <div className="ids">ID-00003</div>
                                         <div className="date">september 17, 9:09 AM</div>
                                      </div>
                                   </div>
                                   <p className="transAmount">$100</p>
                                </div>
                                <div className="transMade">
                                <div className="imgg">
                                    <img src="https://img.icons8.com/color/48/000000/transaction.png" alt=""/>
                                    </div>
                                   <div className="transId">
                                      <div>
                                         <div className="ids">ID-00004</div>
                                         <div className="date">April 15, 1:06 PM</div>
                                      </div>
                                   </div>
                                   <p className="transAmount">$105,000,000</p>
                                </div>
                                <div className="transMade">
                                <div className="imgg">
                                    <img src="https://img.icons8.com/color/48/000000/transaction.png" alt=""/>
                                    </div>
                                   <div className="transId">
                                      <div>
                                         <div className="ids">ID-00005</div>
                                         <div className="date">february 8, 19:32 AM</div>
                                      </div>
                                   </div>
                                   <p className="transAmount">$4,000,000</p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
         </>;
};

export default Admin;
