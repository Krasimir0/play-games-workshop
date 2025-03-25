import { Link, useNavigate, useParams } from "react-router";
import CreateComments from "../create-comments/CreateComments";
import ShowComments from "../show-comments/ShowComments";
import { useDeleteGame, useGame } from "../../api/gameApi";
import useAuth from "../../hooks/useAuth";
import { useComments, useCreateComment } from "../../api/commentsApi";
import { useOptimistic } from "react";
import {v4 as uuid} from 'uuid';

export default function GameDetails() {
  const navigate = useNavigate();
  const { email, _id: userId } = useAuth();
  const { gameId } = useParams();
  const { game } = useGame(gameId);
  const { deleteGame } = useDeleteGame();
  const {comments, addComment} = useComments(gameId);
  const {create} = useCreateComment()
  const [optimisticComments, setOptimisticComments] = useOptimistic(comments, (state, newComment) => [...state, newComment])

  const gameDeleteClickHandler = async () => {
    const hasConfirm = confirm(
      `Are you sure you want to delete ${game.title} game?`
    );

    if (!hasConfirm) {
      return;
    }

    await deleteGame(gameId);

    navigate("/games");
  };

  const createCommentCreateHandler = async (comment) => {
    const newOptimisticComment= {
      id: uuid(),
      _ownerId: userId,
      gameId,
      comment,
      pending: true,
      author: {
        email,
      }
    }
    
    setOptimisticComments(state => [...state, newOptimisticComment]) 
    
    const commentResult = await create(gameId, comment);
     
    addComment({...commentResult, author: { email }});
    };

  const isOwner = userId === game._ownerId;

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

        <ShowComments comments={optimisticComments} />

        {isOwner && (
          <div className="buttons">
            <Link to={`/games/${gameId}/edit`} className="button">
              Edit
            </Link>
            <button className="button" onClick={gameDeleteClickHandler}>
              Delete
            </button>
          </div>
        )}
      </div>

      <CreateComments
        email={email}
        gameId={gameId}
        onCreate={createCommentCreateHandler}
      />
    </section>
  );
}
