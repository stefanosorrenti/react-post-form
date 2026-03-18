export default function AppMain() {

    return (
        /* Main */
        <main>

            {/* FORM SECTION */}

            <section>
                <h2>Inserisci il tuo post.</h2>

                {/* Form */}
                <form>

                    {/* Post authour */}
                    <input placeholder="Autore" type="text" />

                    {/* Post title */}
                    <input placeholder="Titolo" type="text" />

                    {/* Post content */}
                    <textarea name="" id=""></textarea>

                    {/* Set post access */}
                    <input type="checkbox" />
                    
                    {/* Send post */}
                    <button>invia post</button>
                </form>
    
            </section>
        </main>
    )
}