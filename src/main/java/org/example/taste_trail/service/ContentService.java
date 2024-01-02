package org.example.taste_trail.service;

import org.example.taste_trail.dto.ContentDto;
import org.example.taste_trail.entity.ContentEntity;

import java.util.List;
import java.util.Optional;

public interface ContentService {

    ContentEntity save(ContentDto contentDto);

    List<ContentEntity> getAllContent();

    Optional<ContentEntity> getContentById(Long id);

    void deleteContentById(Long id);
}
