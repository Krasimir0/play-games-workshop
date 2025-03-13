export default function CreateComments({
    email
}) {
    const commentsAction = (formData) => {
        const comment = formData.get('comment');
        
    }

    return (
    <article className="create-comment">
      <label>Add new comment:</label>
      <form className="form" action={commentsAction}>
        <textarea name="comment" placeholder="Comment......"></textarea>
        <input className="btn submit" type="submit" value="Add Comment" />
      </form>
    </article>
  );
}
