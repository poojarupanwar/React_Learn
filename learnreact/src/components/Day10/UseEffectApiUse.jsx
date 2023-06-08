import axios from "axios";
import React, { useEffect, useState } from "react";
import './postListStyle.css'
function UseEffectApiCall() {
  const [postData, setPostData] = useState([]);
  useEffect(() => {
    const getPostData = async () => {
      try {
        const pData = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        console.log(pData.data);
        setPostData(pData.data);
      } catch (error) {
        console.log(error);
      }
    };
    getPostData();
  }, []);
  return (
    <>
      <div>
        <h3>POST LIST</h3>
      </div>
      <div className="mrg25">
        <table>
          <thead>
            <tr>
              <th>USER ID </th>
              <th>TITLE</th>
              <th> BODY </th>
            </tr>
          </thead>
          <tbody>
            {
               postData.map(post=>(
                    <tr key={post.id}>
                        <td>{post.userId}</td>
                        <td>{post.title}</td>
                        <td>{post.body}</td>
                    </tr>
               )) 
            }
          </tbody>
        </table>
      </div>
    </>
  );
}

export default UseEffectApiCall;
