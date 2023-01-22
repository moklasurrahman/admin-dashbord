import "./new.scss"
import Sidbar from"../../components/sidbar/Sidbar"
import Navabr from "../../components/navbar/Navbar"
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useState } from "react";
const New = ({inputs, title}) => {
 
  const [file, setFile] = useState("")
  console.log(file)

  return (
    <div className="new">
      <Sidbar/>
      <div className="newContainer">
        <Navabr/>
        <div className="top">
          <h1>{title}</h1>
        </div>
        
        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file):"https://media.istockphoto.com/id/1193046540/vector/photo-coming-soon-image-icon-vector-illustration-isolated-on-white-background-no-website.jpg?s=612x612&w=0&k=20&c=4wx1UzigP0g9vJv9D_DmOxdAT_DtX5peZdoS4hi2Fqg="} alt="" />
          </div>
         
          <div className="right">
            <form>
              <div className="fromInput">
              <label htmlFor="file">
                  Image: <DriveFolderUploadIcon className="icon"/>
                </label>
                <input onChange={(e) => setFile(e.target.files[0])} type="file" id="file" style={{display: "none"}} />
              </div>

              {inputs.map((input) => {
               return(
                <div className="fromInput" key={input.id}>
                <label htmlFor="username">{input.label}:</label>
                <input type={input.type} placeholder={input.placeholder}/>
              </div>
               )
              })}
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New