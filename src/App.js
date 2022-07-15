import logo from './logo.svg';
import './App.css';

const links = [
  {
      'name': 'Portfolio Site',
      'link': 'https://alz.netlify.app/', 
  },
  {
      'name': 'Visit My Github',
      'link': 'https://github.com/glopzel',
  },
  {
      'name': 'Check Out My Codepen Pens',
      'link': 'https://codepen.io/glopzel'
  },
  {
      'name': 'Follow My Instagram',
      'link': 'https://www.instagram.com/glopzel/',
  },
  {
      'name': 'Twitter',
      'link': 'https://twitter.com/glopzel',
  }
]

function App() {
  return (
    <section>
      <h1>Angela López Z.</h1>
      <ul>
                   {
                    links.map((item, index) => {
                        return (
                            <li key={index}>
                                <a href={item.link} target="_blank">
                                    {item.name}
                                </a>
                            </li>
                        )
                    })
                   }
               </ul>
    </section>
  );
}

export default App;
