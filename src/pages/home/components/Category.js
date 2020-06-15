import React, { useEffect, useState, } from 'react';
import { handleGetCategory } from '../../../store/actions/CategoryAction'
import { ListItem } from '../../components/articles/Articles'

const Category = (props) => {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        getAllCategories();
    })
    const getAllCategories = () => {
        handleGetCategory().then(result => {
            setCategories(result.data)
        }).catch(error => {
        }).finally(() => {
            setIsLoading(false)
        })
    }
    return (
        <div>
            <h4 className="mt-2 bg-info text-light px-1 py-2">Recipe categories</h4>
            <p>Our amazing recipes .</p>
            {
                isLoading ? (
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border text-primary"></div>
                    </div>
                ) : (
                        <ul className="nav nav-pills flex-column">
                            {
                                categories.map((category, index) => {
                                    return (
                                        <ListItem key={`category${index}`} name={category.name} id={index} link={`/categories/${category.name}`} active={false} />
                                    )
                                })
                            }
                        </ul>
                    )
            }
            <hr className="d-sm-none" />
        </div>
    )
}
export default Category;