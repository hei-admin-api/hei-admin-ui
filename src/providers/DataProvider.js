import environment from "../conf/environment";
import axios from 'axios';


const API_BASE_URL = environment.apiBaseUrl;

export function DataProvider({ children }) {
    const getList = (resource) => axios.get(`${API_BASE_URL}/${resource}`);

    const getOne = (resource, id) =>
        axios.get(`${API_BASE_URL}/${resource}/${id}`);

    const deleteOne = (resource, id) =>
        axios.delete(`${API_BASE_URL}/${resource}/${id}`);

    const save = (resource, props) =>
        axios.post(`${API_BASE_URL}/${resource}`, props);

    const update = (resource, id, props) =>
        axios.patch(`${API_BASE_URL}/${resource}/${id}`, props);

    const methodToProvide = useMemo<DataService>(
        () => ({
            getList,
            save,
            update,
            getOne,
            deleteOne,
        }),
            []
    );

    return (
        <DataContext.Provider value={methodToProvide}>
            {children}
        </DataContext.Provider>
    );
}