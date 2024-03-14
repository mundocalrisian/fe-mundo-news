// import ReactDOM from "react-dom";
// import  findDOMNode  from "react-dom";
import "./share-buttons.css"

export function ShareButtons () {

    const url = window.location.href
    // console.log(window.location.href, "window ref");
    // console.log(encodeURIComponent(url));

    // const a = ReactDOM.findDOMNode(document.getElementsByClassName('.share-button'))
    // console.log(a);

    // switch () {
    //     case 'email':
    //     shareUrl = ``;
    //     break;
    //     case 'facebook':
    //     shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    //     break;
    //     case 'instagram':
    //     shareUrl = `https://reddit.com/submit?url=${encodeURIComponent(url)}`;
    //     break;
    //     case 'twitter':
    //     shareUrl = `https://twitter.com/share?url=${encodeURIComponent(url)}`;
    //     break;
    //     case 'linkedin':
    //     shareUrl = `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(url)}`;
    //     break;
    //     case 'whatsapp':
    //     shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`;
    //     break;
    // }

    function handleShare () {
        return window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank')
    }

    return (
        <div className="share-buttons">
                    <button className="share-button email"><i className="fa-regular fa-envelope"></i></button>
                    <button className="share-button whatsapp"><i className="fa-brands fa-whatsapp"></i></button>
                    <button onClick={handleShare()} className="share-button facebook"><i className="fa-brands fa-facebook"></i></button>
                    <button className="share-button instagram"><i className="fa-brands fa-instagram"></i></button>
                    <button className="share-button twitter"><i className="fa-brands fa-x-twitter"></i></button>
                    <button className="share-button linkedin"><i className="fa-brands fa-linkedin"></i></button>
                    <button className="share-button copy"><i className="fa-regular fa-copy"></i></button>
                </div>
    )
}