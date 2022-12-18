import React from "react";
import { getProductsCategories } from "../../api/product";
import useFetch from "../../lib/hooks/useFetch";
import { HandleError } from "../shared/HandleError";
import { HandleLoading } from "../shared/HandleLoading";

export const ProductFilter = ({ activeCategory, onChange }) => {
  const { data, loading, error } = useFetch(getProductsCategories);

  return (
    <HandleLoading loading={loading}>
      <HandleError error={error}>
        <div className="ProductFilter">
          <ul className="list-group">
            {data.map((category) => (
              <li
                key={`category-${category}`}
                className={`list-group-item ${
                  activeCategory === category && "active"
                }`}
                onClick={() => onChange(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      </HandleError>
    </HandleLoading>
  );
};
