package org.example.taste_trail.service.impl;

import org.example.taste_trail.dto.ContentDto;
import org.example.taste_trail.entity.ContentEntity;
import org.example.taste_trail.repository.ContentRepository;
import org.example.taste_trail.service.ContentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class ContentServiceImpl implements ContentService {

    private final ContentRepository contentRepository;

    @Autowired
    public ContentServiceImpl(ContentRepository contentRepository) {
        this.contentRepository = contentRepository;
    }

    @Override
    public ContentEntity save(ContentDto contentDto) {
        // Implement the conversion logic from DTO to entity
        // You can use a model mapper or manually set the fields

        // Example:
        ContentEntity contentEntity = new ContentEntity();
        contentEntity.setRecipeTitle(contentDto.getRecipeTitle());
        contentEntity.setRecipeDescription(contentDto.getRecipeDescription());
        contentEntity.setPreparationTimeHours(contentDto.getPreparationTimeHours());
        contentEntity.setPreparationTimeMinutes(contentDto.getPreparationTimeMinutes());
        contentEntity.setRecipeQuantityNumber(contentDto.getRecipeQuantityNumber());
        contentEntity.setRecipeQuantityType(contentDto.getRecipeQuantityType());
        contentEntity.setCategoryType(contentDto.getCategoryType());
        contentEntity.setStepDescription(contentDto.getStepDescription());
        contentEntity.setUsedIngredients(Arrays.toString(contentDto.getUsedIngredients()));
        // Set other fields accordingly

        return contentRepository.save(contentEntity);
    }

    @Override
    public List<ContentEntity> getAllContent() {
        return contentRepository.findAll();
    }

    @Override
    public Optional<ContentEntity> getContentById(Long id) {
        return contentRepository.findById(id);
    }

    @Override
    public void deleteContentById(Long id) {
        contentRepository.deleteById(id);
    }
}
