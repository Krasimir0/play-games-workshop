
export default function CreateComments({
    onCreate
}) {
    const commentsAction = async (formData) => {
        const comment = formData.get('comment');

        onCreate(comment);        
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
