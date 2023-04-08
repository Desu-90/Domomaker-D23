const React = require('react');
const ReactDOM = require('react-dom');

const AboutWindow = (props) => {
    return (
        <div> 
            <iframe width="560" height="315" src="https://www.youtube.com/embed/PcltCupJUuk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <p>Domo (どーも くん, Dōmo-kun) is the official mascot of Japan's public broadcaster NHK, appearing in several 30-second stop-motion interstitial sketches, which are shown as station identification in between the channel's programming.</p>
            </div>
            
    )
}

const init = () => {
    ReactDOM.render(<AboutWindow />, 
        document.getElementById('content'));
}

window.onload = init;