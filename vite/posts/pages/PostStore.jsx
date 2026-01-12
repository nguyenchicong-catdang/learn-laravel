import { Form, useActionData } from "react-router"
export default function PostStore() {
  const actionData = useActionData();
  // console.log("actionData", actionData);
  const errors = actionData?.errors || {};
  // console.log("errors", errors);
  return (
      <div className="post-store">
          <Form method="POST">
              Title: <input type="text" name="title" />
              Content: <textarea name="content"></textarea>
              <button type="submit">Post Store</button>
      {errors && Object.entries(errors).map(([key, value]) => (
        <p key={key} className="err-mess">{value}</p>
      ))}
      </Form>
    </div>
  )
}