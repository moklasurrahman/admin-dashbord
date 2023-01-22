import Navbar from "../../components/navbar/Navbar"
import Sidbar from "../../components/sidbar/Sidbar"
import "./list.scss"
import Datatable from './../../components/datatable.jsx/Datatable';

const List = () => {
  return (
    <div className="list">
      <Sidbar/>
      <div className="listContainer">
      <Navbar/>
      <div className="datatable">
        <Datatable/>
      </div>
      </div>
    </div>
  )
}

export default List