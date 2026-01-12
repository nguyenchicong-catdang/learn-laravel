import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useFetcher } from "react-router";

export default function PostEdit({ close, data }) {
    // console.log("PostEdit data:", data);
    const fetcher = useFetcher();
    const fetcherData = fetcher.data || null;
    const errors = fetcherData?.errors || null;
    // const navigate = useNavigate();

    // const data = fetcher.load("/posts/1/edit"); // Thay '1' bằng ID bài viết thực tế
    // Chỉ chạy 1 lần duy nhất khi Component được mount
    // useEffect(() => {
    //     if (id) {
    //         fetcher.load(`/posts/${id}/edit`); // Thay '1' bằng ID bài viết thực tế
    //     }
    // }, []);

    // LẮNG NGHE THAY ĐỔI CỦA fetcherData
    // useEffect(() => {
    //     // console.log("Cập nhật fetcherData:", fetcherData);
    //     if (fetcherData?.success) {
    //                     // console.log(
    //                     //     "Cập nhật thành công, đang chuyển hướng..."
    //                     // );

    //         close(); // Đóng modal trước
    //         // navigate(`/posts/${data.id}`); // Sau đó chuyển hướng
    //     }
    //     // }, [fetcherData, navigate, data.id, close]);
    //         }, [fetcherData]);

    // 2. Dùng useEffect để xử lý logic "sau khi có kết quả"
    useEffect(() => {
        // Chỉ chạy khi fetcher đã xong (idle) và có data success
        if (fetcher.state === "idle" && fetcherData?.success) {
            close();
            // navigate(...)
        }
    }, [fetcherData, fetcher.state, close]);


    const handleSubmit = async (e, id) => {
        e.preventDefault();
        // Handle form submission here
        // console.log("Form submitted", id);
        const formData = new FormData(e.currentTarget);
        fetcher.submit(formData, {
            method: "POST",
            action: `/posts/${id}/update`,
        });
        // const fetcherData = fetcher.data || null;
        //console.log("fetcherData after submit:", fetcherData);
        // const success = await fetcherData?.success || false;
        // console.log("submit success:", success);
        // if (success) {
        //     // Nếu thành công, đóng modal
        //     close();
        //     // navigate(`/posts/${id}`);
        // }
    };
    return createPortal(
        /* 1. Lớp Overlay bao phủ toàn màn hình */
        <div className="post-edit" onClick={close}>
            {/* Thẻ div con (Panel bên phải) */}
            <div onClick={(e) => e.stopPropagation()}>
                <div>
                    <h4>Chỉnh sửa bài viết</h4>
                    <button onClick={close}>Dong</button>
                </div>
                <hr />
                {/* Nội dung form của bạn ở đây */}
                {data ? (
                    <form onSubmit={(e) => handleSubmit(e, data.id)}>
                        Title:{" "}
                        <input
                            type="text"
                            name="title"
                            defaultValue={data.title}
                        />
                        Content:{" "}
                        <textarea
                            name="content"
                            defaultValue={data.content}
                        ></textarea>
                        <button type="submit">Update Post</button>
                        {errors &&
                            Object.entries(errors).map(([key, err]) => (
                                <p className="err-mess" key={key}>
                                    {err[0]}
                                </p>
                            ))}
                    </form>
                ) : (
                    <form onSubmit={handleSubmit}>
                        Title: <input type="text" name="title" />
                        Content: <textarea name="content"></textarea>
                        <button type="submit">Update Post</button>
                    </form>
                )}
            </div>
        </div>,
        document.body
    );
}