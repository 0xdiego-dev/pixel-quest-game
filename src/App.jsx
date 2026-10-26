//import "./App.css"
import GameHeader from "./components/GameHeader";
import PlayerCard from "./components/PlayerCard";
import MissionCard from "./components/MissionCard";

function App() {
  return (
    
    <main>
    {/* Aqui van tus componentes*/}
      
      {/* Contenedor de las tarjetas de los personajes */}
      <GameHeader/>

      <section style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {/* Personaje 1 */}
        <PlayerCard
        nombre= "🧙 Mago Pixel"
        nivel= {1}
        vidas= "❤️ ❤️ ❤️" 
        />
        {/* Personaje 2 */}
        <PlayerCard
        nombre= "🥷🏼 Ninja"
        nivel= {3}
        vidas= "❤️ ❤️"
        />
        {/* Personaje 3 */}
        <PlayerCard
        nombre= "🛡️ Caballero"
        nivel= {5}
        vidas= "❤️ ❤️ ❤️ ❤️ ❤️"
        />
      </section>
        <MissionCard
        nombre= "El Bosque de los Susurros"
        emoji= "🌲"
        descripcion= "Encuentra la brújula antigua antes de que caiga la noche y los árboles cambien de lugar."
        />
        <MissionCard
        nombre= "Rescate en la Caverna"
        emoji= "🦇"
        descripcion= "Libera a los mineros atrapados esquivando a los murciélagos de cristal."
        />
        <MissionCard
        nombre= "La Forja del Dragón"
        emoji= "🌋"
        descripcion= "Recolecta 5 piedras volcánicas para mejorar la armadura de tu equipo."
        />
        <MissionCard
        nombre= "Infiltración en el Castillo"
        emoji= "🏰"
        descripcion= "Recupera el pergamino mágico sin alertar a los guardias reales del laberinto."
        />
        <MissionCard
        nombre= "El Acertijo del Puente"
        emoji= "🏰"
        descripcion= "Responde correctamente las tres preguntas del Trol para cruzar al reino vecino."
        />
    </main>
  );
}

export default App;