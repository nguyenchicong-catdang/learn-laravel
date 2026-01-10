import { Form } from "react-router"
export default function PostStore() {
  return (
      <div className="post-store">
          <Form>
              Title: <input type="text" name="title" />
              Content: <textarea name="content"></textarea>
              <button type="submit">Post Store</button>
          </Form>
    </div>
  )
}