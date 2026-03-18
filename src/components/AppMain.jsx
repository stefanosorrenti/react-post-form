//IMPORTS
import { useState } from "react"
import { useEffect } from "react"

export default function AppMain() {

    //USE STATE
    
    //FUCNTIONS
    function handlerSubmit(e) { //Funzione che si attiva al submit del form
        e.preventDefault() //Blocco il comportamento naturale del form

    }

    return (
        /* Main */
        <main>

            {/* FORM SECTION */}

            <section>
                <h2>Inserisci il tuo post.</h2>

                {/* Form */}
                <form onSubmit={handlerSubmit}>

                    {/* Post authour */}
                    <input name="author" placeholder="Autore" type="text" />

                    {/* Post title */}
                    <input name="title" placeholder="Titolo" type="text" />

                    {/* Post content */}
                    <textarea name="content" id=""></textarea>

                    {/* Set post access */}
                    <input name="checkbox" type="checkbox" />
                    
                    {/* Send post */}
                    <button>invia post</button>
                </form>
    
            </section>
        </main>
    )
}