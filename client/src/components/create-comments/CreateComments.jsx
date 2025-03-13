import commentService from "../../services/commentService";

export default function CreateComments({
    email,
    gameId
}) {
    const commentsAction = async (formData) => {
        const comment = formData.get('comment');

        const createdComment = await commentService.createComment(email, gameId, comment);
        console.log(createdComment);
            
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
