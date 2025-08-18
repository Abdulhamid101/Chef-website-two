import React from "react";
import Special1 from "../../assets/special1.png";
import Special2 from "../../assets/special2.png";
import Special3 from "../../assets/special3.png";
import Special4 from "../../assets/special4.png";
import Special5 from "../../assets/special5.png";
import Special6 from "../../assets/special6.png";
import Special7 from "../../assets/special7.png";
import Special8 from "../../assets/special8.png";
import styles from "./special-cat.module.css";

const SpecialCat = () => {
  return (
    <section className={styles.special_cat_section}>
      <div className={styles.specialCat_container}>
        <h1>Our special Catering</h1>
        <p>
          "Spice up your event with our premium catering services! From <br />
          intimate gatherings to grand celebrations, we craft delicious, <br />
          customized menus that delight every palate. Bookus today and <br />
          experience the perfect blend of flavor and elegance!
        </p>
      </div>
      
      <div className={styles.menu}>
        {/* 1 */}
        <div className={styles.menu_item}>
          <img alt="Spicy grilled chicken" src={Special1} />
          <div className={styles.card}>
            <div className={styles.title}>Spicy grilled chicken</div>
            <div className={styles.stats}>
              <span className={styles.rating}>4.9</span>
              <span className={styles.kcal}>150 Kcal</span>
            </div>
            <div className={styles.actions}>
              <div className={styles.price}>
                <span>NGN <span className={styles.amt}>250</span></span>
              </div>
              <button className={styles.btn}>+ Add to cart</button>
            </div>
          </div>
        </div>

        {/* 2 */}
        <div className={styles.menu_item}>
          <img alt="fluffy fruit pancake" src={Special2} />
          <div className={styles.card}>
            <div className={styles.title}>fluffy fruit pancake</div>
            <div className={styles.stats}>
              <span className={styles.rating}>4.9</span>
              <span className={styles.kcal}>150 Kcal</span>
            </div>
            <div className={styles.actions}>
              <div className={styles.price}>
                <span>NGN <span className={styles.amt}>250</span></span>
              </div>
              <button className={styles.btn}>+ Add to cart</button>
            </div>
          </div>
        </div>

        {/* 3 */}
        <div className={styles.menu_item}>
          <img alt="Chocolate whipcream cake" src={Special3} />
          <div className={styles.card}>
            <div className={styles.title}>Chocolate whipcream cake</div>
            <div className={styles.stats}>
              <span className={styles.rating}>4.9</span>
              <span className={styles.kcal}>150 Kcal</span>
            </div>
            <div className={styles.actions}>
              <div className={styles.price}>
                <span>NGN <span className={styles.amt}>250</span></span>
              </div>
              <button className={styles.btn}>+ Add to cart</button>
            </div>
          </div>
        </div>

        {/* 4 */}
        <div className={styles.menu_item}>
          <img alt="Shrimp basmati frieds rice" src={Special4} />
          <div className={styles.card}>
            <div className={styles.title}>Shrimp basmati frieds rice</div>
            <div className={styles.stats}>
              <span className={styles.rating}>4.9</span>
              <span className={styles.kcal}>150 Kcal</span>
            </div>
            <div className={styles.actions}>
              <div className={styles.price}>
                <span>NGN <span className={styles.amt}>250</span></span>
              </div>
              <button className={styles.btn}>+ Add to cart</button>
            </div>
          </div>
        </div>

        {/* 5 */}
        <div className={styles.menu_item}>
          <img alt="Food tray" src={Special5} />
          <div className={styles.card}>
            <div className={styles.title}>Food tray</div>
            <div className={styles.stats}>
              <span className={styles.rating}>4.9</span>
              <span className={styles.kcal}>150 Kcal</span>
            </div>
            <div className={styles.actions}>
              <div className={styles.price}>
                <span>NGN <span className={styles.amt}>250</span></span>
              </div>
              <button className={styles.btn}>+ Add to cart</button>
            </div>
          </div>
        </div>

        {/* 6 */}
        <div className={styles.menu_item}>
          <img alt="Rich vegetable salad" src={Special6} />
          <div className={styles.card}>
            <div className={styles.title}>Rich vegetable salad</div>
            <div className={styles.stats}>
              <span className={styles.rating}>4.9</span>
              <span className={styles.kcal}>150 Kcal</span>
            </div>
            <div className={styles.actions}>
              <div className={styles.price}>
                <span>NGN <span className={styles.amt}>250</span></span>
              </div>
              <button className={styles.btn}>+ Add to cart</button>
            </div>
          </div>
        </div>

        {/* 7 */}
        <div className={styles.menu_item}>
          <img alt="Small chops" src={Special7} />
          <div className={styles.card}>
            <div className={styles.title}>Small chops</div>
            <div className={styles.stats}>
              <span className={styles.rating}>4.9</span>
              <span className={styles.kcal}>150 Kcal</span>
            </div>
            <div className={styles.actions}>
              <div className={styles.price}>
                <span>NGN <span className={styles.amt}>250</span></span>
              </div>
              <button className={styles.btn}>+ Add to cart</button>
            </div>
          </div>
        </div>

        {/* 8 */}
        <div className={styles.menu_item}>
          <img alt="Stir fried spaghetti" src={Special8} />
          <div className={styles.card}>
            <div className={styles.title}>Stir fried spaghetti</div>
            <div className={styles.stats}>
              <span className={styles.rating}>4.9</span>
              <span className={styles.kcal}>150 Kcal</span>
            </div>
            <div className={styles.actions}>
              <div className={styles.price}>
                <span>NGN <span className={styles.amt}>250</span></span>
              </div>
              <button className={styles.btn}>+ Add to cart</button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SpecialCat;
