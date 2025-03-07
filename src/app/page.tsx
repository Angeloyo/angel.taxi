import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen p-4">
      {/* Under Construction Banner */}
      <div className="w-full bg-yellow-300 text-center p-2 marquee">
        <span className="text-black font-bold">
          🚧 UNDER CONSTRUCTION 🚧 PLEASE PARDON OUR STARDUST 🚧 WEBSITE BEST VIEWED IN INTERNET EXPLORER 6 🚧
        </span>
      </div>
      
      {/* Header */}
      <header className="w-full max-w-4xl text-center my-4">
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-300 blink">
          ANGEL.TAXI
        </h1>
        <h2 className="text-xl md:text-2xl text-cyan-400 mt-2">
          ✨ The Fastest Way to Heaven! ✨
        </h2>
      </header>
      
      {/* Main Content */}
      <main className="w-full max-w-4xl flex flex-col items-center">
        {/* Welcome Message */}
        <div className="retro-border w-full my-4 text-center">
          <h3 className="text-2xl font-bold text-fuchsia-500 mb-2">Welcome to Angel&apos;s Celestial Taxi Service!</h3>
          <p className="mb-4">Serving the clouds since eternity. Our angelic drivers will take you ANYWHERE!</p>
          <div className="flex justify-center my-4">
            <div className="visitor-counter mx-auto">
              Visitors: 000738
            </div>
          </div>
        </div>
        
        {/* Services */}
        <div className="retro-border w-full my-4">
          <h3 className="text-xl font-bold text-center text-fuchsia-500 mb-2">Our Heavenly Services</h3>
          <ul className="list-disc pl-8">
            <li className="mb-2">Cloud-to-Cloud Transportation</li>
            <li className="mb-2">Express Rides to Pearly Gates</li>
            <li className="mb-2">Scenic Tours of the Cosmos</li>
            <li className="mb-2">Special Rates for Choir Members</li>
          </ul>
        </div>
        
        {/* Coming Soon */}
        <div className="retro-border w-full my-4 text-center">
          <h3 className="text-xl font-bold text-fuchsia-500 mb-2">
            <span className="blink">🎮 COMING SOON 🎮</span>
          </h3>
          <p>Angel Taxi Game - Navigate through the clouds and collect halos!</p>
          <p className="text-sm mt-2">Check back next week!</p>
        </div>
        
        {/* Testimonials */}
        <div className="retro-border w-full my-4">
          <h3 className="text-xl font-bold text-center text-fuchsia-500 mb-2">Customer Testimonials</h3>
          <blockquote className="italic border-l-4 border-cyan-400 pl-4 my-2">
            &quot;My ride was absolutely heavenly! 5 halos out of 5!&quot; - St. Peter
          </blockquote>
          <blockquote className="italic border-l-4 border-cyan-400 pl-4 my-2">
            &quot;Angel got me to my cloud on time!&quot; - Gabriel, Archangel
          </blockquote>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="w-full max-w-4xl text-center my-4 text-sm">
        <div className="flex justify-center space-x-4 mb-2">
          <Link href="/about" className="hover:text-fuchsia-500">About Us</Link>
          <Link href="/rates" className="hover:text-fuchsia-500">Rates</Link>
          <Link href="/contact" className="hover:text-fuchsia-500">Contact</Link>
          <Link href="/game" className="hover:text-fuchsia-500">Game (Coming Soon)</Link>
        </div>
        <p>© 2003-2024 Angel.Taxi - All Rights Reserved</p>
        <p className="text-xs mt-1">
          <span className="mr-2">
            <a href="#" className="hover:text-fuchsia-500">Sign our Guestbook</a>
          </span>
          <span>
            <a href="#" className="hover:text-fuchsia-500">Add to Favorites</a>
          </span>
        </p>
      </footer>
    </div>
  );
}
