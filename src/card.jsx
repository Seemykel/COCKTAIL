import './styles/card.css'   
import { useState } from 'react';

const Card = ({ searchTerm = '' }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);


const Options = {
        sours:  {
            id: 1,
            title: "🍋 Sours",
            description: "Perfect balance of sweet, sour, and spirit in every sip.",
            image: "https://cdn.pixabay.com/photo/2015/07/02/19/57/whiskey-sour-829480_1280.jpg",
            cocktails: [
                { name: "Whiskey Sour", ingredients: "Whiskey, Lemon juice, Simple syrup, Egg white", image: "https://cdn.pixabay.com/photo/2015/07/04/22/00/whiskey-sour-831770_1280.jpg" },
                { name: "Amaretto Sour", ingredients: "Amaretto, Lemon juice, Simple syrup, Egg white", image: "https://cdn.pixabay.com/photo/2016/11/29/03/53/amaretto-sour-1869716_1280.jpg" },
                { name: "Pisco Sour", ingredients: "Pisco, Lime juice, Simple syrup, Egg white, Bitters" },
                { name: "Daiquiri", ingredients: "White rum, Lime juice, Simple syrup" }]  
        },
        oldFashioned: {
            id: 2,
            title: "🥃 Old-Fashioneds",
            description: "Bold, rich, and built for whiskey lovers.",
            image: "https://cdn.pixabay.com/photo/2024/04/22/12/16/ai-generated-8712478_1280.png",
            cocktails: [
                { name: "Classic Old Fashioned", ingredients: "Bourbon, Sugar, Bitters, Orange peel" },
                { name: "Rye Old Fashioned", ingredients: "Rye whiskey, Sugar, Bitters, Orange peel" },
                { name: "Rum Old Fashioned", ingredients: "Aged rum, Demerara sugar, Bitters" },
                { name: "Brandy Old Fashioned", ingredients: "Cognac, Sugar, Bitters, Orange peel" }
            ]
        },
        collinsFizzes: {
            id: 3,
            title: "🍹 Collins & Fizzes",
            description: "Light, fizzy, and endlessly refreshing.",
            image: "https://cdn.pixabay.com/photo/2025/05/26/18/24/ai-generated-9623931_1280.jpg",
            cocktails: [
                { name: "Tom Collins", ingredients: "Gin, Lemon juice, Simple syrup, Soda water" },
                { name: "John Collins", ingredients: "Bourbon, Lemon juice, Simple syrup, Soda water" },
                { name: "Gin Fizz", ingredients: "Gin, Lemon juice, Simple syrup, Soda water, Egg white" },
                { name: "Ramos Gin Fizz", ingredients: "Gin, Lemon juice, Lime juice, Simple syrup, Cream, Egg white" }
            ]
        },
        martinisManhattans: {
            id: 4,
            title: "🍸 Martinis & Manhattans",
            description: "Elegant, timeless, and spirit-forward classics.",
            image: "https://cdn.pixabay.com/photo/2023/12/11/14/46/cocktail-8443778_1280.jpg",
            cocktails: [
                { name: "Dry Martini", ingredients: "Gin, Dry vermouth, Olive or lemon twist" },
                { name: "Dirty Martini", ingredients: "Gin, Dry vermouth, Olive brine, Olives" },
                { name: "Classic Manhattan", ingredients: "Rye whiskey, Sweet vermouth, Bitters, Cherry" },
                { name: "Perfect Manhattan", ingredients: "Rye whiskey, Sweet & dry vermouth, Bitters" }
            ]
        },
        highballs: {
            id: 5,
            title: "🥂 Highballs",
            description: "Simple, refreshing, and always crowd-pleasing.",
            image: "https://cdn.pixabay.com/photo/2023/04/26/16/20/cocktail-7952751_1280.jpg",
            cocktails: [
                { name: "Whiskey Highball", ingredients: "Whiskey, Soda water, Ice" },
                { name: "Gin & Tonic", ingredients: "Gin, Tonic water, Lime" },
                { name: "Rum & Coke", ingredients: "Rum, Coca-Cola, Lime" },
                { name: "Vodka Soda", ingredients: "Vodka, Soda water, Lime" }
            ]
        },
        tikiCocktails: {
            id: 6,
            title: "🌴 Tiki Cocktails",
            description: "Colorful, tropical escapes in a glass.",
            image: "https://cdn.pixabay.com/photo/2017/06/03/07/54/cocktail-2368166_1280.jpg",
            cocktails: [
                { name: "Mai Tai", ingredients: "Light & dark rum, Orange liqueur, Lime juice, Orgeat" },
                { name: "Piña Colada", ingredients: "White rum, Coconut cream, Pineapple juice" },
                { name: "Zombie", ingredients: "Multiple rums, Fruit juices, Grenadine" },
                { name: "Blue Hawaiian", ingredients: "Light rum, Blue curaçao, Coconut cream, Pineapple" }
            ]
        },
        flipsCreamy: {
            id: 7,
            title: "🍦 Flips & Creamy",
            description: "Smooth, indulgent, and dessert-like delights.",
            image: "https://cdn.pixabay.com/photo/2015/07/01/23/03/cocktail-828182_1280.jpg",
            cocktails: [
                { name: "Brandy Alexander", ingredients: "Cognac, Crème de cacao, Heavy cream" },
                { name: "Grasshopper", ingredients: "Crème de menthe, Crème de cacao, Heavy cream" },
                { name: "White Russian", ingredients: "Vodka, Coffee liqueur, Heavy cream" },
                { name: "Mudslide", ingredients: "Vodka, Coffee liqueur, Irish cream" }
            ]
        },
        sparklingCocktails: {
            id: 8,
            title: "✨ Sparkling Cocktails",
            description: "Bubbly, festive, and perfect for celebrations.",
            image: "https://cdn.pixabay.com/photo/2024/12/03/14/45/ai-generated-9242301_1280.jpg",
            cocktails: [
                { name: "French 75", ingredients: "Gin, Lemon juice, Simple syrup, Champagne" },
                { name: "Bellini", ingredients: "Peach purée, Prosecco" },
                { name: "Mimosa", ingredients: "Orange juice, Champagne" },
                { name: "Aperol Spritz", ingredients: "Aperol, Prosecco, Soda water, Orange" }
            ]
        },
        shotsLayered: {
            id: 9,
            title: "🔥 Shots & Layered",
            description: "Fast, fun, and packed with flavor and flair.",
            image: "https://cdn.pixabay.com/photo/2024/02/23/00/33/shot-8591047_1280.jpg",
            cocktails: [
                { name: "B-52", ingredients: "Coffee liqueur, Irish cream, Grand Marnier" },
                { name: "Kamikaze", ingredients: "Vodka, Triple sec, Lime juice" },
                { name: "Lemon Drop Shot", ingredients: "Vodka, Lemon juice, Simple syrup" },
                { name: "Irish Car Bomb", ingredients: "Irish whiskey, Irish cream, Stout beer" }
            ]
        }
}
const categories = Object.values(Options);

        // Filter categories based on search term
        const filteredCategories = categories.filter(category => 
            category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            category.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            category.cocktails.some(cocktail => 
                cocktail.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );

const handleCategoryClick = (categoryKey) => {
        setSelectedCategory(selectedCategory === categoryKey ? null : categoryKey);
    };

const handleBackToCategories = () => {
        setSelectedCategory(null);
    };

    // If a category is selected, show its cocktails
    if (selectedCategory) {
        const category = Options[selectedCategory];
        return (
            <section className="cocktails-section">
                <div className="category-header">
                    <button className="back-btn" onClick={handleBackToCategories}>
                        ← Back to Categories
                    </button>
                    <h2>{category.title}</h2>
                    <p>{category.description}</p>
                    <h3>Cocktails ({category.cocktails.length}):</h3>
                </div>
                <div className="cocktails-grid">
                    {category.cocktails.map((cocktail, index) => (
                        <div key={index} className="cocktail-card">
                            <h3>{cocktail.name}</h3>
                            <div className="ingredients">
                                <h4>Ingredients:</h4>
                                <p>{cocktail.ingredients}</p>
                                <img src={category.image} alt={category.title} loading="lazy"/>
                            </div>
                            <button className="recipe-btn">View Recipe</button>
                        </div>
                    ))}
                </div>
            </section>
        );
    }

    // Show categories view
    return (
        <section className="section">
            {filteredCategories.length > 0 ? (
                filteredCategories.map((category) => {
                    const categoryKey = Object.keys(Options).find(
                        key => Options[key].id === category.id
                    );
                    return (
                        <div key={category.id} className='card category-card'>
                            <img 
                                src={category.image} 
                                alt={category.title}
                                loading="lazy"
                            />
                            <div className='card-body'>
                                <h2>{category.title}</h2>
                                <p>{category.description}</p>
                                <div className="card-actions">
                                    <button 
                                        className="explore-btn"
                                        onClick={() => handleCategoryClick(categoryKey)}
                                    >
                                        Explore ({category.cocktails.length} cocktails)
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })
            ) : (
                <div className="no-results">
                    <h3>No cocktails found</h3>
                    <p>Try searching for something else!</p>
                </div>
            )}
        </section>
    );
};

export default Card;
