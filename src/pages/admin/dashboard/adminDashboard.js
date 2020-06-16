import React, { useState} from 'react';
import Navbar from '../components/Navbar';
import { connect } from 'react-redux';
import './adminDashboard.css';
import { handleAddCategory, handleGetCategory} from '../../../store/actions/CategoryAction';
import { handleAddRecipe } from '../../../store/actions/RecipeAction';
import Footer from '../../components/Footer'
const AdminDashboard = (props) => {

    const [view, setView] = useState('');
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('');

    if (!props.userDetails) {
          props.history.push('/admin');
    }
    const navCallback = (e, name) => {
        switch (name) {
            case 'view-category':
                getAllCategories();
                break;
            case 'add-recipe':
                getAllCategories();
                break;
            default:
                break;
        }
        setView(name);
    }
    const getAllCategories = ()=>{
        handleGetCategory().then(result => {
            setCategories(result.data)
        }).catch(error => {
            setError(error.message)
        }).finally(() => {
            setIsLoading(false)
        })
    }
    return (
        <div className="dashboard">
            <Navbar callback={navCallback} />
            <div className="container layout">
                {
                    view === 'add-recipe' ?
                        <AddRecipe 
                            view={view} 
                            handleAddRecipe={props.handleAddRecipe} 
                            categories={categories} 
                            err={error} 
                            isLoading={isLoading} 
                            setIsLoading={setIsLoading} />
                        :
                        view === 'add-category' ?
                            <AddCategory view={view} handleAddCategory={props.handleAddCategory} />
                            :
                            view === 'view-category' ?
                                <ViewCategory view={view} categories={categories} error={error} isLoading={isLoading} />
                                :
                                <></>
                }
            </div>
            <Footer />
        </div >
    )
}

const AddRecipe = ({ view, categories, err, isLoading, handleAddRecipe }) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const[payload,setPayload]=useState({
        title: "",
        content: "",
        category: "",
        mediafile:null
    })
    if(err)setError(err);
    const handleTextChange =(e,name)=>{
        setPayload({ ...payload, [name]: e.target.value})
        setSuccess("");
        setError("");
    }
    const handleFileChange = (e) => {
        setPayload({ ...payload, mediafile: e.target.files[0] })
        setSuccess("");
        setError("");
    }
    const categoryList = categories.map((category, index) => {
        return (
            <option key={`keys${category._id}`}>{category.name}</option>
        )
    })
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!payload.title&&payload.content&&!payload.mediafile&&!payload.category){
            return setError("please fill all fields")
        }
        setLoading(true);
        
        const data = new FormData()
        data.append('mediafile', payload.mediafile);
        data.append('title', payload.title);
        data.append('content', payload.content);
        data.append('category', payload.category);
   
        handleAddRecipe(data).then(result => {
                setSuccess(result.message)
            }).catch(error => {
               setError(error.message)
            }).finally(() => {
                setLoading(false);
            })

    }
    return (
        <div className="my-3 recipe-form">
            <h1 className="text-center header">{view}</h1>

            <form className="card p-2 " method="post" action='/admin-dashboard'>
                <div className="form-group mt-2">
                    <label>Category:</label>
                    {
                        isLoading ? (
                            <div className="d-flex justify-content-center">
                                <div className="spinner-border text-primary"></div>
                            </div>
                        ) : (
                                <select className="form-control" id="category" onChange={(e) => handleTextChange(e, 'category')}>
                                    <option>select</option>

                                    {
                                        categoryList
                                    }
                                </select>
                        )
                    }
                    
                </div>
                <div className="form-group">
                    <label>Title:</label>
                    <input type="text" className="form-control" id="password" onChange={(e) => handleTextChange(e,'title')} placeholder="Enter title" name="title" required={true} />
                </div>

                <div className="form-group">
                    <input type="file" className="form-control-file border" onChange={handleFileChange} />
                </div>
                <div className="form-group">
                    <textarea rows="10" onChange={(e) => handleTextChange(e, 'content')}  className="form-control"></textarea>
                </div>
                {
                    loading ? (
                        <div className="d-flex justify-content-center">
                            <div className="spinner-border text-primary"></div>
                        </div>
                    ) : (
                            <div className="d-flex flex-row-reverse ">
                                <button type="submit" className="btn btn-primary" onClick={handleSubmit} >Submit</button>
                            </div>
                        )
                }
                {
                    error &&
                    <p className="text-danger text-center">{error}</p>
                }
                {
                    success &&
                    <p className="text-success text-center">{success}</p>
                }
            </form>
        </div>
    )
}
const AddCategory = ({ view, handleAddCategory }) => {

    const [category, setCategory] = useState('');
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleTextChange = (e) => {
        // console.log(e.target.value)
        setCategory(e.target.value);
        setError("")
        setSuccess("")
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (category.length === 0) {
            return setError("please fill all fields")
        }
        let payload = { name: category }
        setIsLoading(true)
        handleAddCategory(payload).then(result => {
            setSuccess(result.message)
        }).catch(error => {
            setError(error.message)
        }).finally(() => {
            setIsLoading(false);
        })



    }
    return (
        <div className="my-3 recipe-form">
            <h1 className="text-center header">{view}</h1>
            <form className="card p-2 " method="post" action='/admin-dashboard'>
                <div className="form-group mt">
                    <label>Category name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="password"
                        placeholder="Enter category name"
                        value={category}
                        name="name"
                        onChange={handleTextChange}
                        required
                    />
                </div>
                {
                    isLoading ? (
                        <div className="d-flex justify-content-center">
                            <div className="spinner-border text-primary"></div>
                        </div>
                    ) : (
                            <div className="d-flex flex-row-reverse">
                                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                            </div>
                        )
                }
                {
                    error &&
                    <p className="text-danger text-center">{error}</p>
                }
                {
                    success &&
                    <p className="text-success text-center">{success}</p>
                }
            </form>

        </div>
    )
}

const ViewCategory = ({ view, categories, error, isLoading }) => {

    const tableList = categories.map((category, index) => {
        return (
            <tr key={`keys${category._id}`}>
                <td>{index}</td>
                <td>{category.name}</td>
                <td><i key={category._id} className="fa fa-trash" style={{ fontSize: 20 }} aria-hidden="true"></i></td>
            </tr>
        )
    })
    return (
        <div className="my-3">
            <h1 className="text-center header">{view}</h1>
            {
                isLoading ? (
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border text-primary"></div>
                    </div>
                ) : (
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>S/N</th>
                                    <th>Category name</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    tableList
                                }
                            </tbody>
                        </table>
                    )
            }
            {
                error &&
                <p className="text-danger text-center">{error}</p>
            }


        </div>
    )
}
const mapStateToProps = (state) => {
    // console.log('state', state);
    return {
        userDetails: state.auth.userDetails,
    }
}
export default connect(mapStateToProps, { handleAddCategory, handleAddRecipe })(AdminDashboard);