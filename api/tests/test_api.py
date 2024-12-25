import pytest
from fastapi.testclient import TestClient
from main import app
from models import Nutrition

client = TestClient(app)

@pytest.fixture
def sample_product_data():
    return {
        "name": "Test Product",
        "description": "Test Description",
        "price": 9.99,
        "image": "test.jpg",
        "price_id": "price_test123",
        "nutrition": {
            "carbs": 1.0,
            "fat": 2.0,
            "protein": 3.0,
            "salt": 0.1
        },
        "storage": "Test Storage"
    }

def test_create_product(sample_product_data):
    response = client.post("/products", json=sample_product_data)
    assert response.status_code == 200
    data = response.json()
    assert data["name"] == sample_product_data["name"]
    assert "id" in data

def test_get_products():
    response = client.get("/products")
    assert response.status_code == 200
    assert isinstance(response.json(), list)

def test_get_product(sample_product_data):
    # First create a product
    response = client.post("/products", json=sample_product_data)
    product_id = response.json()["id"]
    
    # Then get it
    response = client.get(f"/products/{product_id}")
    assert response.status_code == 200
    assert response.json()["id"] == product_id

def test_get_nonexistent_product():
    response = client.get("/products/9999")
    assert response.status_code == 404

def test_delete_product(sample_product_data):
    # First create a product
    response = client.post("/products", json=sample_product_data)
    product_id = response.json()["id"]
    
    # Then delete it
    response = client.delete(f"/products/{product_id}")
    assert response.status_code == 200
    
    # Verify it's gone
    response = client.get(f"/products/{product_id}")
    assert response.status_code == 404
