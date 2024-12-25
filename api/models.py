from pydantic import BaseModel

class Nutrition(BaseModel):
    carbs: float
    fat: float
    protein: float
    salt: float

class Product(BaseModel):
    id: int
    name: str
    description: str
    price: float
    image: str
    price_id: str
    nutrition: Nutrition
    storage: str

class ProductCreate(BaseModel):
    name: str
    description: str
    price: float
    image: str
    price_id: str
    nutrition: Nutrition
    storage: str
