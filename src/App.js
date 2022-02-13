import logo from './logo.svg';
import './App.css';
import img1 from "./components/download.jpg"
function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h4>Lata Mangeshkar Ji</h4>
        <p>The Voice of India</p>
      </div>
      <div className='img'>
        <img src={img1} alt='' />
      </div>
      <div className='about'>
        <p>Legendary singer Lata Mangeshkar, 92, passed away on Sunday, informed sister Usha Mangeshkar. Also known as the 'Queen of Melody' was very critical for the past few weeks. Her treatment was going in Mumbai's Breach Candy Hospital for several weeks. Mangeshkar was admitted to the hospital after being diagnosed with pneumonia and tested positive for the novel Coronavirus earlier in January. She was on the ventilator for weeks but then on January 28, she was taken off the ventilator as she showed signs of improvement.</p>
        <p>Regarded as one of Indian cinema's greatest playback singers, Mangeshkar started her career at the age of 13 in 1942 and has sung over 30,000 songs in various Indian languages.</p>
        <p>In her over a seven-decade career, she has sung a host of memorable tracks, including "Ajeeb dastan hai ye", “Sunn Sahiba sunn", “Kaanta laga", "Pyar kiya to darna kya" and "Neela asman so gaya".

The singer -- known as Melody Queen of India -- has been given the Bharat Ratna, India’s highest civilian honour, as well as the Padma Bhushan, the Padma Vibhushan and the Dada Saheb Phalke Award.

Tributes have poured in for Lata Mangeshkar after the news broke, with Prime Minister Narendra Modi saying, "anguished beyond words".

PM Modi shared a slew of pictures of the great Bollywood singer and wrote, "I am anguished beyond words. The kind and caring Lata Didi has left us. She leaves a void in our nation that cannot be filled. The coming generations will remember her as a stalwart of Indian culture, whose melodious voice had an unparalleled ability to mesmerise people".</p>
<p>"Lata Didi’s songs brought out a variety of emotions. She closely witnessed the transitions of the Indian film world for decades. Beyond films, she was always passionate about India’s growth. She always wanted to see a strong and developed India," PM Modi added.</p>
      </div>
    </div>
  );
}

export default App;
