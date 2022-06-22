import { Link } from "react-router-dom";
import "./category.css";
import Chart from "../../components/chart/Chart"
import {categoryData} from "../../dummyData"
import { Publish } from "@material-ui/icons";

export default function Product() {
  return (
    <div className="category">
      <div className="categoryTitleContainer">
        <h1 className="categoryTitle">category</h1>
        <Link to="/newcategory">
          <button className="categoryAddButton">Create</button>
        </Link>
      </div>
      <div className="categoryTop">
          <div className="categoryTopLeft">
              <Chart data={categoryData} dataKey="Sales" title="Sales Performance"/>
          </div>
          <div className="categoryTopRight">
              <div className="categoryInfoTop">
                  <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="categoryInfoImg" />
                  <span className="categoryName">Apple Airpods</span>
              </div>
              <div className="categoryInfoBottom">
                  <div className="categoryInfoItem">
                      <span className="categoryInfoKey">id:</span>
                      <span className="categoryInfoValue">123</span>
                  </div>
                  <div className="categoryInfoItem">
                      <span className="categoryInfoKey">sales:</span>
                      <span className="categoryInfoValue">5123</span>
                  </div>
                  <div className="categoryInfoItem">
                      <span className="categoryInfoKey">active:</span>
                      <span className="categoryInfoValue">yes</span>
                  </div>
                  <div className="categoryInfoItem">
                      <span className="categoryInfoKey">in stock:</span>
                      <span className="categoryInfoValue">no</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="categoryBottom">
          <form className="categoryForm">
              <div className="categoryFormLeft">
                  <label>category Name</label>
                  <input type="text" placeholder="Apple AirPod" />
                  <label>In Stock</label>
                  <select name="inStock" id="idStock">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
                  <label>Active</label>
                  <select name="active" id="active">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
              </div>
              <div className="categoryFormRight">
                  <div className="categoryUpload">
                      <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="categoryUploadImg" />
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="categoryButton">Update</button>
              </div>
          </form>
      </div>
    </div>
  );
}