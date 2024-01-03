package org.example.taste_trail.controller;

import org.example.taste_trail.dto.ContentDto;
import org.example.taste_trail.entity.ContentEntity;
import org.example.taste_trail.service.ContentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/content")
public class ContentController {

    private final ContentService contentService;

    @Autowired
    public ContentController(ContentService contentService) {
        this.contentService = contentService;
    }

    @PostMapping("/upload")
    public ResponseEntity<String> uploadContent(@RequestBody ContentDto contentDto) {
        // Convert DTO to entity and save
        ContentEntity contentEntity = contentService.save(contentDto);
        return new ResponseEntity<>("Content uploaded successfully with ID: " + contentEntity.getContentId(), HttpStatus.CREATED);
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<ContentEntity>> getAllContent() {
        List<ContentEntity> contentList = contentService.getAllContent();
        return new ResponseEntity<>(contentList, HttpStatus.OK);
    }

    @GetMapping("/getById/{id}")
    public ResponseEntity<ContentEntity> getContentById(@PathVariable Long id) {
        Optional<ContentEntity> contentEntity = contentService.getContentById(id);
        return contentEntity.map(entity -> new ResponseEntity<>(entity, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/deleteById/{id}")
    public ResponseEntity<String> deleteContentById(@PathVariable Long id) {
        contentService.deleteContentById(id);
        return new ResponseEntity<>("Content deleted successfully", HttpStatus.OK);
    }

    // Add other CRUD operations as needed
}
