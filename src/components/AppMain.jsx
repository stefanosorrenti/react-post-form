//IMPORTS
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
export default function AppMain() {

    //USE STATE
    const [formData, setFormData] = useState({  //Creo un oggetto di stato che conterrà delle proprietà con lo stesso nome del valore dell'attributo 'name'

        author: '', 

        title : '',

        body: '',

        pubblic: false

    })

    
    
    
    
    //FUCNTIONS
    function handlerSubmit(e) { //Funzione che attiverò al submit del form
        e.preventDefault() //Blocco il comportamento naturale del form
        //console.log(formData);
        
        axios.post('https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts', formData) //Richiamo axios con il metodo post ed uso 2 parametri: il mi endpoint e i dati da inviare (gia' parsati)
        .then(res => {  //Qui gestisco la risposta 
            console.log(`Dati inviati`); //Loggo i dati in console
            console.log(res.data);

            alert('Post aggiunto!')
            

            
        })
        .catch(err => { //Qui gestisco l'errore 
            console.log(err); //In caso di errore
            alert(`Qualcosa è andato storto!
                ${err}`)
        })

        


        /* fetch('https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts', {
            method: 'POST',
            headers : {'Content-Type': 'application/json; charset=UTF-8'},
            body : JSON.stringify(formData)

        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            
        }) */
    }


    function handlerValue (e) { //Funzione che attiverò qunado ci saranno dei cambiamenti nei vari input 

        //Creo una costante in cui dico 'Se l'attributo type dell'elemento che ha scatenato l'evento (input) è uguale a 'checkbox' il valore di questa ' variabile è 
        //uguale all'attributo checked dell'elemento che ha scatenato l'evento, altrimenti è uguale all'ttributo value dell'elmeneto che ha scatenato l'evento.
        //Cosi facendo se il mio elemento è un checkbox posso settare ricavarmi il suo valroe booleano
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value

        //Setto la mia variabile di statao cosi 'Crea un nuovo oggetto e inserisci tutti i dati clonati da l'oggetto form data'

        setFormData({...formData, [e.target.name] : value})  //e aggiungi una nuova proprietà, il nome della proprietà e [IL VALORE]  l'attribbuto name dell'elemento 
        // che scatenato l'evento  e il valore della proprietà è la variabile dichiarata prima
        //console.log(formData);
        
        
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
                    <textarea name="body"  onChange={handlerValue} value={formData.body}></textarea>

                    {/* Set post access */}
                    <input name="pubblic" type="checkbox"  onChange={handlerValue} checked={formData.pubblic} />
                    
                    {/* Send post */}
                    <button>invia post</button>
                </form>
    
            </section>
        </main>
    )
}