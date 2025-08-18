import React, { useMemo, useState } from "react";
import styles from "./Menu.module.css";
import Menu1 from "../../assets/menuimg1.jpeg"
import Menu2 from "../../assets/menuimg2.jpeg"
import Menu3 from "../../assets/menuimg3.jpeg"
import Menu4 from "../../assets/menuimg4.jpeg"
import Menu5 from "../../assets/menuimg5.jpeg"
import Menu6 from "../../assets/menuimg6.jpeg"

const MENU_ITEMS = [
  {
    id: "st1",
    name: "Smoked Salmon Canapés",
    description: "Cream cheese, dill, lemon zest on crisp blinis.",
    price: 4500,
    category: "Starters",
    tags: ["Seafood", "Cold"],
    img: Menu1,
  },
  {
    id: "st2",
    name: "Veggie Spring Rolls",
    description: "Crispy rolls with sweet chili dip.",
    price: 3500,
    category: "Starters",
    tags: ["Vegan"],
    img: Menu2,
  },
  {
    id: "mn1",
    name: "Jollof Rice & Grilled Chicken",
    description: "Party-style jollof with perfectly spiced chicken.",
    price: 8500,
    category: "Mains",
    tags: ["Popular", "Spicy"],
    img: Menu3,
  },
  {
    id: "mn2",
    name: "Creamy Alfredo Pasta",
    description: "Classic parmesan cream sauce, fresh herbs.",
    price: 7800,
    category: "Mains",
    tags: ["Vegetarian"],
    img: Menu4,
  },
  {
    id: "ds1",
    name: "Chocolate Lava Cake",
    description: "Warm, gooey center with vanilla cream.",
    price: 5000,
    category: "Desserts",
    tags: ["Best Seller"],
    img: Menu5,
  },
  {
    id: "dr1",
    name: "Tropical Mocktail",
    description: "Pineapple, mango, lime + mint.",
    price: 3000,
    category: "Drinks",
    tags: ["Non-Alcoholic", "Refreshing"],
    img: Menu6,
  },
];

const CATEGORIES = ["All", "Starters", "Mains", "Desserts", "Drinks"];

export default function Menu() {
  const [activeCat, setActiveCat] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const byCat =
      activeCat === "All"
        ? MENU_ITEMS
        : MENU_ITEMS.filter((m) => m.category === activeCat);

    const q = query.trim().toLowerCase();
    if (!q) return byCat;

    return byCat.filter(
      (m) =>
        m.name.toLowerCase().includes(q) ||
        m.description.toLowerCase().includes(q) ||
        m.tags.join(" ").toLowerCase().includes(q)
    );
  }, [activeCat, query]);

  return (
    <section className= {styles.menu_page}>
      <div className= {styles.menu_hero}>
        <h1>Our Menu</h1>
        <p>Curated dishes for weddings, corporate events, and private dining.</p>
      </div>

      <div className= {styles.menu_controls}>
        <div className= {styles.menu_tabs} role="tablist" aria-label="Menu categories">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCat === cat}
              className={`tab ${activeCat === cat ? "active" : ""}`}
              onClick={() => setActiveCat(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className= {styles.menu_search}>
          <input
            type="text"
            placeholder="Search dishes (e.g. jollof, vegan, cake)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search dishes"
          />
        </div>
      </div>

      {/* Grid */}
      <div className= {styles.menu_grid}>
        {filtered.map((item) => (
          <article key={item.id} className= {styles.menu_card}>
            <div className= {styles.menu_img_wrap}>
              <img src={item.img} alt={item.name} />
              {item.tags?.length > 0 && (
                <div className= {styles.menu_tags}>
                  {item.tags.map((t) => (
                    <span key={t} className= {styles.tag}>
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className= {styles.menu_body}>
              <div className= {styles.menu_headline}>
                <h3>{item.name}</h3>
                <span className= {styles.price}>
                  ₦{item.price.toLocaleString("en-NG")}
                </span>
              </div>
              <p className= {styles.desc}>{item.description}</p>

              <div className= {styles.menu_actions}>
                <button
                  className= {styles.btn_primary}
                  onClick={() => alert(`Added: ${item.name}`)}
                >
                  Add to Enquiry
                </button>
                <button
                  className= {styles.btn_ghost}
                  onClick={() =>
                    alert(`More details:\n\n${item.name}\n${item.description}`)
                  }
                >
                  Details
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className= {styles.menu_empty}>
          <p>No dishes found. Try another search or category.</p>
        </div>
      )}

      {/* CTA strip */}
      <div className= {styles.menu_cta}>
        <h2>Planning an event?</h2>
        <p>We’ll craft a tailored menu your guests will love.</p>
        {/* Link this to your Book/Contact route */}
        <button className= {styles.btn_cta} onClick={() => alert("Go to booking")}>
          Book Catering
        </button>
      </div>
    </section>
  );
}
