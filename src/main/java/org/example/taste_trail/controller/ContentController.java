package org.example.taste_trail.controller;

import org.example.taste_trail.dto.ContentDto;
import org.example.taste_trail.entity.ContentEntity;
import org.example.taste_trail.service.ContentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/content")
public class ContentController {

    private final ContentService contentService;

    @Autowired
    public ContentController(ContentService contentService) {
        this.contentService = contentService;
    }

    @PostMapping("/save")
    public Long saveContent(@RequestBody ContentDto contentDto) {
        return contentService.save(contentDto);
    }

    @GetMapping("/getAll")
    public List<ContentEntity> getAllContent() {
        return contentService.getAll();
    }

    @GetMapping("/getById/{id}")
    public ContentEntity getById(@PathVariable("id") Long id) {
        return contentService.getById(id);
    }

//    @GetMapping("/getByCategoryID/{category_id}")
//    public

    @DeleteMapping("/deleteById/{id}")
    public void deleteById(@PathVariable("id") Long id) {
        contentService.deleteById(id);
    }
}
