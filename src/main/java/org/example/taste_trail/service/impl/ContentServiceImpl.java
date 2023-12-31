package org.example.taste_trail.service.impl;

import org.example.taste_trail.dto.ContentDto;
import org.example.taste_trail.entity.ContentEntity;
import org.example.taste_trail.repository.ContentRepository;
import org.example.taste_trail.service.ContentService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
    public Long save(ContentDto contentDto) {
        ContentEntity contentEntity = new ContentEntity();
        // Copy properties from DTO to entity
        BeanUtils.copyProperties(contentDto, contentEntity);

        ContentEntity savedContent = contentRepository.save(contentEntity);
        return savedContent.getContentId();
    }

    @Override
    public List<ContentEntity> getAll() {
        return contentRepository.findAll();
    }

    @Override
    public ContentEntity getById(Long id) {
        Optional<ContentEntity> optionalContentEntity = contentRepository.findById(id);
        return optionalContentEntity.orElse(null);
    }

    @Override
    public void deleteById(Long id) {
        contentRepository.deleteById(id);
    }
}
