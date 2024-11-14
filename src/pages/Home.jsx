import React from 'react';
import Slideshow from './Slideshow';
import Card from './Card';

// Importe as imagens para os cards exemplo
import img1 from '../assets/eolica.jpg';
import img2 from '../assets/solar.webp';

function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mt-4 mb-8">Energia Limpa para um Futuro Sustentável</h1>

      {/* Slideshow */}
      <Slideshow />

      {/* Cards de Exemplo */}
      <div className="flex justify-center gap-8 mt-8">
        <Card
          image={img1}
          title="Energia Eólica"
          description= "A energia eólica utiliza turbinas para transformar o vento em eletricidade, sendo ideal para regiões com ventos fortes. Essa fonte de energia é limpa e renovável, sem emissões de carbono."
        />
        <Card
          image={img2}
          title="Energia Solar"
          description="A energia solar converte luz solar em eletricidade e permite que residências, empresas e comunidades se tornem autossuficientes energeticamente, reduzindo custos e emissões de poluentes."
        />
      </div>
    </div>
  );
}

export default Home;