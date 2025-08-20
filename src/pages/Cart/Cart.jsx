import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FiTrash2 } from "react-icons/fi";
import styles from "./Cart.module.css";


const NGN = (n) => `₦${(n ?? 0).toLocaleString("en-NG")}`;

const INITIAL = [
  { id: "i1", name: "Product name", price: 30000, qty: 1, img: null },
  { id: "i2", name: "Product name", price: 30000, qty: 1, img: null },
  { id: "i3", name: "Product name", price: 30000, qty: 1, img: null },
  { id: "i4", name: "Product name", price: 30000, qty: 1, img: null },
];

export default function Cart() {
  const [items, setItems] = useState(INITIAL);
  const [delivery, setDelivery] = useState("store");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");

  const deliveryFee = delivery === "store" ? 0 : 5000;

  const subtotal = useMemo(
    () => items.reduce((s, it) => s + it.price * it.qty, 0),
    [items]
  );
  const total = subtotal + deliveryFee;

  const updateQty = (id, delta) => {
    setItems((prev) =>
      prev.map((it) =>
        it.id === id ? { ...it, qty: Math.max(1, it.qty + delta) } : it
      )
    );
  };
  const removeItem = (id) => setItems((prev) => prev.filter((it) => it.id !== id));

  return (
    <section className={styles.cart_page}>
      <header className={styles.hero}>
        <div className={styles.hero_inner}>
          <h1>Cart</h1>
        </div>
      </header>

      <section className={styles.cart_strip}>
        <div className={`${styles.container} ${styles.grid}`}>
          <div className={styles.list_col}>
            <div className={styles.table_head}>
              <span>Product detail</span>
              <span>Quantity</span>
              <span>Price</span>
              <span>Total</span>
              <span aria-hidden="true" />
            </div>

            <ul className={styles.cart_list}>
              {items.map((it) => (
                <li key={it.id} className={styles.cart_item}>
                  <div className={styles.detail}>
                    <div className={styles.thumb}>
                      {it.img ? (
                        <img src={it.img} alt={it.name} />
                      ) : (
                        <div className={styles.thumb_placeholder} />
                      )}
                    </div>
                    <div className={styles.name}>{it.name}</div>
                  </div>

                  <div className={styles.qty}>
                    <button type="button" onClick={() => updateQty(it.id, -1)} aria-label="Decrease">
                      –
                    </button>
                    <input
                      type="text"
                      inputMode="numeric"
                      value={String(it.qty).padStart(2, "0")}
                      readOnly
                      aria-label="Quantity"
                    />
                    <button type="button" onClick={() => updateQty(it.id, +1)} aria-label="Increase">
                      +
                    </button>
                  </div>

                  <div className={styles.price}>{NGN(it.price)}</div>
                  <div className={styles.line_total}>{NGN(it.price * it.qty)}</div>

                  <button
                    type="button"
                    className={styles.remove}
                    onClick={() => removeItem(it.id)}
                    aria-label={`Remove ${it.name}`}
                    title="Remove"
                  >
                    <FiTrash2 />
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <aside className={styles.summary_col}>
            <div className={styles.summary_card}>
              <h3>Total</h3>

              <div className={styles.row}>
                <span>Subtotal</span>
                <strong>{NGN(subtotal)}</strong>
              </div>

              <div className={styles.row}>
                <span>Delivery</span>
                <strong>{delivery === "store" ? "—" : NGN(deliveryFee)}</strong>
              </div>

              <div className={styles.delivery_opts}>
                <label className={styles.rad}>
                  <input
                    type="radio"
                    name="delivery"
                    value="store"
                    checked={delivery === "store"}
                    onChange={() => setDelivery("store")}
                  />
                  <span>Store location</span>
                </label>
                <label className={styles.rad}>
                  <input
                    type="radio"
                    name="delivery"
                    value="address"
                    checked={delivery === "address"}
                    onChange={() => setDelivery("address")}
                  />
                  <span>Deliver to me</span>
                </label>
              </div>

              <div className={styles.field}>
                <label htmlFor="phone">Phone number</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+234…"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="date">Date of delivery</label>
                <input
                  id="date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              <div className={`${styles.row} ${styles.grand}`}>
                <span>Total</span>
                <strong>{NGN(total)}</strong>
              </div>

              <button className={styles.checkout} type="button">
                Check out
              </button>
            </div>
          </aside>
        </div>
      </section>

      {/* Footer band */}
      <section className={styles.footer_band}>
        <div className={`${styles.container} ${styles.band_grid}`}>
          <p className={styles.tagline}>Ready to spice up your event?</p>

          <div className={styles.quick_links}>
            <Link to="/about">About us</Link>
            <Link to="/services">Services</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className={styles.cta_wrap}>
            <a
              className={styles.whatsapp}
              href="https://wa.me/2348000000000"
              target="_blank"
              rel="noopener noreferrer"
            >
              Message us on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}
