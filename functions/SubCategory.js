import axios from "axios";

export const getAllSubCategories = async () => {
    return await axios.get('https://cute-red-badger-tux.cyclic.app/api/sub-categories')
}