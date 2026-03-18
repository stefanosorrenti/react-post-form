//IMPORTS
import { useState } from "react"
import { useEffect } from "react"
export default function AppMain() {

    //USE STATE
    const [formData, setFormData] = useState({  //Creo un oggetto di stato che conterrà delle proprietà con lo stesso nome del valore dell'attributo 'name'

        author: '', 

        title : '',

        content: '',

        content: '',

        visibility: false

    })

    
    
    
    
    //FUCNTIONS
    function handlerSubmit(e) { //Funzione che attiverò al submit del form
        e.preventDefault() //Blocco il comportamento naturale del form

    }

    function handlerValue (e) { //Funzione che attiverò qunado ci saranno dei cambiamenti nei vari input 

        //Creo una costante in cui dico 'Se l'attributo type dell'elemento che ha scatenato l'evento (input) è uguale a 'checkbox' il valore di questa ' variabile è 
        //uguale all'attributo checked dell'elemento che ha scatenato l'evento, altrimenti è uguale all'ttributo value dell'elmeneto che ha scatenato l'evento.
        //Cosi facendo se il mio elemento è un checkbox posso settare ricavarmi il suo valroe booleano
        const type = e.target.type === 'checkbox' ? e.target.checked : e.target.value

        //Setto la mia variabile di statao cosi 'Crea un nuovo oggetto e inserisci tutti i dati clonati da l'oggetto form data'
        
        setFormData({...formData, [e.target.name] : type})  //e aggiungi una nuova proprietà, il nome della proprietà e [IL VALORE]  l'attribbuto name dell'elemento 
        // che scatenato l'evento  e il valore della proprietà è la variabile dichiarata prima
        console.log(formData);
        
        
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
                    <input name="author" placeholder="Autore" type="text" onChange={handlerValue} value={formData.author} />

                    {/* Post title */}
                    <input name="title" placeholder="Titolo" type="text" onChange={handlerValue} value={formData.title} />

                    {/* Post content */}
                    <textarea name="content"  onChange={handlerValue} value={formData.content}></textarea>

                    {/* Set post access */}
                    <input name="visibility" type="checkbox"  onChange={handlerValue} checked={formData.visibility} />
                    
                    {/* Send post */}
                    <button>invia post</button>
                </form>
    
            </section>
        </main>
    )
}