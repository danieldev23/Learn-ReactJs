import './App.css';
import YoutubeList from './Components/YoutubeList';



function App() {
  const name = "Danieldev";
  return (
    <div>
     <YoutubeList>
      {name}
      {/* props children: html, text, components */}
     </YoutubeList>
    </div>
  );
}

export default App;
