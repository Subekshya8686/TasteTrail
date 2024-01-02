<<<<<<< HEAD
//package org.example.taste_trail.controller;
//
//import com.online.test_trail.dto.request.CategoryRequest;
//import com.online.test_trail.entity.CategoryEntity;
//import com.online.test_trail.helper.ApiResponse;
//import com.online.test_trail.service.CategoryService;
//import lombok.RequiredArgsConstructor;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//import java.util.Map;
//
//@RestController
//@RequestMapping("/category")
//@RequiredArgsConstructor
//public class CategoryController {
//
//    private final CategoryService categoryService;
//    private final ApiResponse apiResponse;
//
//    @GetMapping()
//    public ResponseEntity<Map<String, Object>> getAllCategories() {
//        List<CategoryEntity> items = categoryService.getAllCategories();
//        return apiResponse.successResponse("Catogories fetched successfully.", true, null, items);
//    }
//
//    @GetMapping("{id}")
//    public ResponseEntity<Map<String, Object>> getCategoryById(@PathVariable Integer id) {
//        CategoryEntity item = categoryService.getCategoryById(id);
//        return apiResponse.successResponse("Category fetched successfully.", true, null, item);
//    }
//
//    @PostMapping()
//    public ResponseEntity<Map<String, Object>> saveCategory(@RequestBody CategoryRequest categoryEntity) {
//        categoryService.save(categoryEntity);
//        return apiResponse.successResponse("Category saved successfully.", true, null, categoryEntity.getId());
//    }
//
//    @DeleteMapping("{id}")
//    public ResponseEntity<Map<String, Object>> deleteCategory(@PathVariable Integer id) {
//        categoryService.deleteCategory(id);
//        return apiResponse.successResponse("Category deleted successfully.", true, null, null);
//    }
//
//    @PutMapping()
//    public ResponseEntity<Map<String, Object>> updateCategory(@RequestBody CategoryRequest categoryEntity) {
//        categoryService.updateCategory(categoryEntity);
//        return apiResponse.successResponse("Category updated successfully.", true, null, categoryEntity);
//    }
//}
=======
package org.example.taste_trail.controller;

import lombok.RequiredArgsConstructor;
import org.example.taste_trail.dto.request.CategoryRequest;
import org.example.taste_trail.entity.CategoryEntity;
import org.example.taste_trail.helper.ApiResponse;
import org.example.taste_trail.service.impl.CategoryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/category")
@RequiredArgsConstructor
public class CategoryController {

    private final CategoryService categoryService;
    private final ApiResponse apiResponse;

    @GetMapping()
    public ResponseEntity<Map<String, Object>> getAllCategories() {
        List<CategoryEntity> items = categoryService.getAllCategories();
        return apiResponse.successResponse("Catogories fetched successfully.", true, null, items);
    }

    @GetMapping("{id}")
    public ResponseEntity<Map<String, Object>> getCategoryById(@PathVariable Integer id) {
        CategoryEntity item = categoryService.getCategoryById(id);
        return apiResponse.successResponse("Category fetched successfully.", true, null, item);
    }

    @PostMapping()
    public ResponseEntity<Map<String, Object>> saveCategory(@RequestBody CategoryRequest categoryEntity) {
        categoryService.save(categoryEntity);
        return apiResponse.successResponse("Category saved successfully.", true, null, categoryEntity.getId());
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Map<String, Object>> deleteCategory(@PathVariable Integer id) {
        categoryService.deleteCategory(id);
        return apiResponse.successResponse("Category deleted successfully.", true, null, null);
    }

    @PutMapping()
    public ResponseEntity<Map<String, Object>> updateCategory(@RequestBody CategoryRequest categoryEntity) {
        categoryService.updateCategory(categoryEntity);
        return apiResponse.successResponse("Category updated successfully.", true, null, categoryEntity);
    }
}
>>>>>>> 37d5d53a27e66b9de1326a176c4a6ff5f575c412
