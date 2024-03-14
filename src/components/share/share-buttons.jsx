import "./share-buttons.css"
import {EmailShareButton,
    FacebookShareButton,
    GabShareButton,
    HatenaShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton,
} from "react-share"
import {
    EmailIcon,
    FacebookIcon,
    FacebookMessengerIcon,
    GabIcon,
    HatenaIcon,
    InstapaperIcon,
    LineIcon,
    LinkedinIcon,
    LivejournalIcon,
    MailruIcon,
    OKIcon,
    PinterestIcon,
    PocketIcon,
    RedditIcon,
    TelegramIcon,
    TumblrIcon,
    TwitterIcon,
    ViberIcon,
    VKIcon,
    WeiboIcon,
    WhatsappIcon,
    WorkplaceIcon,
    XIcon,
    } from "react-share";


export function ShareButtons () {

    const url = window.location.href
   
    // function handleShare () {
    //     return window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank')
    // }

    return (
        <>
            <div className="react-share-buttons">
            <EmailShareButton url={url}>
                <EmailIcon size={32} round={true}/>
            </EmailShareButton>
            <TwitterShareButton>
                <XIcon size={32} round={true}/>
            </TwitterShareButton>
            </div>
        {/* <div className="share-buttons">
            <button className="share-button email"><i className="fa-regular fa-envelope"></i></button>
            <button className="share-button whatsapp"><i className="fa-brands fa-whatsapp"></i></button>
            <button onClick={handleShare()} className="share-button facebook"><i className="fa-brands fa-facebook"></i></button>
            <button className="share-button instagram"><i className="fa-brands fa-instagram"></i></button>
            <button className="share-button twitter"><i className="fa-brands fa-x-twitter"></i></button>
            <button className="share-button linkedin"><i className="fa-brands fa-linkedin"></i></button>
            <button className="share-button copy"><i className="fa-regular fa-copy"></i></button>
        </div> */}
        </>
    )
}