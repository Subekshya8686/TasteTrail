package org.example.taste_trail.service;

import org.example.taste_trail.dto.ContentDto;
import org.example.taste_trail.entity.ContentEntity;

import java.util.List;

public interface ContentService {

    Long save(ContentDto contentDto);

    List<ContentEntity> getAll();

    ContentEntity getById(Long id);

    void deleteById(Long id);
}
