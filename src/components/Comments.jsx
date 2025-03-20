import { useState,useEffect } from "react";
import { fetchingComments } from "./utills/fetchingComments";

export default function Commenets({postId}) {
    const [comments,setComments] = useState([])
    useEffect(() => {
        let ignore= false;
        console.log('effecting');
        // fetching data here
         async function startFetching (){
            const json = await fetchingComments(postId);
            if(!ignore){
                setComments(json);
                console.log('fetching...');
            }
         }
         startFetching();
         return () => {
            ignore = true
         }

    },[postId]);
  return (
    <div>
      {comments.map((comment) => <li key={comment.id}>{comment.name}</li>)}
    </div>
  );
} 