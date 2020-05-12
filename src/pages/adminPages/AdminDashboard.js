import React from 'react';
import Navbar from './components/Navbar';
import { ListItem } from '../components/Articles'

const AdminDashboard = (props) => {

    return (
        <div>
            <Navbar />
            <div className="container ">
                <div className="py-3 text-center">
                    <h2>Recipes</h2>
                    {/* <!-- Button to Open the Modal --> */}
                    <button type="button" className="btn btn-light" data-toggle="modal" data-target="#myModal">
                        Add New Recipe
                </button>
                </div>

                {/* <!-- The Modal --> */}
                <div className="modal fade" id="myModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                            {/* <!-- Modal Header --> */}
                            <div className="modal-header">
                                <h4 className="modal-title">Post New Recipe</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>

                            {/* <!-- Modal body --> */}
                            <div className="modal-body">
                                <form className="card p-3">

                                    <div className="form-group">
                                        <label>Category:</label>
                                        <select className="form-control" id="category">
                                            <option>select</option>
                                            <option>Rice Recipes</option>
                                            <option>Beans Recipes</option>
                                            <option>Sauce Recipes</option>

                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Title:</label>
                                        <input type="text" className="form-control" id="password" placeholder="Enter title" name="title" required={true} />
                                    </div>
                                    <div className='form-row'>
                                        <div className="form-group col">
                                            <div class="form-check">
                                                <label class="form-check-label">
                                                    <input type="radio" class="form-check-input" name="optradio" />Upload image
                                        </label>
                                            </div>
                                        </div>
                                        <div className="form-group col">
                                            <div class="form-check">
                                                <label class="form-check-label">
                                                    <input type="radio" class="form-check-input" name="optradio" />Upload image
                                        </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input type="file" className="form-control-file border" />
                                    </div>
                                    <div className="form-group">
                                        <textarea rows="15" className="form-control">Next, use our Get Started docs to setup Tiny!</textarea>
                                    </div>
                                    {
                                        false ? (
                                            <div className="d-flex justify-content-center">
                                                <div className="spinner-border text-primary"></div>
                                            </div>
                                        ) : (
                                                <div className="d-flex flex-row-reverse ">
                                                    <button type="submit" className="btn btn-primary" >Submit</button>
                                                </div>
                                            )
                                    }
                                </form>
                            </div>

                            {/* <!-- Modal footer --> */}
                            {/* <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div> */}

                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default AdminDashboard;