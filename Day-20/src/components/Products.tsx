import React from "react";
import styles from "../styles/ProductGrid.module.css";
import cardStyles from "../styles/ProductCard.module.css";
import { products } from "../data";

const ProductGrid: React.FC = () => (
    <div className={styles.grid}>
        {products.map((product) => (
            <div key={product.id} className={cardStyles.card}>
                {/* Display product info, image, etc. */}
                <h3
                    style={{
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        marginBottom: "0.5rem",
                        color: "#000000ff",
                    }}
                >{product.name}</h3>
                <p
                    style={{
                        // fontSize: "0.6rem",
                        color: '#000'
                    }}
                >{product.description}</p>
                <strong
                    style={{
                        color: "#000000ff",
                    }}
                >₹{product.price}</strong>
            </div>
        ))}
    </div>
);

export default ProductGrid;
