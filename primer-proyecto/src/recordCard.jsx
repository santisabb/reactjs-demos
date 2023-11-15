// eslint-disable-next-line react/prop-types
export function RecordCard ({ recordName, artistName }){
    return (<article className="record-card">
    <header className="record-img">
        <img src="https://t2.genius.com/unsafe/375x0/https%3A%2F%2Fimages.genius.com%2F3e0b7eb6a0e5bc356a29a7ff10e4c833.1000x1000x1.jpg" alt="542" />
    </header>
    <div className="record-info">
        <strong>{recordName}</strong>
        <p>Artista: <strong>{artistName}</strong></p>
        <p>TRACKLIST</p>
        <ol>
            <li>Keta</li>
            <li>Iba a llamarte ft. Duki</li>
            <li>Money</li>
            <li>Cuervos</li>
        </ol>
        <p>Este nuevo extended play(EP) de C.R.O, producida por <strong>ORODEMBOW</strong> y lanzada el 26 de Marzo de 2019 (un dia antes de que saliera Tumbando el club Remix)
        , nos trae un EP muy versatil y una colaboracion con Duki que es una de las mejores
        de esta dupla.
        </p>
    </div>    
    <button className="listened-button">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
<path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
</svg>
        Listened
    </button>
    <button className="like-button">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>

        Like
    </button>
</article>)
}