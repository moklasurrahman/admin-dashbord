import "./single.scss"
import Navbar from "../../components/navbar/Navbar"
import Sidbar from "../../components/sidbar/Sidbar"
import Chart from "../../components/chart/Chart"
import Tabel from './../../components/tabel/Tabel';

const single = () => {
  return (
    <div className="single">
      <Sidbar/>
      <div className="singleContainer">
          <Navbar/>
          <div className="top">

          <div className="left">
              <div className="editButton">Edit</div>
              <h1 className="title">Information</h1>
              
              <div className="item">
                <img src="https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="itemImg" />
               
                <div className="details">
                  <h3 className="itemTitle">Moklasur rahman</h3>
                 
                  <div className="detailItem">
                    <span className="itemKey">Email:</span>
                    <span className="itemValue">Moklasur520@gmail.com</span>
                  </div>

                  <div className="detailItem">
                    <span className="itemKey">Phone:</span>
                    <span className="itemValue">+88 01736507520</span>
                  </div>

                  <div className="detailItem">
                    <span className="itemKey">Address:</span>
                    <span className="itemValue">Mohamamdpur-Kaderabad-housing</span>
                  </div>

                  <div className="detailItem">
                    <span className="itemKey">Country:</span>
                    <span className="itemValue">Bangladesh</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <Chart aspect={3/1} title="User Spending (Last 6 Months"/>
            </div>
          </div>
          <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <Tabel/>
          </div>
      </div>
    </div>
  )
}

export default single