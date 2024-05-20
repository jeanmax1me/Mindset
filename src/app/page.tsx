

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-mint-100 to-mint-300 text-gray-800">

      {/* Header */}
      <header className="bg-mint-500 py-6 px-8 flex justify-center items-center shadow-md">
        <h1 className="text-5xl font-extrabold text-mint [letter-spacing:1rem]">Mindset</h1>
      </header>

      <main className="flex-grow p-8 max-w-4xl mx-auto">
        {/* Réveil */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-mint-700">Réveil</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li className="text-lg">Méditation (facile à trouver sur le smartphone) 5-20min</li>
            <li className="text-lg">
              Mindset Work 5-15min : Réfléchissez à vos objectifs du jour, organisez votre journée et assurez-vous qu'elle s'inscrit dans vos objectifs à long terme
            </li>
            <li className="text-lg">
              Affirmations positives pendant 2 à 10 minutes pour vous mettre dans un état d'esprit productif et efficace
            </li>
            <li className="text-lg">
              Stretching/Musculation pendant 2 à 10 minutes : Faites des pompes, des abdos, des exercices avec altères ou tractions, ou simplement des étirements légers pour réveiller votre corps après la partie mentale
            </li>
          </ul>
          <p className="text-gray-600 mb-4">
            Durée totale : entre 15 minutes et 1 heure, selon votre disponibilité. Cette routine matinale est essentielle pour bien démarrer la journée !
          </p>
          <p className="text-xl font-bold text-mint-700">
            Vous êtes désormais prêt, concentré et savez ce que vous avez à faire. La journée peut commencer !
          </p>
        </section>

        {/* Objectifs */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-mint-700">Objectifs Mindset</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600">
            <li className="text-lg">168 heures précieuses dans une semaine</li>
            <li className="text-lg">Se concentrer sur soi-même, sa santé et son bien-être personnel</li>
            <li className="text-lg">Ne pas se prendre trop au sérieux</li>
            <li className="text-lg">S'amuser dans tout ce que je fais</li>
            <li className="text-lg">Ne jamais critiquer les autres</li>
            <li className="text-lg">Complimenter généreusement</li>
            <li className="text-lg">Toujours apprendre et évoluer pour devenir la meilleure version de soi-même</li>
          </ul>
        </section>

        {/* Vision */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-mint-700">Vision à long terme</h2>
          <p className="text-gray-600">
            Créer une agence en tant que solopreneur, trouver des clients, en trouver toujours plus, développer l'activité, devenir une agence à succès, pouvoir déléguer pour se concentrer sur son domaine de prédilection et avoir du temps libre (développement ? prospection ? relation client ?). Un scaling infini vers la réussite !
          </p>
        </section>

        {/* Mission */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-mint-700">Mission</h2>
          <p className="text-gray-600">
            Trouver des clients, réaliser des prestations de qualité, satisfaire les clients pour qu'ils recommandent l'agence autour d'eux, créer un cercle vertueux de bouche-à-oreille, proposer des produits de qualité à des prix compétitifs, apporter la plus grande valeur possible aux clients.
          </p>
        </section>

        {/* Valeurs */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-mint-700">Valeurs fondamentales</h2>
          <h3 className="text-xl font-bold mb-2 text-gray-600">Valeurs personnelles</h3>
          <p className="text-gray-600 mb-4">Être une personne intègre, bienveillante et respectueuse.</p>
          <h3 className="text-xl font-bold mb-2 text-gray-600">Valeurs professionnelles</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600">
            <li className="text-lg">Admettre ses erreurs et en tirer les leçons</li>
            <li className="text-lg">Viser l'excellence dans tout ce que j'entreprends</li>
            <li className="text-lg">Simplifier les choses autant que possible</li>
            <li className="text-lg">Donner le meilleur de soi-même pour réussir</li>
            <li className="text-lg">Être exigeant envers soi-même</li>
          </ul>
        </section>
      </main>

      <footer className="bg-mint-500 py-6 px-8 text-center text-white">
        <p>&copy; {new Date().getFullYear()} Mon Mindset Perso</p>
      </footer>
    </div>
  );
}
