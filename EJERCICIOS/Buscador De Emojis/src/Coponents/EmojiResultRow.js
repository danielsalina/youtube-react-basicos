export default function EmojiResultRow ({symbol, title}) {

    const codePointHex = symbol.codePointAt(0).toString(16);
    const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;

    return(
        <div data-clipboard-text={symbol}>
            <img src={src} alt={title} />
            <span>{title}</span>
            <span>Haz clic acá para copiar el emoji</span>
        </div>
    )
}