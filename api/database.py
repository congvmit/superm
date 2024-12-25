from typing import Dict, List, Optional
from models import Product

class Database:
    def __init__(self):
        self.products: Dict[int, Product] = {}
        self._counter = 0

    def get_next_id(self) -> int:
        self._counter += 1
        return self._counter

    def add_product(self, product: Product) -> Product:
        product.id = self.get_next_id()
        self.products[product.id] = product
        return product

    def get_all_products(self) -> List[Product]:
        return list(self.products.values())

    def remove_product(self, product_id: int) -> bool:
        if product_id in self.products:
            del self.products[product_id]
            return True
        return False

    def get_product(self, product_id: int) -> Optional[Product]:
        return self.products.get(product_id)

# Create a single instance to be used across the application
db = Database()

# Initialize with sample data
initial_products = [
    {
        "description": "200g cheese block",
        "id": 1,
        "image": "https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto/v1607769454/react-tutorial/products/final/cheese.png",
        "name": "Cheese",
        "nutrition": {
            "carbs": 1.3,
            "fat": 33,
            "protein": 25,
            "salt": 1
        },
        "price": 10,
        "price_id": "price_1HuavSGuhXEITAut56IgndJf",
        "storage": "Store in a cool place (between 5°C and 15°C)"
    }
]

for product_data in initial_products:
    db.add_product(Product(**product_data))
