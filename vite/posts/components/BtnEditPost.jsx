import { useState } from "react";
import PostEdit from "../pages/PostEdit";
export default function BtnEditPost({data}) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <button onClick={() => setIsOpen(true)}>Edit Post</button>
            {/* Render Modal theo điều kiện */}
            {isOpen && <PostEdit data={data} close={() => setIsOpen(false)} />}
        </div>
    );
}