from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from models import Product, ProductCreate
from database import db

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/products/{product_id}", response_model=Product)
async def get_product(product_id: int):
    product = db.get_product(product_id)
    if product is None:
        raise HTTPException(status_code=404, detail="Product not found")
    return product

@app.get("/products", response_model=list[Product])
async def get_products():
    return db.get_all_products()

@app.post("/products", response_model=Product)
async def add_product(product: ProductCreate):
    new_product = Product(id=0, **product.model_dump())
    return db.add_product(new_product)

@app.delete("/products/{product_id}")
async def remove_product(product_id: int):
    if db.remove_product(product_id):
        return {"message": "Product removed successfully"}
    raise HTTPException(status_code=404, detail="Product not found")
