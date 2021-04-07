import React, { Component, useState, useContext, useEffect } from "react";
import { Table } from "react-bootstrap";
import { DropzoneArea } from "material-ui-dropzone";
import { Modal } from "react-bootstrap";
import "./admindashboard.css";
import EditProductDetails from "./editproductdetails";
import {
  fetchProducts,
  fetchUsers,
  fetchSupport,
  fetchOrderReq,
  fetchLenderReq,
} from "../../config";
import axios from "axios";
import {
  Select,
  TextField,
  MenuItem,
  makeStyles,
  TextareaAutosize,
  Button as Btn,
} from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";

export function AllProducts() {
  const [p, setP] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setP(await fetchProducts());
    };
    fetchAPI();
  }, []);

  const useStyles = makeStyles((theme) => ({
    categoryInput: {
      paddingTop: "0px",
      width: "100%",
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));

  function AddProductModal(props) {
    const classes = useStyles();
    const [category, setCategories] = useState("category");
    const [subcat, setSubcat] = useState();
    const [fields, setFields] = useState([{ value: null }]);
    const [name, setName] = useState("");
    const [imagepath, setImagePath] = useState("");
    const [mumbaiAvailability, setMumbaiAvailability] = useState();
    const [puneAvailability, setPuneAvailability] = useState();
    const [isLimitedStock, setIsLimitedStock] = useState();
    const [quantity, setQuantity] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();

    const userForm = (e) => {
      e.preventDefault();
      axios
        .post("URL", "datafile") // post url and datafile
        .then(function(response) {
          console.log(response);
        });
    };
    const handleChange = (event) => {
      console.log(event);
      setCategories(event.target.value);
    };

    const subChange = (event) => {
      setSubcat(event.target.value);
    };

    function handleChanges(i, event) {
      const values = [...fields];
      values[i].value = event.target.value;
      setFields(values);
    }

    function handleAdd() {
      const values = [...fields];
      values.push({ value: null });
      setFields(values);
      console.log("add event specifications");
    }

    function handleRemove(i) {
      const values = [...fields];
      values.splice(i, 1);
      setFields(values);
    }

    function onSubmit(e) {
      e.preventDefault();
      const data = {
        name: name,
        images: imagepath,
        category: category,
        subcategory: subcat,
        quantity: quantity,
        pricing: null,
        featured: null,
        specifiction: null,
        limitedStock: null,
        availableInMumbai: null,
        availableInPune: null,
        box: null,
        adOns: null,
      };
      axios
        .post("http://localhost:5000/products", data)
        .then((res) => console.log(res.data))
        .catch((err) => console.error(err));
    }

    return (
      <Modal
        {...props}
        size="lg"
        className="addaproduct"
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add A New Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className={classes.formControl} onSubmit={(e) => onSubmit(e)}>
            {/* <DropzoneArea
              onChange={(e) => {
                if (e[0] !== undefined) {
                  setImagePath(e[0]);
                }
              }}
            /> */}
            <input type="text" onChange={(e) => setImagePath(e.target.value)} />
            <TextField
              label="Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              style={{ width: "100%" }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div className="row">
                <div className="col-6">
                  <p>Avaialble In Mumbai</p>
                  <Select
                    className={classes.categoryInput}
                    labelId="availableInMumbai"
                    // value={category}
                    onChange={(e) => setMumbaiAvailability(e.target.value)}
                  >
                    <MenuItem value={true}>True</MenuItem>
                    <MenuItem value={false}>False</MenuItem>
                  </Select>
                </div>
                <div className="col-6">
                  <p>Available In Pune</p>
                  <Select
                    className={classes.categoryInput}
                    labelId="availableInPune"
                    // value={category}
                    onChange={(e) => setPuneAvailability(e.target.value)}
                  >
                    <MenuItem value={true}>True</MenuItem>
                    <MenuItem value={false}>False</MenuItem>
                  </Select>
                </div>
                <div className="col-6">
                  <p>Limited Stock</p>
                  <Select
                    className={classes.categoryInput}
                    labelId="limitedStock"
                    value={isLimitedStock}
                    onChange={(e) => setIsLimitedStock(e.target.value)}
                  >
                    <MenuItem value={true}>True</MenuItem>
                    <MenuItem value={false}>False</MenuItem>
                  </Select>
                </div>

                <div className="col-6">
                  <p>Category</p>
                  <Select
                    className={classes.categoryInput}
                    labelId="categories"
                    value={category}
                    onChange={(e) => setCategories(e.target.value)}
                  >
                    <MenuItem value="MUSIC">MUSIC</MenuItem>
                    <MenuItem value="GAMING">GAMING</MenuItem>
                    <MenuItem value="LAPTOP">LAPTOP</MenuItem>
                    <MenuItem value="PHOTOGRAPHY">PHOTOGRAPHY</MenuItem>
                  </Select>
                </div>

                <div className="col-6">
                  <p>Sub Categories</p>
                  <Select
                    className={classes.categoryInput}
                    value={subcat}
                    onChange={subChange}
                  >
                    <MenuItem value="GUITAR">GUITAR</MenuItem>
                    <MenuItem value="KEYBOARD">KEYBOARD</MenuItem>
                    <MenuItem value="PERCUSSION">PERCUSSION</MenuItem>
                    <MenuItem value="RECORDING">RECORDING</MenuItem>
                    <MenuItem value="PACKAGES">PACKAGES</MenuItem>
                    <MenuItem value="PC GAMING">PC GAMING</MenuItem>
                    <MenuItem value="CONSOLE">CONSOLE</MenuItem>
                    <MenuItem value="ACCESSORIES">ACCESSORIES</MenuItem>
                    <MenuItem value="GAMING">GAMING</MenuItem>
                    <MenuItem value="i3">i3</MenuItem>
                    <MenuItem value="i5">i5</MenuItem>
                    <MenuItem value="i7">i7</MenuItem>
                    <MenuItem value="MACBOOK">MACBOOK</MenuItem>
                    <MenuItem value="PC">PC</MenuItem>
                    <MenuItem value="TABLETS">TABLETS</MenuItem>
                    <MenuItem value="CAMERA">CAMERA</MenuItem>
                    <MenuItem value="FILTERS">FILTERS</MenuItem>
                    <MenuItem value="LENS">LENS</MenuItem>
                    <MenuItem value="LIGHTS">LIGHTS</MenuItem>
                    <MenuItem value="RECORDING">RECORDING</MenuItem>
                    <MenuItem value="RIGS">RIGS</MenuItem>
                  </Select>
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <TextField
                type="number"
                label="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              <TextField
                label="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <br />
            <br />
            <TextareaAutosize
              aria-label="minimum height"
              rowsMin={5}
              style={{ width: "100%", padding: "1%" }}
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            {/*    <label>Specification</label>
            <div>
              {/* <TextField label="Brand" />
              <TextField label="Specification" /> 
              {fields.map((field, idx) => {
                return (
                  <div key={`${field}-${idx}`}>
                    <TextField
                      type="text"
                      label="Brand"
                      value={field.value || ""}
                      onChange={(e) => handleChange(idx, e)}
                    />
                    <TextField
                      type="text"
                      label="Specification"
                      value={field.value || ""}
                      onChange={(e) => handleChange(idx, e)}
                    />
                    <button type="button" onClick={() => handleRemove(idx)}>
                      X
                    </button>
                  </div>
                );
              })}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              <Btn
                variant="outlined"
                color="primary"
                type="button"
                onClick={() => handleAdd()}
              >
                Add a new Specification
              </Btn>
            </div>
            <label>BOX</label>
            <div>
              {/* <TextField label="Brand" />
              <TextField label="Specification" /> 
              {fields.map((field, idx) => {
                return (
                  <div key={`${field}-${idx}`}>
                    <TextField
                      type="text"
                      label="Box Content"
                      value={field.value || ""}
                      onChange={(e) => handleChange(idx, e)}
                    />
                    <TextField
                      type="text"
                      label="Image Location"
                      value={field.value || ""}
                      onChange={(e) => handleChange(idx, e)}
                    />
                    <button type="button" onClick={() => handleRemove(idx)}>
                      X
                    </button>
                  </div>
                );
              })}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              <Btn
                variant="outlined"
                color="primary"
                type="button"
                onClick={() => handleAdd()}
              >
                Add a new box content
              </Btn>
            </div>

            <label>Images</label>
            <div>
              {/* <TextField label="Brand" />
              <TextField label="Specification" /> 
              {fields.map((field, idx) => {
                return (
                  <div key={`${field}-${idx}`}>
                    <TextField
                      type="text"
                      label="Box Content"
                      value={field.value || ""}
                      onChange={(e) => handleChange(idx, e)}
                    />
                    <button type="button" onClick={() => handleRemove(idx)}>
                      X
                    </button>
                  </div>
                );
              })}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              <Btn
                variant="outlined"
                color="primary"
                type="button"
                onClick={() => handleAdd()}
              >
                Add a new image
              </Btn>
            </div>
            <label>BOX</label>
            <div>
              {/* <TextField label="Brand" />
              <TextField label="Specification" /> 
              {fields.map((field, idx) => {
                return (
                  <div key={`${field}-${idx}`}>
                    <TextField
                      type="text"
                      label="Add Object Id of Adons"
                      value={field.value || ""}
                      onChange={(e) => handleChange(idx, e)}
                    />
                    <TextField
                      type="text"
                      label="Image Location"
                      value={field.value || ""}
                      onChange={(e) => handleChange(idx, e)}
                    />
                    <button type="button" onClick={() => handleRemove(idx)}>
                      X
                    </button>
                  </div>
                );
              })}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              <Btn
                variant="outlined"
                color="primary"
                type="button"
                onClick={() => handleAdd()}
              >
                Add a new Add On
              </Btn>
            </div> */}
            <DropzoneArea
            //onChange={this.handleChange.bind(this)}
            />
            <input
              className="btn btn-outline-success submit"
              type="submit"
              value="submit"
            />
          </form>
        </Modal.Body>
      </Modal>
    );
  }

  function Products() {
    const [addProductModalShow, setAddProductModalShow] = useState(false);

    return (
      <div className="allproducts">
        <div className="buttons">
          <div className="btn btn-outline-success">
            FILTER <i className="fas fa-chevron-circle-down" />
          </div>
          <div
            className="btn btn-outline-info"
            onClick={() => setAddProductModalShow(true)}
          >
            <i className="fas fa-plus-circle" /> ADD A NEW PRODUCT
          </div>
          <AddProductModal
            show={addProductModalShow}
            onHide={() => setAddProductModalShow(false)}
          />
        </div>

        <div className="table">
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <th>_id</th>
              <th>PRODUCT ID</th>
              <th>CATEGORY</th>
              <th>SUB CATEGORY</th>
              <th>NAME</th>
              <th>LENDERS</th>
              <th>EDIT</th>
            </thead>
            <tbody>
              {p.map((item, index) => {
                return (
                  <tr>
                    <td>{item._id}</td>
                    <td>{item.id}</td>
                    <td>{item.category}</td>
                    <td>{item.subcategory}</td>
                    <td>{item.productName}</td>
                    <td>
                      <Link to="/alllenders">
                        <i className="fas fa-info" />
                      </Link>
                    </td>
                    <td>
                      <Link to={`/allproducts/editproductdetails/${item._id}`}>
                        <i className="fas fa-edit" />
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/allproducts/editproductdetails/:_id">
            <EditProductDetails />
          </Route>
          <Route path="/allproducts/">
            <Products />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
