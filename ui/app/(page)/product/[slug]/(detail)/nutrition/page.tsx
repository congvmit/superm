"use client"

import { useOutletContext } from "@/context/OutletContext"
import { IProductDetails } from "@/types/ProductDetails"

export default function ProductDetailNutrition() {
  const product = useOutletContext() as IProductDetails
  const nutrition = product.nutrition

  return nutrition ? (
    <table className="table table-nutrition">
      <thead>
        <tr>
          <th>Nutrient</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Protein</td>
          <td>{nutrition.protein}g</td>
        </tr>
        <tr>
          <td>Carbohydrates</td>
          <td>{nutrition.carbs}g</td>
        </tr>
        <tr>
          <td>Fat</td>
          <td>{nutrition.fat}g</td>
        </tr>
        <tr>
          <td>Salt</td>
          <td>{nutrition.salt}g</td>
        </tr>
      </tbody>
    </table>
  ) : (
    <p>No nutrition information available.</p>
  )
}
