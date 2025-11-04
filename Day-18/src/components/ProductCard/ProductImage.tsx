import React from "react";

interface ProductImageProps {
  src: string;
  alt: string;
}

const ProductImage: React.FC<ProductImageProps> = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      style={{ width: "100%", borderRadius: "8px", objectFit: "cover" }}
    />
  );
};

export default ProductImage;
