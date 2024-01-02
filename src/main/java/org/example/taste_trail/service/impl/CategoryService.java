package org.example.taste_trail.service.impl;

import org.example.taste_trail.dto.request.CategoryRequest;
import org.example.taste_trail.entity.CategoryEntity;

import java.util.List;

public interface CategoryService {
    void save(CategoryRequest categoryEntity);
    List<CategoryEntity> getAllCategories();
    CategoryEntity getCategoryById(Integer categoryId);
    void deleteCategory(Integer categoryId);
    void updateCategory(CategoryRequest categoryEntity);
}
