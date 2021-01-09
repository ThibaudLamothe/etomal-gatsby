import React from "react"
import Bandeau from "../components/bandeau"

const Map = () => (
  <div>
    <Bandeau className="m-0 p-0" title="Map" subtitle="Where I leave" dark />
    <div className="embed-responsive embed-responsive-16by9 map p-0 m-0">
      <iframe
        className="embed-responsive-item"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17332.519793832525!2d-0.6121263417623365!3d44.79189767578775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd54d8a040f9cf43%3A0x7c442696e278d09f!2s18%20Rue%20de%20l&#39;Yser%2C%2033400%20Talence!5e0!3m2!1sfr!2sfr!4v1600531644190!5m2!1sfr!2sfr"
        title="Thibaud Lamothe - City"
        frameBorder="0"
        allowFullScreen="{true}"
        aria-hidden="false"
      />
    </div>
  </div>
)

export default Map
