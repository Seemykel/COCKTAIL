
import './styles/Blog.css';

const Blog = () => {
  return (
    <section className="blog">
      <header className="blog-hero">
        <h1>🍸 Welcome to the Cocktail Blog</h1>
        <p>
          Stories, recipes, and tips from the world of mixology. Every drink has
          a tale; let's sip through them together.
        </p>
      </header>

      <div className="blog-stories">
        <article>
          <h2>🍋 Sours</h2>
          <p>
            From the Whiskey Sour to the Pisco Sour, this family of cocktails
            balances spirit, citrus, and sweetness. Sailors first mixed citrus
            with spirits to fight scurvy on voyages. Over time, bartenders
            refined the recipe, introducing sugar and egg whites to soften the
            acidity and create a silky texture. Today, sours are seen as the
            ultimate “gateway cocktail,” simple yet elegant, showing how three
            basic ingredients can transform into a masterpiece.
          </p>
        </article>

        <article>
          <h2>🥃 Old-Fashioneds</h2>
          <p>
            The Old-Fashioned is pure elegance: whiskey, sugar, bitters, and ice.
            It became “the gentleman’s drink” in the 1800s and remains a bar
            classic. Legend has it that it was first created in Louisville,
            Kentucky, and later declared the official cocktail of the city. The
            ritual of stirring slowly and garnishing with an orange peel or
            cherry adds a sense of ceremony, making it more than just a drink —
            it’s a timeless experience in a glass.
          </p>
        </article>

        <article>
          <h2>🍹 Collins & Fizzes</h2>
          <p>
            Light, bubbly, and refreshing, these cocktails mix spirits with soda
            water. The Tom Collins became a hit in 19th-century New York during
            a humorous “Tom Collins hoax,” where people would be sent looking
            for a man who didn’t exist — bartenders created the drink to fuel
            the joke. Fizzes, on the other hand, are known for their foamy tops
            created by shaking with egg whites. Both families embody fun and
            effervescence, perfect for warm afternoons.
          </p>
        </article>

        <article>
          <h2>🍸 Martinis & Manhattans</h2>
          <p>
            Spirit-forward icons. The Martini defines minimalism, while the
            Manhattan brings boldness with whiskey and vermouth. James Bond made
            the Martini legendary with his “shaken, not stirred” line, while the
            Manhattan is often linked to New York’s Gilded Age high society.
            Both are cocktails of confidence, designed to be sipped slowly while
            savoring their sophistication.
          </p>
        </article>

        <article>
          <h2>🥂 Highballs</h2>
          <p>
            Highballs rose to fame in Japan as casual dinner companions. They’re
            simple, long, and refreshing, often made with just whiskey and soda
            water. What makes them special is the precision in preparation —
            bartenders in Japan are known to carefully measure, stir, and pour
            to achieve perfect balance and bubbles. A true example of elegance
            in simplicity.
          </p>
        </article>

        <article>
          <h2>🌴 Tiki Cocktails</h2>
          <p>
            Born in 1930s California, tiki cocktails like the Mai Tai and Zombie
            created a tropical escapism movement with rum, fruit, and flair.
            Bars were decorated with bamboo, torches, and Polynesian art to
            transport guests far from reality. Though controversial for cultural
            borrowing, tiki culture remains beloved for its creativity and
            theatrical presentation, often requiring multiple rums and elaborate
            garnishes.
          </p>
        </article>

        <article>
          <h2>🍦 Flips & Creamy</h2>
          <p>
            Creamy cocktails were once seen as nourishing “health tonics.” In
            the 1800s, flips (egg-based cocktails) were even prescribed as
            medicine. Today, they are indulgent desserts in a glass, rich with
            cream, eggs, and sugar. Classics like the Brandy Alexander or Grasshopper
            prove that cocktails can be just as decadent as any sweet treat.
          </p>
        </article>

        <article>
          <h2>✨ Sparkling Cocktails</h2>
          <p>
            Champagne cocktails like the French 75 or Mimosa bring bubbles to
            life’s best celebrations. During World War I, the French 75 was
            named after a powerful field gun, symbolizing its punchy kick. On
            the other hand, the Mimosa is the ultimate brunch companion, light
            and elegant. Sparkling cocktails turn ordinary moments into
            something extraordinary.
          </p>
        </article>

        <article>
          <h2>🔥 Shots & Layered</h2>
          <p>
            Fun and fast, shots like the B-52 are all about color and spectacle.
            They often use carefully layered liqueurs to create stunning
            patterns, making them Instagram favorites. While not “serious”
            cocktails, they carry their own magic — they bring energy, laughter,
            and unforgettable memories to any party.
          </p>
        </article>
      </div>

      <section className="featured">
        <h2>🍓 Featured Recipe: Strawberry Daiquiri</h2>
        <p>
          A sweet, fruity classic that’s perfect for summer evenings. First
          mixed in Cuba, the Daiquiri was named after a small village near a
          rum-producing region. It became a favorite of Ernest Hemingway and
          later evolved into many fruit variations like this strawberry twist.
        </p>
        <ul>
          <li>2 oz white rum</li>
          <li>1 oz lime juice</li>
          <li>1 oz strawberry syrup or puree</li>
          <li>Ice</li>
        </ul>
        <p>
          Shake with ice and strain into a chilled glass. Garnish with a fresh
          strawberry. 🍓
        </p>
      </section>

      <section className="tips">
        <h2>🔑 Bartender Tips</h2>
        <ul>
          <li>Always use fresh citrus juice for the best flavor.</li>
          <li>Chill your glassware for an extra crisp serve.</li>
          <li>Don’t skip proper ice — it makes or breaks a cocktail.</li>
          <li>Balance is key: too much sweetness can ruin a drink.</li>
          <li>Experiment with garnishes — a twist of peel can change everything.</li>
        </ul>
      </section>

      <section className="fun-fact">
        <h2>💡 Fun Facts</h2>
        <ul>
          <li>
            The word “cocktail” first appeared in print in 1806, defined as “a
            stimulating liquor composed of spirits, sugar, water, and bitters.”
          </li>
          <li>
            Ernest Hemingway had his own cocktail, the “Hemingway Daiquiri,”
            with grapefruit juice and maraschino liqueur.
          </li>
          <li>
            The longest cocktail ever made was over 1,200 liters and mixed in
            Italy in 2015.
          </li>
          <li>
            Martinis were once sold in bottles pre-mixed — making them one of
            the earliest “ready-to-drink” cocktails.
          </li>
        </ul>
      </section>

      <section className="comments">
        <h2>💬 Join the Conversation</h2>
        <p>(Comments feature coming soon...)</p>
      </section>
    </section>
  );
};

export default Blog;
 