import pytest
from src.test import add


def test_add():
    assert add(1, 2) == 3
