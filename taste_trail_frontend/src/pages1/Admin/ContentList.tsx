// import {useMutation, useQuery} from "react-query";
// import axios from "axios";
// import {useNavigate} from "react-router-dom";
//
// function ContentList() {
//
//     const navigate = useNavigate();
//
//     const {data, refetch} = useQuery({
//         queryKey: ["LIST_CONTENT"],
//         queryFn: () => {
//             return axios.get("http://localhost:8080/content")
//         }
//     })
//
//
//     const deleteApi = useMutation({
//         mutationKey: ["DELETE_CONTENT"],
//         mutationFn: (id: number) => {
//             return axios.delete("http://localhost:8080/content/" + id)
//         }
//     })
//
//     console.log(data)
//
//
//     return (
//         <>
//             <button onClick={() => {
//                 navigate("/admin/contentCreate")
//             }}>Add Content
//             </button>
//             <table>
//                 <thead>
//                 <tr>
//                     <th>Recipe Title</th>
//                     <th>Recipe Photo</th>
//                     <th>Quantity Number</th>
//                     <th>Quantity Type</th>
//                     <th>Action</th>
//                 </tr>
//                 </thead>
//                 <tbody>
//                 {data?.data?.data?.map(i => (
//
//
//                     <tr>
//                         <td>{i?.recipeTitle}</td>
//                         <td>{i?.recipePhoto}</td>
//                         <td>{i?.recipeQuantityNumber}</td>
//                         <td>{i?.recipeQuantityType}</td>
//                         <td>
//                             <button onClick={() => {
//                                 navigate("/admin/contentedit/" + i?.id)
//                             }}>edit
//                             </button>
//                             <button onClick={() => {
//                                 deleteApi.mutate(i?.id, {
//                                     onSuccess() {
//                                         refetch()
//                                     }
//                                 })
//                             }}>delete
//                             </button>
//                         </td>
//                     </tr>
//                 ))}
//                 </tbody>
//             </table>
//         </>
//     );
// }
//
//
// export default ContentList;