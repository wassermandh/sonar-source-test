from src.test import add


def test_add(a, b):
    assert add(a, b) == a + b
