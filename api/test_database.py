import pytest
from database import Database
from models import Product, Nutrition

@pytest.fixture
def db():
    return Database()

@pytest.fixture
def sample_product():
    return Product(
        id=0,
        name="Test Product",
        description="Test Description",
        price=9.99,
        image="test.jpg",
        price_id="price_test123",
        nutrition=Nutrition(carbs=1.0, fat=2.0, protein=3.0, salt=0.1),
        storage="Test Storage"
    )

def test_add_product(db, sample_product):
    added_product = db.add_product(sample_product)
    assert added_product.id == 1
    assert added_product.name == "Test Product"
    assert len(db.products) == 1

def test_get_product(db, sample_product):
    added_product = db.add_product(sample_product)
    retrieved_product = db.get_product(added_product.id)
    assert retrieved_product == added_product

def test_get_all_products(db, sample_product):
    db.add_product(sample_product)
    products = db.get_all_products()
    assert len(products) == 1
    assert products[0].name == "Test Product"

def test_remove_product(db, sample_product):
    added_product = db.add_product(sample_product)
    assert db.remove_product(added_product.id) is True
    assert db.get_product(added_product.id) is None
