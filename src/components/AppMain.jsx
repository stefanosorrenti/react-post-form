//IMPORTS
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
export default function AppMain() {

    //USE STATE
    const [formData, setFormData] = useState({  //Creo un oggetto di stato che conterrà delle proprietà con lo stesso nome del valore dell'attributo 'name'

        author: '',

        title: '',

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


    function handlerValue(e) { //Funzione che attiverò qunado ci saranno dei cambiamenti nei vari input 

        //Creo una costante in cui dico 'Se l'attributo type dell'elemento che ha scatenato l'evento (input) è uguale a 'checkbox' il valore di questa ' variabile è 
        //uguale all'attributo checked dell'elemento che ha scatenato l'evento, altrimenti è uguale all'ttributo value dell'elmeneto che ha scatenato l'evento.
        //Cosi facendo se il mio elemento è un checkbox posso settare ricavarmi il suo valroe booleano
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value

        //Setto la mia variabile di statao cosi 'Crea un nuovo oggetto e inserisci tutti i dati clonati da l'oggetto form data'

        setFormData({ ...formData, [e.target.name]: value })  //e aggiungi una nuova proprietà, il nome della proprietà e [IL VALORE]  l'attribbuto name dell'elemento 
        // che scatenato l'evento  e il valore della proprietà è la variabile dichiarata prima
        //console.log(formData);


    }

    return (
        /* Main */
        <main className="mt-5">

            {/* FORM SECTION */}

            <section className="container">
                {/* Card */}
                <div className="card">

                    {/* Form */}
                    <form onSubmit={handlerSubmit} className="card-body">
                        <h2 className="text-center card-title">Inserisci il tuo post.</h2>

                        {/* Post authour */}
                        <label className="form-label h5" htmlFor="author">Inserisci l'autore del post.</label>
                        <input className="form-control mb-3" name="author" id="author" placeholder="Autore" type="text" onChange={handlerValue} value={formData.author} />

                        {/* Post title */}
                        <label className="form-label h5" htmlFor="title">Inserisci il titolo del post.</label>
                        <input className="form-control mb-3" name="title" id="title" placeholder="Titolo" type="text" onChange={handlerValue} value={formData.title} />

                        {/* Post content */}
                        <div className="form-floating">

                            <textarea className="form-control mb-3" name="body" id="floatingTextarea" placeholder="Scrivi qui il tuo contenuto.." onChange={handlerValue} value={formData.body}></textarea>
                            <label htmlFor="floatingTextarea">Contenuto:</label>

                        </div>
                        
                        {/* Card footer */}
                        <div className="card-footer d-flex flex-column align-items-center">
                            {/* Set post access */}

                            <div className="form-check">
                                <label htmlFor="form-check-label">Post pubblico</label>
                                <input className="form-check-input" name="pubblic" id="pubblic" type="checkbox" onChange={handlerValue} checked={formData.pubblic} />
                            </div>
                            
                            {/* Send post */}
                            <button className="btn btn-danger">invia post</button>

                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}