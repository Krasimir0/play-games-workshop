export default function GameEdit() {
    return (
        <section id="edit-page" className="auth">
        <form id="edit">
            <div className="container">

                <h1>Edit Game</h1>
                <label hmtlFor="leg-title">Legendary title:</label>
                <input type="text" id="title" name="title" value=""/>

                <label hmtlFor="category">Category:</label>
                <input type="text" id="category" name="category" value=""/>

                <label hmtlFor="levels">MaxLevel:</label>
                <input type="number" id="maxLevel" name="maxLevel" min="1" value=""/>

                <label hmtlFor="game-img">Image:</label>
                <input type="text" id="imageUrl" name="imageUrl" value=""/>

                <label hmtlFor="summary">Summary:</label>
                <textarea name="summary" id="summary"></textarea>
                <input className="btn submit" type="submit" value="Edit Game"/>

            </div>
        </form>
    </section>
    )
}