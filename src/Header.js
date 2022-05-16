import small from './img/logo-pequeno.png'

export default function Header () {
    return (
        <div className="top">
            <img id="small-logo" src={small} />
            <h1>ZapRecall</h1>
        </div>
    )

}
