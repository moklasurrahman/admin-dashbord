import Sidbar from "../../components/sidbar/Sidbar"
import Navbar from "../../components/navbar/Navbar"
import "./home.scss"
import Widget from "../../components/widgets/Widget"
import Featured from "../../components/featured/Featured"
import Chart from "../../components/chart/Chart"
import Tabel from './../../components/tabel/Tabel';

const Home = () => {
  return (
    <div className="home">
      <Sidbar/>
      <div className="homeContainer">
      <Navbar/>
      <div className="widgets">
        <Widget type="user"/>
        <Widget type="order"/>
        <Widget type="earning"/>
        <Widget type="balance"/>
      </div>
      <div className="chats">
       <Featured/>
       <Chart title="Last 6 Months (Revenue)" aspect={2/1}/>
      </div>
      <div className="listContainer">
        <div className="listtitle">
          Latest Transactions
        </div>
        <Tabel/>
      </div>
      </div>
    </div>
  )
}

export default Home