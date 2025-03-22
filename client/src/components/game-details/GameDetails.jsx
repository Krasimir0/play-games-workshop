import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import gameService from "../../services/gameService";
import CreateComments from "../create-comments/CreateComments";
import ShowComments from "../show-comments/ShowComments";
import commentService from "../../services/commentService";
import { userContext } from "../../contexts/userContexts";
import { useGame } from "../../api/gameApi";

export default function GameDetails() {
  const navigate = useNavigate();
  const { email } = useContext(userContext) 
  const { gameId } = useParams();
  const [comments, setComments] = useState([])
  const { game } = useGame(gameId);

  useEffect(() => {
      commentService.getAll(gameId)
      .then(setComments)
  }, [gameId])
  const gameDeleteClickHandler = async () => {
    const hasConfirm = confirm(
      `Are you sure you want to delete ${game.title} game?`
    );

    if (!hasConfirm) {
      return;
    }

    await gameService.deleteGame(gameId);

    navigate("/games");
  };

  const createCommentCreateHandler = (newComment) => {
    setComments(state => [...state, newComment])
  }

  return (
    <section id="game-details">
      <h1>Game Details</h1>
      <div className="info-section">
        <div className="game-header">
          <img className="game-img" src={game.imageUrl} />
          <h1>{game.title}</h1>
          <span className="levels">MaxLevel: {game.maxLevel}</span>
          <p className="type">{game.category}</p>
        </div>

        <p className="text">{game.summary}</p>

        <ShowComments comments={comments} />

        <div className="buttons">
          <Link to={`/games/${gameId}/edit`} className="button">
            Edit
          </Link>
          <button className="button" onClick={gameDeleteClickHandler}>
            Delete
          </button>
        </div>
      </div>

      <CreateComments
       email={email}
       gameId={gameId}
       onCreate={createCommentCreateHandler}
       />
    </section>
  );
}
